CREATE TABLE IF NOT EXISTS PUBLIC.VBMS_EXT_CLAIM (
	"CLAIM_ID" NUMERIC(38, 0) PRIMARY KEY UNIQUE NOT NULL,
	"CLAIM_DATE" TIMESTAMP WITHOUT TIME ZONE,
	"EP_CODE" CHARACTER VARYING(25),
	"SUSPENSE_DATE" TIMESTAMP WITHOUT TIME ZONE,
	"SUSPENSE_REASON_CODE" CHARACTER VARYING(25),
	"SUSPENSE_REASON_COMMENTS" CHARACTER VARYING(1000),
	"CLAIMANT_PERSON_ID" NUMERIC(38, 0),
	"CONTENTION_COUNT" INTEGER,
	"CLAIM_SOJ" CHARACTER VARYING(25),
	"TEMPORARY_CLAIM_SOJ" CHARACTER VARYING(25),
	"PRIORITY" CHARACTER VARYING(10),
	"TYPE_CODE" CHARACTER VARYING(25),
	"LIFECYCLE_STATUS_NAME" CHARACTER VARYING(50),
	"LEVEL_STATUS_CODE" CHARACTER VARYING(25),
	"SUBMITTER_APPLICATION_CODE" CHARACTER VARYING(25),
	"SUBMITTER_ROLE_CODE" CHARACTER VARYING(25),
	"VETERAN_PERSON_ID" NUMERIC(15, 0),
	"ESTABLISHMENT_DATE" TIMESTAMP WITHOUT TIME ZONE,
	"INTAKE_SITE" CHARACTER VARYING(25),
	"PAYEE_CODE" CHARACTER VARYING(25),
	"SYNC_ID" NUMERIC(38, 0) NOT NULL,
	"CREATEDDT" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NULL,
	"LASTUPDATEDT" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NULL,
	"EXPIRATIONDT" TIMESTAMP WITHOUT TIME ZONE,
	"VERSION" NUMERIC(38, 0) NOT NULL DEFAULT NULL,
	"LIFECYCLE_STATUS_CHANGE_DATE" TIMESTAMP WITHOUT TIME ZONE,
	"RATING_SOJ" CHARACTER VARYING(25),
	"PROGRAM_TYPE_CODE" CHARACTER VARYING(10),
	"SERVICE_TYPE_CODE" CHARACTER VARYING(10),
	"PREVENT_AUDIT_TRIG" SMALLINT NOT NULL DEFAULT 0,
	"PRE_DISCHARGE_TYPE_CODE" CHARACTER VARYING(10),
	"PRE_DISCHARGE_IND" CHARACTER VARYING(5),
	"ORGANIZATION_NAME" CHARACTER VARYING(100),
	"ORGANIZATION_SOJ" CHARACTER VARYING(25),
	"ALLOW_POA_ACCESS" CHARACTER VARYING(5),
	"POA_CODE" CHARACTER VARYING(25)
);

CREATE INDEX IF NOT EXISTS CLAIM_ID_INDEX ON PUBLIC.VBMS_EXT_CLAIM ("CLAIM_ID");

CREATE INDEX IF NOT EXISTS LEVEL_STATUS_CODE_INDEX ON PUBLIC.VBMS_EXT_CLAIM ("LEVEL_STATUS_CODE");

drop trigger if exists update_claim_status_trigger on vbms_ext_claim;

create or replace function public.update_claim_status_trigger_function()
returns trigger as $$
	declare
		string_claim_id varchar(25);
		epe_id integer;
	begin
		if (NEW.\"EP_CODE\" LIKE '04%'
				OR NEW.\"EP_CODE\" LIKE '03%'
				OR NEW.\"EP_CODE\" LIKE '93%'
				OR NEW.\"EP_CODE\" LIKE '68%')
				and (NEW.\"LEVEL_STATUS_CODE\" = 'CLR' OR NEW.\"LEVEL_STATUS_CODE\" = 'CAN') then

			string_claim_id := cast(NEW.\"CLAIM_ID\" as varchar);

			select id into epe_id
			from end_product_establishments
			where (reference_id = string_claim_id
			and (synced_status is null or synced_status <> NEW.\"LEVEL_STATUS_CODE\"));

			if epe_id > 0
			then
				if not exists (
					select 1
					from priority_end_product_sync_queue
					where end_product_establishment_id = epe_id
				) then
					insert into priority_end_product_sync_queue (created_at, end_product_establishment_id, updated_at)
					values (now(), epe_id, now());
				end if;
			end if;
		end if;
		return null;
	end;
$$
language plpgsql;

create trigger update_claim_status_trigger
after update or insert on vbms_ext_claim
for each row
execute procedure public.update_claim_status_trigger_function();

# frozen_string_literal: true

require "pg"

conn = CaseflowRecord.connection
conn.execute("create table caseflow_audit.vbms_communication_packages_audit (
              id BIGSERIAL PRIMARY KEY,
              type_of_change CHAR(1) not null,
              vbms_communication_package_id bigint not null,
              comm_package_name varchar NOT NULL,
              created_at timestamp NOT NULL,
              created_by_id int8 NULL,
              document_referenced _int8 NULL DEFAULT '{}'::bigint[],
              file_number varchar NULL,
              status varchar NULL,
              updated_at timestamp NOT NULL,
              updated_by_id int8 NULL,
              vbms_uploaded_document_id int8 NULL
            );")

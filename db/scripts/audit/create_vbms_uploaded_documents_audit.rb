# frozen_string_literal: true

require "pg"

conn = CaseflowRecord.connection
conn.execute("create table caseflow_audit.vbms_uploaded_documents_audit (
              id BIGSERIAL PRIMARY KEY,
              type_of_change CHAR(1) not null,
              vbms_uploaded_documents_id bigint not null,
              appeal_id int8,
              appeal_type varchar,
              attempted_at timestamp,
              canceled_at timestamp,
              created_at timestamp NOT NULL,
              document_name varchar,
              document_subject varchar,
              document_type varchar NOT NULL,
              error varchar,
              last_submitted_at timestamp,
              processed_at timestamp,
              submitted_at timestamp,
              updated_at timestamp NOT NULL,
              uploaded_to_vbms_at timestamp,
              veteran_file_number varchar
            );")

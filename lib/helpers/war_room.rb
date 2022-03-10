# frozen_string_literal: true

module WarRoom
  class Outcode
    def ama_run(uuid_pass_in)
      # set current user
      RequestStore[:current_user] = OpenStruct.new(ip_address: "127.0.0.1", station_id: "283", css_id: "CSFLOW", regional_office: "DSUSER")

      uuid = uuid_pass_in
      # set appeal parameter
      appeal = Appeal.find_by_uuid(uuid)

      if appeal.nil?
        puts("No appeal was found for that uuid. Aborting...")
        fail Interrupt
      end

      # view task tree
      appeal.treee

      # set decision document variable
      dd = appeal.decision_document

      FixFileNumberWizard.run(appeal: appeal)
      #need to do y or q
    end

    def legacy_run(vacols_id)
      # set current user
      RequestStore[:current_user] = OpenStruct.new(ip_address: "127.0.0.1", station_id: "283", css_id: "CSFLOW", regional_office: "DSUSER")

      # set appeal parameter
      appeal = LegacyAppeal.find_by_vacols_id(vacols_id)

      if appeal.nil?
        puts("No appeal was found for that vacols id. Aborting...")
        fail Interrupt
      end

      # view task tree
      appeal.treee

      FixFileNumberWizard.run(appeal: appeal)
      #need to do y or q
    end
  end

  class OutcodeWithDuplicateVeteran
    def run_check_by_ama_uuid(uuid)
      dvc = DuplicateVeteranChecker.new
      dvc.check_by_ama_appeal_uuid(uuid)
    end

    def run_check_by_vacols_id(vacols_id)
      dvc = DuplicateVeteranChecker.new
      dvc.check_by_legacy_appeal_vacols_id(vacols_id)
    end

    def run_check_by_duplicate_veteran_file_number(duplicate_veteran_file_number)
      dvc = DuplicateVeteranChecker.new
      dvc.check_by_duplicate_veteran_file_number(duplicate_veteran_file_number)
    end

    def run_remediation_by_duplicate_veteran_file_number(duplicate_veteran_file_number)
      dvc = DuplicateVeteranChecker.new
      dvc.run_remediation(duplicate_veteran_file_number)
    end

    def run_remediation_by_ama_appeals_uuid(uuid)
      dvc = DuplicateVeteranChecker.new
      dvc.run_remediation_by_ama_appeal_uuid(uuid)
    end

    def run_remediation_by_vacols_id(vacols_id)
      dvc = DuplicateVeteranChecker.new

      dvc.run_remediation_by_vacols_id(vacols_id)
    end
  end

  class DuplicateEPSupplementalClaim
    def run_by_claim_id(claim_id) 
      # set current user
      RequestStore[:current_user] = OpenStruct.new(ip_address: "127.0.0.1", station_id: "283", css_id: "CSFLOW", regional_office: "DSUSER")

      sc=SupplementalClaim.find(claim_id)

      if sc.nil? 
        puts("No supplemental claim was found for the following id " + sc)
      end

      # Validate that DuplicateEP is the error on this claim
      sc.establishment_error

      # Set Veteran for this Supplemental Claim
      v=sc.veteran

      # Use the file_number from the v output to look up the Veteran claims in Caseflow :  https://appeals.cf.ds.va.gov/search

      # Validate if there are any existing 030 or 040 claims for this veteran in Caseflow
      ###3/2/22 This POA Validation step need re-evaluated. Returning 'True' from the below command does not mean that the Claim can't be established. 
      ###If the only claim is the current unestablished claim that we are investigating this may be a POA issue. Continue with the below step, otherwise continue on with Step 6.

                  ###sc.claimant.representative_name.present?

      #Triage:
      #Remediation:

      ###If the above output is => false then there are no POAs associated with this Veteran and we can proceed with the rest of the remediation steps
      ###If the above output is => true then there are POAs associated with this Veteran and the duplicateEP is caused by the known POA issue. This Supplemental Claim needs sent over to Martin Menchey for remediation.

      # Validate if there are any existing modifiers already associated with the Veteran 
      v.end_products.map(&:modifier)

      ## If the above output shows all ten options for the 040 modifier, then all available modifiers are taken. This Supplemental Claim needs sent over to Martin Menchey for remediation.
      ##If the above output does not show all ten options for the 040 then proceed with Step 7.
      
      # Set the End Product Establishments Parameter
      epes.count
    end
  end 


end

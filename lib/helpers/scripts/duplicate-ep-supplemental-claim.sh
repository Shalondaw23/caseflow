cd /opt/caseflow-certification/src; bin/rails c << DONETOKEN
x = WarRoom::OutcodeWithDuplicateEP.new
x.supplemental_claim_duplicate_ep("$1")
DONETOKEN
<<<<<<< HEAD
cd /opt/caseflow-certification/src; bin/rails c << DONETOKEN
=======
rails c << DONETOKEN
>>>>>>> master
RequestStore[:current_user] = User.system_user

dvc = WarRoom::OutcodeWithDuplicateVeteran.new

dvc.run_check_by_duplicate_veteran_file_number("$1")

DONETOKEN
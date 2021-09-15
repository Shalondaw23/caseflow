---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# AttorneyDispatchReturnTask_User for evidence_submission

[AttorneyDispatchReturnTask_User description](../task_descr/AttorneyDispatchReturnTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

JudgeDispatchReturnTask_User -- 10 --> AttorneyDispatchReturnTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 10 times

**Child Tasks:**

   * (No child tasks)

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

AttorneyDispatchReturnTask_User -- 2 --> JudgeDispatchReturnTask_User
JudgeDispatchReturnTask_User -- 9 --> AttorneyDispatchReturnTask_User
TimedHoldTask_User -- 1 --> AttorneyDispatchReturnTask_User
BvaDispatchTask_User -- 1 --> AttorneyDispatchReturnTask_User
{{< /mermaid >}}
**Before:**

   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 9 times
   * [BvaDispatchTask_User](BvaDispatchTask_User.md): 1 times
   * [TimedHoldTask_User](TimedHoldTask_User.md): 1 times

**After:**

   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 2 times

## Task Creation Sequences

There are 11 total occurrences of AttorneyDispatchReturnTask_User among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to AttorneyDispatchReturnTask_User, sorted by frequency.

### RTO.TVTO.DTO.ESWTO.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

2 (18%) occurrences (example appeal IDs: [63691, 111650])

Task Tree for appeal with ID 63691
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(organization)"/]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(organization)"}}
style 8.BvaDispatchTask fill:#e78ac3
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(user)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.JudgeDispatchReturnTask fill:#d08f32
  10.JudgeDispatchReturnTask["10.JudgeDispatchReturnTask\n(user)"]
style 11.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  11.AttorneyDispatchReturnTask["11.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
7.BvaDispatchTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.JudgeDispatchReturnTask
10.JudgeDispatchReturnTask --> 11.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.SCMTU.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [160830])

Task Tree for appeal with ID 160830
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.SpecialCaseMovementTask fill:#f7754f
  3.SpecialCaseMovementTask["3.SpecialCaseMovementTask\n(user)"]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(organization)"}}
style 8.BvaDispatchTask fill:#e78ac3
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(user)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.JudgeDispatchReturnTask fill:#d08f32
  10.JudgeDispatchReturnTask["10.JudgeDispatchReturnTask\n(user)"]
style 11.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  11.AttorneyDispatchReturnTask["11.AttorneyDispatchReturnTask\n(user)"]
style 12.JudgeDispatchReturnTask fill:#d08f32
  12.JudgeDispatchReturnTask["12.JudgeDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
1.DistributionTask --> 3.SpecialCaseMovementTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
7.BvaDispatchTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.JudgeDispatchReturnTask
10.JudgeDispatchReturnTask --> 11.AttorneyDispatchReturnTask
9.BvaDispatchTask --> 12.JudgeDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.JATU.ATU.ARTU.JDRTU.BDTO.BDTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [158787])

Task Tree for appeal with ID 158787
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(organization)"/]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.AttorneyRewriteTask fill:#17becf
  7.AttorneyRewriteTask["7.AttorneyRewriteTask\n(user)"]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(organization)"}}
style 10.BvaDispatchTask fill:#e78ac3
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(user)"}}
style 11.BvaDispatchTask fill:#e78ac3
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(user)"}}
style 12.JudgeDispatchReturnTask fill:#d08f32
  12.JudgeDispatchReturnTask["12.JudgeDispatchReturnTask\n(user)"]
style 13.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  13.AttorneyDispatchReturnTask["13.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 6.AttorneyTask
8.JudgeDecisionReviewTask --> 7.AttorneyRewriteTask
0.RootTask --> 8.JudgeDecisionReviewTask
0.RootTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.BvaDispatchTask
9.BvaDispatchTask --> 11.BvaDispatchTask
11.BvaDispatchTask --> 12.JudgeDispatchReturnTask
12.JudgeDispatchReturnTask --> 13.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.JATU.JATU.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [35451])

Task Tree for appeal with ID 35451
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(organization)"/]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
style 11.JudgeAssignTask fill:#b3b3b3
  11.JudgeAssignTask[\"11.JudgeAssignTask\n(user)"/]
style 12.JudgeDecisionReviewTask fill:#e5c494
  12.JudgeDecisionReviewTask[["12.JudgeDecisionReviewTask\n(user)"]]
style 13.AttorneyTask fill:#ffb482
  13.AttorneyTask["13.AttorneyTask\n(user)"]
style 14.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(organization)"}}
style 15.BvaDispatchTask fill:#e78ac3
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(user)"}}
style 16.JudgeDispatchReturnTask fill:#d08f32
  16.JudgeDispatchReturnTask["16.JudgeDispatchReturnTask\n(user)"]
style 17.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  17.AttorneyDispatchReturnTask["17.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.JudgeAssignTask
0.RootTask --> 12.JudgeDecisionReviewTask
12.JudgeDecisionReviewTask --> 13.AttorneyTask
0.RootTask --> 14.BvaDispatchTask
14.BvaDispatchTask --> 15.BvaDispatchTask
15.BvaDispatchTask --> 16.JudgeDispatchReturnTask
16.JudgeDispatchReturnTask --> 17.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.JDRTU.ATU.EOAMTO.EOAMTO.EOAMTU.BDTO.BDTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [1794])

Task Tree for appeal with ID 1794
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.JudgeDecisionReviewTask fill:#e5c494
  3.JudgeDecisionReviewTask[["3.JudgeDecisionReviewTask\n(user)"]]
style 4.AttorneyTask fill:#ffb482
  4.AttorneyTask["4.AttorneyTask\n(user)"]
style 5.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  5.EvidenceOrArgumentMailTask["5.EvidenceOrArgumentMailTask\n(organization)"]
style 6.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  6.EvidenceOrArgumentMailTask["6.EvidenceOrArgumentMailTask\n(organization)"]
style 7.EvidenceOrArgumentMailTask fill:#ff9f9b
  7.EvidenceOrArgumentMailTask["7.EvidenceOrArgumentMailTask\n(user)"]
style 8.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(organization)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.JudgeDispatchReturnTask fill:#d08f32
  10.JudgeDispatchReturnTask["10.JudgeDispatchReturnTask\n(user)"]
style 11.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  11.AttorneyDispatchReturnTask["11.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.EvidenceOrArgumentMailTask
5.EvidenceOrArgumentMailTask --> 6.EvidenceOrArgumentMailTask
6.EvidenceOrArgumentMailTask --> 7.EvidenceOrArgumentMailTask
0.RootTask --> 8.BvaDispatchTask
8.BvaDispatchTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.JudgeDispatchReturnTask
10.JudgeDispatchReturnTask --> 11.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.BDTO.BDTU.JDRTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [82964])

Task Tree for appeal with ID 82964
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(organization)"/]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  7.QualityReviewTask[\"7.QualityReviewTask\n(organization)"\]
style 8.QualityReviewTask fill:#b9f2f0
  8.QualityReviewTask[\"8.QualityReviewTask\n(user)"\]
style 9.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(organization)"}}
style 10.BvaDispatchTask fill:#e78ac3
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(user)"}}
style 11.JudgeDispatchReturnTask fill:#d08f32
  11.JudgeDispatchReturnTask["11.JudgeDispatchReturnTask\n(user)"]
style 12.JudgeDispatchReturnTask fill:#d08f32
  12.JudgeDispatchReturnTask["12.JudgeDispatchReturnTask\n(user)"]
style 13.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  13.AttorneyDispatchReturnTask["13.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.QualityReviewTask
7.QualityReviewTask --> 8.QualityReviewTask
0.RootTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.BvaDispatchTask
10.BvaDispatchTask --> 11.JudgeDispatchReturnTask
10.BvaDispatchTask --> 12.JudgeDispatchReturnTask
12.JudgeDispatchReturnTask --> 13.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.JATU.ATU.JDRTU.PCCTO.PCCTU.THTU.PCCTO.PCCTU.THTU.BDTO.BDTU.ADRTU

1 (9%) occurrences (example appeal IDs: [35043])

Task Tree for appeal with ID 35043
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeDecisionReviewTask fill:#e5c494
  4.JudgeDecisionReviewTask[["4.JudgeDecisionReviewTask\n(user)"]]
style 5.AttorneyTask fill:#ffb482
  5.AttorneyTask["5.AttorneyTask\n(user)"]
style 6.JudgeDecisionReviewTask fill:#e5c494
  6.JudgeDecisionReviewTask[["6.JudgeDecisionReviewTask\n(user)"]]
style 7.PoaClarificationColocatedTask fill:#c99232,stroke-dasharray: 5 5
  7.PoaClarificationColocatedTask["7.PoaClarificationColocatedTask\n(organization)"]
style 8.PoaClarificationColocatedTask fill:#c99232
  8.PoaClarificationColocatedTask["8.PoaClarificationColocatedTask\n(user)"]
style 9.TimedHoldTask fill:#fab0e4
  9.TimedHoldTask["9.TimedHoldTask\n(user)"]
style 10.PoaClarificationColocatedTask fill:#c99232,stroke-dasharray: 5 5
  10.PoaClarificationColocatedTask["10.PoaClarificationColocatedTask\n(organization)"]
style 11.PoaClarificationColocatedTask fill:#c99232
  11.PoaClarificationColocatedTask["11.PoaClarificationColocatedTask\n(user)"]
style 12.TimedHoldTask fill:#fab0e4
  12.TimedHoldTask["12.TimedHoldTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}
style 15.BvaDispatchTask fill:#e78ac3
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(user)"}}
style 16.JudgeDispatchReturnTask fill:#d08f32
  16.JudgeDispatchReturnTask["16.JudgeDispatchReturnTask\n(user)"]
style 17.JudgeDispatchReturnTask fill:#d08f32
  17.JudgeDispatchReturnTask["17.JudgeDispatchReturnTask\n(user)"]
style 18.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  18.AttorneyDispatchReturnTask["18.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 7.PoaClarificationColocatedTask
7.PoaClarificationColocatedTask --> 8.PoaClarificationColocatedTask
8.PoaClarificationColocatedTask --> 9.TimedHoldTask
6.JudgeDecisionReviewTask --> 10.PoaClarificationColocatedTask
10.PoaClarificationColocatedTask --> 11.PoaClarificationColocatedTask
11.PoaClarificationColocatedTask --> 12.TimedHoldTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
13.BvaDispatchTask --> 15.BvaDispatchTask
15.BvaDispatchTask --> 16.JudgeDispatchReturnTask
15.BvaDispatchTask --> 17.JudgeDispatchReturnTask
17.JudgeDispatchReturnTask --> 18.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.IHPTO.JDRTU.ATU.PRFCTO.PRFCTU.TO.TU.TVTO.EOAMTO.EOAMTO.EOAMTU.BDTO.BDTU.JDRTU.JDRTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [319])

Task Tree for appeal with ID 319
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  1.InformalHearingPresentationTask[/"1.InformalHearingPresentationTask\n(organization)"\]
style 2.JudgeDecisionReviewTask fill:#e5c494
  2.JudgeDecisionReviewTask[["2.JudgeDecisionReviewTask\n(user)"]]
style 3.AttorneyTask fill:#ffb482
  3.AttorneyTask["3.AttorneyTask\n(user)"]
style 4.PreRoutingFoiaColocatedTask fill:#b088f4,stroke-dasharray: 5 5
  4.PreRoutingFoiaColocatedTask["4.PreRoutingFoiaColocatedTask\n(organization)"]
style 5.PreRoutingFoiaColocatedTask fill:#b088f4
  5.PreRoutingFoiaColocatedTask["5.PreRoutingFoiaColocatedTask\n(user)"]
style 6.Task fill:#9e8ef4,stroke-dasharray: 5 5
  6.Task["6.Task\n(organization)"]
style 7.Task fill:#9e8ef4
  7.Task["7.Task\n(user)"]
style 8.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  8.TrackVeteranTask(["8.TrackVeteranTask\n(organization)"])
style 9.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  9.EvidenceOrArgumentMailTask["9.EvidenceOrArgumentMailTask\n(organization)"]
style 10.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  10.EvidenceOrArgumentMailTask["10.EvidenceOrArgumentMailTask\n(organization)"]
style 11.EvidenceOrArgumentMailTask fill:#ff9f9b
  11.EvidenceOrArgumentMailTask["11.EvidenceOrArgumentMailTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(organization)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}
style 14.JudgeDispatchReturnTask fill:#d08f32
  14.JudgeDispatchReturnTask["14.JudgeDispatchReturnTask\n(user)"]
style 15.JudgeDispatchReturnTask fill:#d08f32
  15.JudgeDispatchReturnTask["15.JudgeDispatchReturnTask\n(user)"]
style 16.JudgeDispatchReturnTask fill:#d08f32
  16.JudgeDispatchReturnTask["16.JudgeDispatchReturnTask\n(user)"]
style 17.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  17.AttorneyDispatchReturnTask["17.AttorneyDispatchReturnTask\n(user)"]
style 18.JudgeDispatchReturnTask fill:#d08f32
  18.JudgeDispatchReturnTask["18.JudgeDispatchReturnTask\n(user)"]
style 19.JudgeDispatchReturnTask fill:#d08f32
  19.JudgeDispatchReturnTask["19.JudgeDispatchReturnTask\n(user)"]
style 20.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  20.AttorneyDispatchReturnTask["20.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.InformalHearingPresentationTask
0.RootTask --> 2.JudgeDecisionReviewTask
2.JudgeDecisionReviewTask --> 3.AttorneyTask
3.AttorneyTask --> 4.PreRoutingFoiaColocatedTask
4.PreRoutingFoiaColocatedTask --> 5.PreRoutingFoiaColocatedTask
5.PreRoutingFoiaColocatedTask --> 6.Task
6.Task --> 7.Task
0.RootTask --> 8.TrackVeteranTask
0.RootTask --> 9.EvidenceOrArgumentMailTask
9.EvidenceOrArgumentMailTask --> 10.EvidenceOrArgumentMailTask
10.EvidenceOrArgumentMailTask --> 11.EvidenceOrArgumentMailTask
0.RootTask --> 12.BvaDispatchTask
12.BvaDispatchTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.JudgeDispatchReturnTask
13.BvaDispatchTask --> 15.JudgeDispatchReturnTask
13.BvaDispatchTask --> 16.JudgeDispatchReturnTask
16.JudgeDispatchReturnTask --> 17.AttorneyDispatchReturnTask
13.BvaDispatchTask --> 18.JudgeDispatchReturnTask
13.BvaDispatchTask --> 19.JudgeDispatchReturnTask
19.JudgeDispatchReturnTask --> 20.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.IHPTO.JDRTU.ATU.PRFCTO.PRFCTU.TO.TU.TVTO.EOAMTO.EOAMTO.EOAMTU.BDTO.BDTU.JDRTU.JDRTU.JDRTU.ADRTU.JDRTU.JDRTU.ADRTU

1 (9%) occurrences (example appeal IDs: [319])

Task Tree for appeal with ID 319
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  1.InformalHearingPresentationTask[/"1.InformalHearingPresentationTask\n(organization)"\]
style 2.JudgeDecisionReviewTask fill:#e5c494
  2.JudgeDecisionReviewTask[["2.JudgeDecisionReviewTask\n(user)"]]
style 3.AttorneyTask fill:#ffb482
  3.AttorneyTask["3.AttorneyTask\n(user)"]
style 4.PreRoutingFoiaColocatedTask fill:#b088f4,stroke-dasharray: 5 5
  4.PreRoutingFoiaColocatedTask["4.PreRoutingFoiaColocatedTask\n(organization)"]
style 5.PreRoutingFoiaColocatedTask fill:#b088f4
  5.PreRoutingFoiaColocatedTask["5.PreRoutingFoiaColocatedTask\n(user)"]
style 6.Task fill:#9e8ef4,stroke-dasharray: 5 5
  6.Task["6.Task\n(organization)"]
style 7.Task fill:#9e8ef4
  7.Task["7.Task\n(user)"]
style 8.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  8.TrackVeteranTask(["8.TrackVeteranTask\n(organization)"])
style 9.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  9.EvidenceOrArgumentMailTask["9.EvidenceOrArgumentMailTask\n(organization)"]
style 10.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  10.EvidenceOrArgumentMailTask["10.EvidenceOrArgumentMailTask\n(organization)"]
style 11.EvidenceOrArgumentMailTask fill:#ff9f9b
  11.EvidenceOrArgumentMailTask["11.EvidenceOrArgumentMailTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(organization)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}
style 14.JudgeDispatchReturnTask fill:#d08f32
  14.JudgeDispatchReturnTask["14.JudgeDispatchReturnTask\n(user)"]
style 15.JudgeDispatchReturnTask fill:#d08f32
  15.JudgeDispatchReturnTask["15.JudgeDispatchReturnTask\n(user)"]
style 16.JudgeDispatchReturnTask fill:#d08f32
  16.JudgeDispatchReturnTask["16.JudgeDispatchReturnTask\n(user)"]
style 17.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  17.AttorneyDispatchReturnTask["17.AttorneyDispatchReturnTask\n(user)"]
style 18.JudgeDispatchReturnTask fill:#d08f32
  18.JudgeDispatchReturnTask["18.JudgeDispatchReturnTask\n(user)"]
style 19.JudgeDispatchReturnTask fill:#d08f32
  19.JudgeDispatchReturnTask["19.JudgeDispatchReturnTask\n(user)"]
style 20.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  20.AttorneyDispatchReturnTask["20.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.InformalHearingPresentationTask
0.RootTask --> 2.JudgeDecisionReviewTask
2.JudgeDecisionReviewTask --> 3.AttorneyTask
3.AttorneyTask --> 4.PreRoutingFoiaColocatedTask
4.PreRoutingFoiaColocatedTask --> 5.PreRoutingFoiaColocatedTask
5.PreRoutingFoiaColocatedTask --> 6.Task
6.Task --> 7.Task
0.RootTask --> 8.TrackVeteranTask
0.RootTask --> 9.EvidenceOrArgumentMailTask
9.EvidenceOrArgumentMailTask --> 10.EvidenceOrArgumentMailTask
10.EvidenceOrArgumentMailTask --> 11.EvidenceOrArgumentMailTask
0.RootTask --> 12.BvaDispatchTask
12.BvaDispatchTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.JudgeDispatchReturnTask
13.BvaDispatchTask --> 15.JudgeDispatchReturnTask
13.BvaDispatchTask --> 16.JudgeDispatchReturnTask
16.JudgeDispatchReturnTask --> 17.AttorneyDispatchReturnTask
13.BvaDispatchTask --> 18.JudgeDispatchReturnTask
13.BvaDispatchTask --> 19.JudgeDispatchReturnTask
19.JudgeDispatchReturnTask --> 20.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.EOAMTO.EOAMTU.EOAMTO.EOAMTO.JATU.JDRTU.ATU.TVTO.IHPTO.IHPTU.HRMTO.HRMTO.HRMTU.QRTO.QRTU.BDTO.BDTU.JDRTU.JQRTU.AQRTU.ICTO.ICTU.THTU.ADRTU

1 (9%) occurrences (example appeal IDs: [100503])

Task Tree for appeal with ID 100503
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  3.EvidenceOrArgumentMailTask["3.EvidenceOrArgumentMailTask\n(organization)"]
style 4.EvidenceOrArgumentMailTask fill:#ff9f9b
  4.EvidenceOrArgumentMailTask["4.EvidenceOrArgumentMailTask\n(user)"]
style 5.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  5.EvidenceOrArgumentMailTask["5.EvidenceOrArgumentMailTask\n(organization)"]
style 6.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  6.EvidenceOrArgumentMailTask["6.EvidenceOrArgumentMailTask\n(organization)"]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.AttorneyTask fill:#ffb482
  9.AttorneyTask["9.AttorneyTask\n(user)"]
style 10.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  10.TrackVeteranTask(["10.TrackVeteranTask\n(organization)"])
style 11.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  11.InformalHearingPresentationTask[/"11.InformalHearingPresentationTask\n(organization)"\]
style 12.InformalHearingPresentationTask fill:#a1c9f4
  12.InformalHearingPresentationTask[/"12.InformalHearingPresentationTask\n(user)"\]
style 13.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  13.HearingRelatedMailTask["13.HearingRelatedMailTask\n(organization)"]
style 14.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  14.HearingRelatedMailTask["14.HearingRelatedMailTask\n(organization)"]
style 15.HearingRelatedMailTask fill:#ff7f0e
  15.HearingRelatedMailTask["15.HearingRelatedMailTask\n(user)"]
style 16.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  16.QualityReviewTask[\"16.QualityReviewTask\n(organization)"\]
style 17.QualityReviewTask fill:#b9f2f0
  17.QualityReviewTask[\"17.QualityReviewTask\n(user)"\]
style 18.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(organization)"}}
style 19.BvaDispatchTask fill:#e78ac3
  19.BvaDispatchTask{{"19.BvaDispatchTask\n(user)"}}
style 20.JudgeDispatchReturnTask fill:#d08f32
  20.JudgeDispatchReturnTask["20.JudgeDispatchReturnTask\n(user)"]
style 21.JudgeQualityReviewTask fill:#b09c32
  21.JudgeQualityReviewTask["21.JudgeQualityReviewTask\n(user)"]
style 22.AttorneyQualityReviewTask fill:#9ea231
  22.AttorneyQualityReviewTask["22.AttorneyQualityReviewTask\n(user)"]
style 23.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  23.IhpColocatedTask["23.IhpColocatedTask\n(organization)"]
style 24.IhpColocatedTask fill:#f77183
  24.IhpColocatedTask["24.IhpColocatedTask\n(user)"]
style 25.TimedHoldTask fill:#fab0e4
  25.TimedHoldTask["25.TimedHoldTask\n(user)"]
style 26.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  26.AttorneyDispatchReturnTask["26.AttorneyDispatchReturnTask\n(user)"]
style 27.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  27.AttorneyDispatchReturnTask["27.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.EvidenceOrArgumentMailTask
3.EvidenceOrArgumentMailTask --> 4.EvidenceOrArgumentMailTask
0.RootTask --> 5.EvidenceOrArgumentMailTask
0.RootTask --> 6.EvidenceOrArgumentMailTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
0.RootTask --> 10.TrackVeteranTask
0.RootTask --> 11.InformalHearingPresentationTask
11.InformalHearingPresentationTask --> 12.InformalHearingPresentationTask
0.RootTask --> 13.HearingRelatedMailTask
13.HearingRelatedMailTask --> 14.HearingRelatedMailTask
14.HearingRelatedMailTask --> 15.HearingRelatedMailTask
0.RootTask --> 16.QualityReviewTask
16.QualityReviewTask --> 17.QualityReviewTask
0.RootTask --> 18.BvaDispatchTask
18.BvaDispatchTask --> 19.BvaDispatchTask
19.BvaDispatchTask --> 20.JudgeDispatchReturnTask
17.QualityReviewTask --> 21.JudgeQualityReviewTask
21.JudgeQualityReviewTask --> 22.AttorneyQualityReviewTask
22.AttorneyQualityReviewTask --> 23.IhpColocatedTask
23.IhpColocatedTask --> 24.IhpColocatedTask
24.IhpColocatedTask --> 25.TimedHoldTask
20.JudgeDispatchReturnTask --> 26.AttorneyDispatchReturnTask
20.JudgeDispatchReturnTask --> 27.AttorneyDispatchReturnTask
{{< /mermaid >}}


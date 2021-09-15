---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# AttorneyQualityReviewTask_User for evidence_submission

[AttorneyQualityReviewTask_User description](../task_descr/AttorneyQualityReviewTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

AttorneyQualityReviewTask_User -- 5 --> IhpColocatedTask_Organization
AttorneyQualityReviewTask_User -- 2 --> FoiaColocatedTask_Organization
AttorneyQualityReviewTask_User -- 1 --> OtherColocatedTask_Organization
JudgeQualityReviewTask_User -- 62 --> AttorneyQualityReviewTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [JudgeQualityReviewTask_User](JudgeQualityReviewTask_User.md): 62 times

**Child Tasks:**

   * [IhpColocatedTask_Organization](IhpColocatedTask_Organization.md): 5 times
   * [FoiaColocatedTask_Organization](FoiaColocatedTask_Organization.md): 2 times
   * [OtherColocatedTask_Organization](OtherColocatedTask_Organization.md): 1 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

AttorneyQualityReviewTask_User -- 45 --> BvaDispatchTask_Organization
AttorneyQualityReviewTask_User -- 5 --> IhpColocatedTask_Organization
AttorneyQualityReviewTask_User -- 5 --> AttorneyQualityReviewTask_User
AttorneyQualityReviewTask_User -- 2 --> TrackVeteranTask_Organization
AttorneyQualityReviewTask_User -- 2 --> QualityReviewTask_User
AttorneyQualityReviewTask_User -- 2 --> OtherColocatedTask_Organization
AttorneyQualityReviewTask_User -- 2 --> FoiaColocatedTask_Organization
JudgeQualityReviewTask_User -- 49 --> AttorneyQualityReviewTask_User
AttorneyQualityReviewTask_User -- 5 --> AttorneyQualityReviewTask_User
TimedHoldTask_User -- 4 --> AttorneyQualityReviewTask_User
FoiaTask_User -- 2 --> AttorneyQualityReviewTask_User
QualityReviewTask_User -- 1 --> AttorneyQualityReviewTask_User
IhpColocatedTask_User -- 1 --> AttorneyQualityReviewTask_User
FoiaRequestMailTask_User -- 1 --> AttorneyQualityReviewTask_User
{{< /mermaid >}}
**Before:**

   * [JudgeQualityReviewTask_User](JudgeQualityReviewTask_User.md): 49 times
   * [AttorneyQualityReviewTask_User](AttorneyQualityReviewTask_User.md): 5 times
   * [TimedHoldTask_User](TimedHoldTask_User.md): 4 times
   * [FoiaTask_User](FoiaTask_User.md): 2 times
   * [IhpColocatedTask_User](IhpColocatedTask_User.md): 1 times
   * [FoiaRequestMailTask_User](FoiaRequestMailTask_User.md): 1 times
   * [QualityReviewTask_User](QualityReviewTask_User.md): 1 times

**After:**

   * [BvaDispatchTask_Organization](BvaDispatchTask_Organization.md): 45 times
   * [AttorneyQualityReviewTask_User](AttorneyQualityReviewTask_User.md): 5 times
   * [IhpColocatedTask_Organization](IhpColocatedTask_Organization.md): 5 times
   * [QualityReviewTask_User](QualityReviewTask_User.md): 2 times
   * [FoiaColocatedTask_Organization](FoiaColocatedTask_Organization.md): 2 times
   * [OtherColocatedTask_Organization](OtherColocatedTask_Organization.md): 2 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 2 times

## Task Creation Sequences

There are 63 total occurrences of AttorneyQualityReviewTask_User among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to AttorneyQualityReviewTask_User, sorted by frequency.

### RTO.DTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

11 (17%) occurrences (example appeal IDs: [11231, 44195, 35606, 53908, 72995])

Task Tree for appeal with ID 11231
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
style 9.JudgeQualityReviewTask fill:#b09c32
  9.JudgeQualityReviewTask["9.JudgeQualityReviewTask\n(user)"]
style 10.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  10.AttorneyQualityReviewTask["10.AttorneyQualityReviewTask\n(user)"]
style 11.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(organization)"}}
style 12.BvaDispatchTask fill:#e78ac3
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.QualityReviewTask
7.QualityReviewTask --> 8.QualityReviewTask
8.QualityReviewTask --> 9.JudgeQualityReviewTask
9.JudgeQualityReviewTask --> 10.AttorneyQualityReviewTask
0.RootTask --> 11.BvaDispatchTask
11.BvaDispatchTask --> 12.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.IHPTO.IHPTU.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

6 (10%) occurrences (example appeal IDs: [25348, 11462, 16104, 11302, 24919])

Task Tree for appeal with ID 25348
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
style 4.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(organization)"\]
style 5.InformalHearingPresentationTask fill:#a1c9f4
  5.InformalHearingPresentationTask[/"5.InformalHearingPresentationTask\n(user)"\]
style 6.JudgeAssignTask fill:#b3b3b3
  6.JudgeAssignTask[\"6.JudgeAssignTask\n(user)"/]
style 7.JudgeDecisionReviewTask fill:#e5c494
  7.JudgeDecisionReviewTask[["7.JudgeDecisionReviewTask\n(user)"]]
style 8.AttorneyTask fill:#ffb482
  8.AttorneyTask["8.AttorneyTask\n(user)"]
style 9.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  9.QualityReviewTask[\"9.QualityReviewTask\n(organization)"\]
style 10.QualityReviewTask fill:#b9f2f0
  10.QualityReviewTask[\"10.QualityReviewTask\n(user)"\]
style 11.JudgeQualityReviewTask fill:#b09c32
  11.JudgeQualityReviewTask["11.JudgeQualityReviewTask\n(user)"]
style 12.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  12.AttorneyQualityReviewTask["12.AttorneyQualityReviewTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
2.DistributionTask --> 4.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
0.RootTask --> 6.JudgeAssignTask
0.RootTask --> 7.JudgeDecisionReviewTask
7.JudgeDecisionReviewTask --> 8.AttorneyTask
0.RootTask --> 9.QualityReviewTask
9.QualityReviewTask --> 10.QualityReviewTask
10.QualityReviewTask --> 11.JudgeQualityReviewTask
11.JudgeQualityReviewTask --> 12.AttorneyQualityReviewTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.JATU.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

2 (3%) occurrences (example appeal IDs: [42588, 117133])

Task Tree for appeal with ID 42588
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
style 6.JudgeAssignTask fill:#b3b3b3
  6.JudgeAssignTask[\"6.JudgeAssignTask\n(user)"/]
style 7.JudgeDecisionReviewTask fill:#e5c494
  7.JudgeDecisionReviewTask[["7.JudgeDecisionReviewTask\n(user)"]]
style 8.AttorneyTask fill:#ffb482
  8.AttorneyTask["8.AttorneyTask\n(user)"]
style 9.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  9.QualityReviewTask[\"9.QualityReviewTask\n(organization)"\]
style 10.QualityReviewTask fill:#b9f2f0
  10.QualityReviewTask[\"10.QualityReviewTask\n(user)"\]
style 11.JudgeQualityReviewTask fill:#b09c32
  11.JudgeQualityReviewTask["11.JudgeQualityReviewTask\n(user)"]
style 12.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  12.AttorneyQualityReviewTask["12.AttorneyQualityReviewTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.JudgeAssignTask
0.RootTask --> 7.JudgeDecisionReviewTask
7.JudgeDecisionReviewTask --> 8.AttorneyTask
0.RootTask --> 9.QualityReviewTask
9.QualityReviewTask --> 10.QualityReviewTask
10.QualityReviewTask --> 11.JudgeQualityReviewTask
11.JudgeQualityReviewTask --> 12.AttorneyQualityReviewTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

2 (3%) occurrences (example appeal IDs: [95652, 44525])

Task Tree for appeal with ID 95652
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
style 9.JudgeQualityReviewTask fill:#b09c32
  9.JudgeQualityReviewTask["9.JudgeQualityReviewTask\n(user)"]
style 10.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  10.AttorneyQualityReviewTask["10.AttorneyQualityReviewTask\n(user)"]
style 11.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  11.AttorneyQualityReviewTask["11.AttorneyQualityReviewTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(organization)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.QualityReviewTask
7.QualityReviewTask --> 8.QualityReviewTask
8.QualityReviewTask --> 9.JudgeQualityReviewTask
9.JudgeQualityReviewTask --> 10.AttorneyQualityReviewTask
9.JudgeQualityReviewTask --> 11.AttorneyQualityReviewTask
0.RootTask --> 12.BvaDispatchTask
12.BvaDispatchTask --> 13.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.JATU.JDRTU.ATU.ARTU.QRTO.QRTU.JQRTU.AQRTU

2 (3%) occurrences (example appeal IDs: [37209, 72163])

Task Tree for appeal with ID 37209
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
style 8.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  8.QualityReviewTask[\"8.QualityReviewTask\n(organization)"\]
style 9.QualityReviewTask fill:#b9f2f0
  9.QualityReviewTask[\"9.QualityReviewTask\n(user)"\]
style 10.JudgeQualityReviewTask fill:#b09c32
  10.JudgeQualityReviewTask["10.JudgeQualityReviewTask\n(user)"]
style 11.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  11.AttorneyQualityReviewTask["11.AttorneyQualityReviewTask\n(user)"]
style 12.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  12.IhpColocatedTask["12.IhpColocatedTask\n(organization)"]
style 13.IhpColocatedTask fill:#f77183
  13.IhpColocatedTask["13.IhpColocatedTask\n(user)"]
style 14.TimedHoldTask fill:#fab0e4
  14.TimedHoldTask["14.TimedHoldTask\n(user)"]
style 15.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(organization)"}}
style 16.BvaDispatchTask fill:#e78ac3
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
5.JudgeDecisionReviewTask --> 7.AttorneyRewriteTask
0.RootTask --> 8.QualityReviewTask
8.QualityReviewTask --> 9.QualityReviewTask
9.QualityReviewTask --> 10.JudgeQualityReviewTask
10.JudgeQualityReviewTask --> 11.AttorneyQualityReviewTask
11.AttorneyQualityReviewTask --> 12.IhpColocatedTask
12.IhpColocatedTask --> 13.IhpColocatedTask
13.IhpColocatedTask --> 14.TimedHoldTask
0.RootTask --> 15.BvaDispatchTask
15.BvaDispatchTask --> 16.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.IHPTO.IHPTU.JATU.JDRTU.ATU.ARTU.QRTO.QRTU.JQRTU.AQRTU

2 (3%) occurrences (example appeal IDs: [28139, 6927])

Task Tree for appeal with ID 28139
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
style 4.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(organization)"\]
style 5.InformalHearingPresentationTask fill:#a1c9f4
  5.InformalHearingPresentationTask[/"5.InformalHearingPresentationTask\n(user)"\]
style 6.InformalHearingPresentationTask fill:#a1c9f4
  6.InformalHearingPresentationTask[/"6.InformalHearingPresentationTask\n(user)"\]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.AttorneyTask fill:#ffb482
  9.AttorneyTask["9.AttorneyTask\n(user)"]
style 10.AttorneyRewriteTask fill:#17becf
  10.AttorneyRewriteTask["10.AttorneyRewriteTask\n(user)"]
style 11.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  11.QualityReviewTask[\"11.QualityReviewTask\n(organization)"\]
style 12.QualityReviewTask fill:#b9f2f0
  12.QualityReviewTask[\"12.QualityReviewTask\n(user)"\]
style 13.JudgeQualityReviewTask fill:#b09c32
  13.JudgeQualityReviewTask["13.JudgeQualityReviewTask\n(user)"]
style 14.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  14.AttorneyQualityReviewTask["14.AttorneyQualityReviewTask\n(user)"]
style 15.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  15.AttorneyQualityReviewTask["15.AttorneyQualityReviewTask\n(user)"]
style 16.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(organization)"}}
style 17.BvaDispatchTask fill:#e78ac3
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
2.DistributionTask --> 4.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 6.InformalHearingPresentationTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
8.JudgeDecisionReviewTask --> 10.AttorneyRewriteTask
0.RootTask --> 11.QualityReviewTask
11.QualityReviewTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.JudgeQualityReviewTask
13.JudgeQualityReviewTask --> 14.AttorneyQualityReviewTask
13.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
{{< /mermaid >}}


### RTO.JDRTU.ATU.QRTO.JQRTU.AQRTU

1 (2%) occurrences (example appeal IDs: [139])

Task Tree for appeal with ID 139
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.JudgeDecisionReviewTask fill:#e5c494
  1.JudgeDecisionReviewTask[["1.JudgeDecisionReviewTask\n(user)"]]
style 2.AttorneyTask fill:#ffb482
  2.AttorneyTask["2.AttorneyTask\n(user)"]
style 3.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  3.QualityReviewTask[\"3.QualityReviewTask\n(organization)"\]
style 4.QualityReviewTask fill:#b9f2f0
  4.QualityReviewTask[\"4.QualityReviewTask\n(user)"\]
style 5.JudgeQualityReviewTask fill:#b09c32
  5.JudgeQualityReviewTask["5.JudgeQualityReviewTask\n(user)"]
style 6.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  6.AttorneyQualityReviewTask["6.AttorneyQualityReviewTask\n(user)"]
style 7.QualityReviewTask fill:#b9f2f0
  7.QualityReviewTask[\"7.QualityReviewTask\n(user)"\]
style 8.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(organization)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  10.TrackVeteranTask(["10.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.JudgeDecisionReviewTask
1.JudgeDecisionReviewTask --> 2.AttorneyTask
0.RootTask --> 3.QualityReviewTask
3.QualityReviewTask --> 4.QualityReviewTask
7.QualityReviewTask --> 5.JudgeQualityReviewTask
5.JudgeQualityReviewTask --> 6.AttorneyQualityReviewTask
3.QualityReviewTask --> 7.QualityReviewTask
0.RootTask --> 8.BvaDispatchTask
8.BvaDispatchTask --> 9.BvaDispatchTask
0.RootTask --> 10.TrackVeteranTask
{{< /mermaid >}}


### RTO.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (2%) occurrences (example appeal IDs: [610])

Task Tree for appeal with ID 610
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.JudgeDecisionReviewTask fill:#e5c494
  1.JudgeDecisionReviewTask[["1.JudgeDecisionReviewTask\n(user)"]]
style 2.AttorneyTask fill:#ffb482
  2.AttorneyTask["2.AttorneyTask\n(user)"]
style 3.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  3.QualityReviewTask[\"3.QualityReviewTask\n(organization)"\]
style 4.QualityReviewTask fill:#b9f2f0
  4.QualityReviewTask[\"4.QualityReviewTask\n(user)"\]
style 5.JudgeQualityReviewTask fill:#b09c32
  5.JudgeQualityReviewTask["5.JudgeQualityReviewTask\n(user)"]
style 6.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  6.AttorneyQualityReviewTask["6.AttorneyQualityReviewTask\n(user)"]
style 7.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(organization)"}}
style 8.BvaDispatchTask fill:#e78ac3
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.JudgeDecisionReviewTask
1.JudgeDecisionReviewTask --> 2.AttorneyTask
0.RootTask --> 3.QualityReviewTask
3.QualityReviewTask --> 4.QualityReviewTask
4.QualityReviewTask --> 5.JudgeQualityReviewTask
5.JudgeQualityReviewTask --> 6.AttorneyQualityReviewTask
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.JATU.JDRTU.ATU.ARTU.QRTO.QRTU.JQRTU.AQRTU

1 (2%) occurrences (example appeal IDs: [33964])

Task Tree for appeal with ID 33964
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
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.JudgeAssignTask fill:#b3b3b3
  5.JudgeAssignTask[\"5.JudgeAssignTask\n(user)"/]
style 6.JudgeDecisionReviewTask fill:#e5c494
  6.JudgeDecisionReviewTask[["6.JudgeDecisionReviewTask\n(user)"]]
style 7.AttorneyTask fill:#ffb482
  7.AttorneyTask["7.AttorneyTask\n(user)"]
style 8.AttorneyRewriteTask fill:#17becf
  8.AttorneyRewriteTask["8.AttorneyRewriteTask\n(user)"]
style 9.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  9.QualityReviewTask[\"9.QualityReviewTask\n(organization)"\]
style 10.QualityReviewTask fill:#b9f2f0
  10.QualityReviewTask[\"10.QualityReviewTask\n(user)"\]
style 11.JudgeQualityReviewTask fill:#b09c32
  11.JudgeQualityReviewTask["11.JudgeQualityReviewTask\n(user)"]
style 12.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  12.AttorneyQualityReviewTask["12.AttorneyQualityReviewTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}
style 15.BvaDispatchTask fill:#e78ac3
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(user)"}}
style 16.BoardGrantEffectuationTask fill:#9791f4,stroke-dasharray: 5 5
  16.BoardGrantEffectuationTask["16.BoardGrantEffectuationTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeAssignTask
0.RootTask --> 6.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 7.AttorneyTask
6.JudgeDecisionReviewTask --> 8.AttorneyRewriteTask
0.RootTask --> 9.QualityReviewTask
9.QualityReviewTask --> 10.QualityReviewTask
10.QualityReviewTask --> 11.JudgeQualityReviewTask
11.JudgeQualityReviewTask --> 12.AttorneyQualityReviewTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
13.BvaDispatchTask --> 15.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.TVTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (2%) occurrences (example appeal IDs: [29271])

Task Tree for appeal with ID 29271
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  3.TrackVeteranTask(["3.TrackVeteranTask\n(organization)"])
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
style 9.JudgeQualityReviewTask fill:#b09c32
  9.JudgeQualityReviewTask["9.JudgeQualityReviewTask\n(user)"]
style 10.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  10.AttorneyQualityReviewTask["10.AttorneyQualityReviewTask\n(user)"]
style 11.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  11.AttorneyQualityReviewTask["11.AttorneyQualityReviewTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(organization)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.TrackVeteranTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.QualityReviewTask
7.QualityReviewTask --> 8.QualityReviewTask
8.QualityReviewTask --> 9.JudgeQualityReviewTask
9.JudgeQualityReviewTask --> 10.AttorneyQualityReviewTask
9.JudgeQualityReviewTask --> 11.AttorneyQualityReviewTask
0.RootTask --> 12.BvaDispatchTask
12.BvaDispatchTask --> 13.BvaDispatchTask
12.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


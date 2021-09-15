---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# PendingScanningVbmsColocatedTask_Organization for evidence_submission

[PendingScanningVbmsColocatedTask_Organization description](../task_descr/PendingScanningVbmsColocatedTask_Organization.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

PendingScanningVbmsColocatedTask_Organization -- 4 --> PendingScanningVbmsColocatedTask_User
AttorneyTask_User -- 2 --> PendingScanningVbmsColocatedTask_Organization
AttorneyRewriteTask_User -- 1 --> PendingScanningVbmsColocatedTask_Organization
{{< /mermaid >}}
**Parent Tasks:**

   * [AttorneyTask_User](AttorneyTask_User.md): 2 times
   * [AttorneyRewriteTask_User](AttorneyRewriteTask_User.md): 1 times

**Child Tasks:**

   * [PendingScanningVbmsColocatedTask_User](PendingScanningVbmsColocatedTask_User.md): 4 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

PendingScanningVbmsColocatedTask_Organization -- 4 --> PendingScanningVbmsColocatedTask_User
OtherColocatedTask_User -- 1 --> PendingScanningVbmsColocatedTask_Organization
JudgeAssignTask_User -- 1 --> PendingScanningVbmsColocatedTask_Organization
AttorneyTask_User -- 1 --> PendingScanningVbmsColocatedTask_Organization
AttorneyRewriteTask_User -- 1 --> PendingScanningVbmsColocatedTask_Organization
{{< /mermaid >}}
**Before:**

   * [AttorneyTask_User](AttorneyTask_User.md): 1 times
   * [OtherColocatedTask_User](OtherColocatedTask_User.md): 1 times
   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 1 times
   * [AttorneyRewriteTask_User](AttorneyRewriteTask_User.md): 1 times

**After:**

   * [PendingScanningVbmsColocatedTask_User](PendingScanningVbmsColocatedTask_User.md): 4 times

## Task Creation Sequences

There are 4 total occurrences of PendingScanningVbmsColocatedTask_Organization among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to PendingScanningVbmsColocatedTask_Organization, sorted by frequency.

### RTO.DTO.ESWTO.AMMTO.AMMTO.AMMTU.JATU.PSVCTO

1 (25%) occurrences (example appeal IDs: [128004])

Task Tree for appeal with ID 128004
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  3.AodMotionMailTask["3.AodMotionMailTask\n(organization)"]
style 4.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  4.AodMotionMailTask["4.AodMotionMailTask\n(organization)"]
style 5.AodMotionMailTask fill:#fffea3
  5.AodMotionMailTask["5.AodMotionMailTask\n(user)"]
style 6.JudgeAssignTask fill:#b3b3b3
  6.JudgeAssignTask[\"6.JudgeAssignTask\n(user)"/]
style 7.JudgeDecisionReviewTask fill:#e5c494
  7.JudgeDecisionReviewTask[["7.JudgeDecisionReviewTask\n(user)"]]
style 8.AttorneyTask fill:#ffb482
  8.AttorneyTask["8.AttorneyTask\n(user)"]
style 9.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  9.PendingScanningVbmsColocatedTask["9.PendingScanningVbmsColocatedTask\n(organization)"]
style 10.PendingScanningVbmsColocatedTask fill:#d276f4
  10.PendingScanningVbmsColocatedTask["10.PendingScanningVbmsColocatedTask\n(user)"]
style 11.TimedHoldTask fill:#fab0e4
  11.TimedHoldTask["11.TimedHoldTask\n(user)"]
style 12.TimedHoldTask fill:#fab0e4
  12.TimedHoldTask["12.TimedHoldTask\n(user)"]
style 13.JudgeAssignTask fill:#b3b3b3
  13.JudgeAssignTask[\"13.JudgeAssignTask\n(user)"/]
style 14.JudgeAssignTask fill:#b3b3b3
  14.JudgeAssignTask[\"14.JudgeAssignTask\n(user)"/]
style 15.JudgeDecisionReviewTask fill:#e5c494
  15.JudgeDecisionReviewTask[["15.JudgeDecisionReviewTask\n(user)"]]
style 16.AttorneyTask fill:#ffb482
  16.AttorneyTask["16.AttorneyTask\n(user)"]
style 17.MissingRecordsColocatedTask fill:#ea8032,stroke-dasharray: 5 5
  17.MissingRecordsColocatedTask["17.MissingRecordsColocatedTask\n(organization)"]
style 18.MissingRecordsColocatedTask fill:#ea8032
  18.MissingRecordsColocatedTask["18.MissingRecordsColocatedTask\n(user)"]
style 19.MissingRecordsColocatedTask fill:#ea8032
  19.MissingRecordsColocatedTask["19.MissingRecordsColocatedTask\n(user)"]
style 20.TimedHoldTask fill:#fab0e4
  20.TimedHoldTask["20.TimedHoldTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.AodMotionMailTask
3.AodMotionMailTask --> 4.AodMotionMailTask
4.AodMotionMailTask --> 5.AodMotionMailTask
0.RootTask --> 6.JudgeAssignTask
0.RootTask --> 7.JudgeDecisionReviewTask
7.JudgeDecisionReviewTask --> 8.AttorneyTask
8.AttorneyTask --> 9.PendingScanningVbmsColocatedTask
9.PendingScanningVbmsColocatedTask --> 10.PendingScanningVbmsColocatedTask
10.PendingScanningVbmsColocatedTask --> 11.TimedHoldTask
10.PendingScanningVbmsColocatedTask --> 12.TimedHoldTask
0.RootTask --> 13.JudgeAssignTask
0.RootTask --> 14.JudgeAssignTask
0.RootTask --> 15.JudgeDecisionReviewTask
15.JudgeDecisionReviewTask --> 16.AttorneyTask
16.AttorneyTask --> 17.MissingRecordsColocatedTask
17.MissingRecordsColocatedTask --> 18.MissingRecordsColocatedTask
17.MissingRecordsColocatedTask --> 19.MissingRecordsColocatedTask
19.MissingRecordsColocatedTask --> 20.TimedHoldTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.IHPTO.IHPTU.JATU.JDRTU.ATU.PSVCTO

1 (25%) occurrences (example appeal IDs: [64636])

Task Tree for appeal with ID 64636
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
style 10.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  10.PendingScanningVbmsColocatedTask["10.PendingScanningVbmsColocatedTask\n(organization)"]
style 11.PendingScanningVbmsColocatedTask fill:#d276f4
  11.PendingScanningVbmsColocatedTask["11.PendingScanningVbmsColocatedTask\n(user)"]
style 12.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  12.OtherColocatedTask["12.OtherColocatedTask\n(organization)"]
style 13.OtherColocatedTask fill:#f77189
  13.OtherColocatedTask["13.OtherColocatedTask\n(user)"]
style 14.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  14.PendingScanningVbmsColocatedTask["14.PendingScanningVbmsColocatedTask\n(organization)"]
style 15.PendingScanningVbmsColocatedTask fill:#d276f4
  15.PendingScanningVbmsColocatedTask["15.PendingScanningVbmsColocatedTask\n(user)"]
style 16.TimedHoldTask fill:#fab0e4
  16.TimedHoldTask["16.TimedHoldTask\n(user)"]
style 17.TimedHoldTask fill:#fab0e4
  17.TimedHoldTask["17.TimedHoldTask\n(user)"]
style 18.TimedHoldTask fill:#fab0e4
  18.TimedHoldTask["18.TimedHoldTask\n(user)"]
style 19.TimedHoldTask fill:#fab0e4
  19.TimedHoldTask["19.TimedHoldTask\n(user)"]
style 20.TimedHoldTask fill:#fab0e4
  20.TimedHoldTask["20.TimedHoldTask\n(user)"]
style 21.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  21.TrackVeteranTask(["21.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
2.DistributionTask --> 4.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 6.InformalHearingPresentationTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
9.AttorneyTask --> 10.PendingScanningVbmsColocatedTask
10.PendingScanningVbmsColocatedTask --> 11.PendingScanningVbmsColocatedTask
9.AttorneyTask --> 12.OtherColocatedTask
12.OtherColocatedTask --> 13.OtherColocatedTask
9.AttorneyTask --> 14.PendingScanningVbmsColocatedTask
14.PendingScanningVbmsColocatedTask --> 15.PendingScanningVbmsColocatedTask
15.PendingScanningVbmsColocatedTask --> 16.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 17.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 18.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 19.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 20.TimedHoldTask
0.RootTask --> 21.TrackVeteranTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.IHPTO.IHPTU.JATU.JDRTU.ATU.ARTU.PSVCTO

1 (25%) occurrences (example appeal IDs: [62139])

Task Tree for appeal with ID 62139
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
style 11.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  11.PendingScanningVbmsColocatedTask["11.PendingScanningVbmsColocatedTask\n(organization)"]
style 12.PendingScanningVbmsColocatedTask fill:#d276f4
  12.PendingScanningVbmsColocatedTask["12.PendingScanningVbmsColocatedTask\n(user)"]
style 13.PendingScanningVbmsColocatedTask fill:#d276f4
  13.PendingScanningVbmsColocatedTask["13.PendingScanningVbmsColocatedTask\n(user)"]
style 14.TimedHoldTask fill:#fab0e4
  14.TimedHoldTask["14.TimedHoldTask\n(user)"]
style 15.TimedHoldTask fill:#fab0e4
  15.TimedHoldTask["15.TimedHoldTask\n(user)"]
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
10.AttorneyRewriteTask --> 11.PendingScanningVbmsColocatedTask
11.PendingScanningVbmsColocatedTask --> 12.PendingScanningVbmsColocatedTask
11.PendingScanningVbmsColocatedTask --> 13.PendingScanningVbmsColocatedTask
13.PendingScanningVbmsColocatedTask --> 14.TimedHoldTask
13.PendingScanningVbmsColocatedTask --> 15.TimedHoldTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.IHPTO.IHPTU.JATU.JDRTU.ATU.PSVCTO.PSVCTU.OCTO.OCTU.PSVCTO

1 (25%) occurrences (example appeal IDs: [64636])

Task Tree for appeal with ID 64636
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
style 10.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  10.PendingScanningVbmsColocatedTask["10.PendingScanningVbmsColocatedTask\n(organization)"]
style 11.PendingScanningVbmsColocatedTask fill:#d276f4
  11.PendingScanningVbmsColocatedTask["11.PendingScanningVbmsColocatedTask\n(user)"]
style 12.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  12.OtherColocatedTask["12.OtherColocatedTask\n(organization)"]
style 13.OtherColocatedTask fill:#f77189
  13.OtherColocatedTask["13.OtherColocatedTask\n(user)"]
style 14.PendingScanningVbmsColocatedTask fill:#d276f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  14.PendingScanningVbmsColocatedTask["14.PendingScanningVbmsColocatedTask\n(organization)"]
style 15.PendingScanningVbmsColocatedTask fill:#d276f4
  15.PendingScanningVbmsColocatedTask["15.PendingScanningVbmsColocatedTask\n(user)"]
style 16.TimedHoldTask fill:#fab0e4
  16.TimedHoldTask["16.TimedHoldTask\n(user)"]
style 17.TimedHoldTask fill:#fab0e4
  17.TimedHoldTask["17.TimedHoldTask\n(user)"]
style 18.TimedHoldTask fill:#fab0e4
  18.TimedHoldTask["18.TimedHoldTask\n(user)"]
style 19.TimedHoldTask fill:#fab0e4
  19.TimedHoldTask["19.TimedHoldTask\n(user)"]
style 20.TimedHoldTask fill:#fab0e4
  20.TimedHoldTask["20.TimedHoldTask\n(user)"]
style 21.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  21.TrackVeteranTask(["21.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
2.DistributionTask --> 4.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
4.InformalHearingPresentationTask --> 6.InformalHearingPresentationTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
9.AttorneyTask --> 10.PendingScanningVbmsColocatedTask
10.PendingScanningVbmsColocatedTask --> 11.PendingScanningVbmsColocatedTask
9.AttorneyTask --> 12.OtherColocatedTask
12.OtherColocatedTask --> 13.OtherColocatedTask
9.AttorneyTask --> 14.PendingScanningVbmsColocatedTask
14.PendingScanningVbmsColocatedTask --> 15.PendingScanningVbmsColocatedTask
15.PendingScanningVbmsColocatedTask --> 16.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 17.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 18.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 19.TimedHoldTask
15.PendingScanningVbmsColocatedTask --> 20.TimedHoldTask
0.RootTask --> 21.TrackVeteranTask
{{< /mermaid >}}


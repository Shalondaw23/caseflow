---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# TimedHoldTask_Organization for evidence_submission

[TimedHoldTask_Organization description](../task_descr/TimedHoldTask_Organization.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

CavcRemandProcessedLetterResponseWindowTask_Organization -- 153 --> TimedHoldTask_Organization
MdrTask_Organization -- 2 --> TimedHoldTask_Organization
CavcRemandProcessedLetterResponseWindowTask_User -- 1 --> TimedHoldTask_Organization
{{< /mermaid >}}
**Parent Tasks:**

   * [CavcRemandProcessedLetterResponseWindowTask_Organization](CavcRemandProcessedLetterResponseWindowTask_Organization.md): 153 times
   * [MdrTask_Organization](MdrTask_Organization.md): 2 times
   * [CavcRemandProcessedLetterResponseWindowTask_User](CavcRemandProcessedLetterResponseWindowTask_User.md): 1 times

**Child Tasks:**

   * (No child tasks)

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

TimedHoldTask_Organization -- 59 --> CavcRemandProcessedLetterResponseWindowTask_User
TimedHoldTask_Organization -- 18 --> EvidenceOrArgumentMailTask_Organization
TimedHoldTask_Organization -- 10 --> TrackVeteranTask_Organization
TimedHoldTask_Organization -- 7 --> CavcCorrespondenceMailTask_Organization
TimedHoldTask_Organization -- 4 --> ExtensionRequestMailTask_Organization
TimedHoldTask_Organization -- 1 --> SendCavcRemandProcessedLetterTask_Organization
TimedHoldTask_Organization -- 1 --> PowerOfAttorneyRelatedMailTask_Organization
TimedHoldTask_Organization -- 1 --> OtherMotionMailTask_Organization
TimedHoldTask_Organization -- 1 --> HearingRelatedMailTask_Organization
TimedHoldTask_Organization -- 1 --> CavcCorrespondenceMailTask_User
TimedHoldTask_Organization -- 1 --> AodMotionMailTask_Organization
CavcRemandProcessedLetterResponseWindowTask_Organization -- 153 --> TimedHoldTask_Organization
MdrTask_Organization -- 2 --> TimedHoldTask_Organization
CavcCorrespondenceMailTask_Organization -- 1 --> TimedHoldTask_Organization
{{< /mermaid >}}
**Before:**

   * [CavcRemandProcessedLetterResponseWindowTask_Organization](CavcRemandProcessedLetterResponseWindowTask_Organization.md): 153 times
   * [MdrTask_Organization](MdrTask_Organization.md): 2 times
   * [CavcCorrespondenceMailTask_Organization](CavcCorrespondenceMailTask_Organization.md): 1 times

**After:**

   * [CavcRemandProcessedLetterResponseWindowTask_User](CavcRemandProcessedLetterResponseWindowTask_User.md): 59 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 18 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 10 times
   * [CavcCorrespondenceMailTask_Organization](CavcCorrespondenceMailTask_Organization.md): 7 times
   * [ExtensionRequestMailTask_Organization](ExtensionRequestMailTask_Organization.md): 4 times
   * [HearingRelatedMailTask_Organization](HearingRelatedMailTask_Organization.md): 1 times
   * [OtherMotionMailTask_Organization](OtherMotionMailTask_Organization.md): 1 times
   * [AodMotionMailTask_Organization](AodMotionMailTask_Organization.md): 1 times
   * [SendCavcRemandProcessedLetterTask_Organization](SendCavcRemandProcessedLetterTask_Organization.md): 1 times
   * [PowerOfAttorneyRelatedMailTask_Organization](PowerOfAttorneyRelatedMailTask_Organization.md): 1 times
   * [CavcCorrespondenceMailTask_User](CavcCorrespondenceMailTask_User.md): 1 times

## Task Creation Sequences

There are 156 total occurrences of TimedHoldTask_Organization among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to TimedHoldTask_Organization, sorted by frequency.

### RTO.TVTO.DTO.CTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

90 (58%) occurrences (example appeal IDs: [141057, 153279, 153435, 153510, 169562])

Task Tree for appeal with ID 141057
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(user)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 7.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  7.TimedHoldTask["7.TimedHoldTask\n(organization)"]
style 8.ExtensionRequestMailTask fill:#f57832,stroke-dasharray: 5 5
  8.ExtensionRequestMailTask["8.ExtensionRequestMailTask\n(organization)"]
style 9.ExtensionRequestMailTask fill:#f57832,stroke-dasharray: 5 5
  9.ExtensionRequestMailTask["9.ExtensionRequestMailTask\n(organization)"]
style 10.ExtensionRequestMailTask fill:#f57832
  10.ExtensionRequestMailTask["10.ExtensionRequestMailTask\n(user)"]
style 11.ExtensionRequestMailTask fill:#f57832
  11.ExtensionRequestMailTask["11.ExtensionRequestMailTask\n(user)"]
style 12.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  12.CavcRemandProcessedLetterResponseWindowTask["12.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 13.JudgeAssignTask fill:#b3b3b3
  13.JudgeAssignTask[\"13.JudgeAssignTask\n(user)"/]
style 14.JudgeDecisionReviewTask fill:#e5c494
  14.JudgeDecisionReviewTask[["14.JudgeDecisionReviewTask\n(user)"]]
style 15.AttorneyTask fill:#ffb482
  15.AttorneyTask["15.AttorneyTask\n(user)"]
style 16.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  16.IhpColocatedTask["16.IhpColocatedTask\n(organization)"]
style 17.IhpColocatedTask fill:#f77183
  17.IhpColocatedTask["17.IhpColocatedTask\n(user)"]
style 18.TimedHoldTask fill:#fab0e4
  18.TimedHoldTask["18.TimedHoldTask\n(user)"]
style 19.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  19.BvaDispatchTask{{"19.BvaDispatchTask\n(organization)"}}
style 20.BvaDispatchTask fill:#e78ac3
  20.BvaDispatchTask{{"20.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.SendCavcRemandProcessedLetterTask
4.SendCavcRemandProcessedLetterTask --> 5.SendCavcRemandProcessedLetterTask
3.CavcTask --> 6.CavcRemandProcessedLetterResponseWindowTask
6.CavcRemandProcessedLetterResponseWindowTask --> 7.TimedHoldTask
2.DistributionTask --> 8.ExtensionRequestMailTask
8.ExtensionRequestMailTask --> 9.ExtensionRequestMailTask
9.ExtensionRequestMailTask --> 10.ExtensionRequestMailTask
9.ExtensionRequestMailTask --> 11.ExtensionRequestMailTask
6.CavcRemandProcessedLetterResponseWindowTask --> 12.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 13.JudgeAssignTask
0.RootTask --> 14.JudgeDecisionReviewTask
14.JudgeDecisionReviewTask --> 15.AttorneyTask
15.AttorneyTask --> 16.IhpColocatedTask
16.IhpColocatedTask --> 17.IhpColocatedTask
17.IhpColocatedTask --> 18.TimedHoldTask
0.RootTask --> 19.BvaDispatchTask
19.BvaDispatchTask --> 20.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.CTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

48 (31%) occurrences (example appeal IDs: [153461, 153612, 153665, 153655, 158568])

Task Tree for appeal with ID 153461
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  2.CavcTask["2.CavcTask\n(organization)"]
style 3.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  3.SendCavcRemandProcessedLetterTask["3.SendCavcRemandProcessedLetterTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(user)"]
style 5.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  5.CavcRemandProcessedLetterResponseWindowTask["5.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 6.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.TimedHoldTask["6.TimedHoldTask\n(organization)"]
style 7.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  7.HearingRelatedMailTask["7.HearingRelatedMailTask\n(organization)"]
style 8.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  8.HearingRelatedMailTask["8.HearingRelatedMailTask\n(organization)"]
style 9.HearingRelatedMailTask fill:#ff7f0e
  9.HearingRelatedMailTask["9.HearingRelatedMailTask\n(user)"]
style 10.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  10.HearingRelatedMailTask["10.HearingRelatedMailTask\n(organization)"]
style 11.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  11.HearingRelatedMailTask["11.HearingRelatedMailTask\n(organization)"]
style 12.HearingRelatedMailTask fill:#ff7f0e
  12.HearingRelatedMailTask["12.HearingRelatedMailTask\n(user)"]
style 13.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  13.HearingRelatedMailTask["13.HearingRelatedMailTask\n(organization)"]
style 14.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  14.HearingRelatedMailTask["14.HearingRelatedMailTask\n(organization)"]
style 15.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  15.HearingRelatedMailTask["15.HearingRelatedMailTask\n(organization)"]
style 16.HearingRelatedMailTask fill:#ff7f0e
  16.HearingRelatedMailTask["16.HearingRelatedMailTask\n(user)"]
style 17.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  17.HearingRelatedMailTask["17.HearingRelatedMailTask\n(organization)"]
style 18.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  18.HearingRelatedMailTask["18.HearingRelatedMailTask\n(organization)"]
style 19.HearingRelatedMailTask fill:#ff7f0e
  19.HearingRelatedMailTask["19.HearingRelatedMailTask\n(user)"]
style 20.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  20.HearingRelatedMailTask["20.HearingRelatedMailTask\n(organization)"]
style 21.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  21.HearingRelatedMailTask["21.HearingRelatedMailTask\n(organization)"]
style 22.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  22.CavcRemandProcessedLetterResponseWindowTask["22.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 23.HearingRelatedMailTask fill:#ff7f0e
  23.HearingRelatedMailTask["23.HearingRelatedMailTask\n(user)"]
style 24.HearingRelatedMailTask fill:#ff7f0e
  24.HearingRelatedMailTask["24.HearingRelatedMailTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.CavcTask
2.CavcTask --> 3.SendCavcRemandProcessedLetterTask
3.SendCavcRemandProcessedLetterTask --> 4.SendCavcRemandProcessedLetterTask
2.CavcTask --> 5.CavcRemandProcessedLetterResponseWindowTask
5.CavcRemandProcessedLetterResponseWindowTask --> 6.TimedHoldTask
1.DistributionTask --> 7.HearingRelatedMailTask
7.HearingRelatedMailTask --> 8.HearingRelatedMailTask
8.HearingRelatedMailTask --> 9.HearingRelatedMailTask
1.DistributionTask --> 10.HearingRelatedMailTask
10.HearingRelatedMailTask --> 11.HearingRelatedMailTask
11.HearingRelatedMailTask --> 12.HearingRelatedMailTask
12.HearingRelatedMailTask --> 13.HearingRelatedMailTask
1.DistributionTask --> 14.HearingRelatedMailTask
14.HearingRelatedMailTask --> 15.HearingRelatedMailTask
15.HearingRelatedMailTask --> 16.HearingRelatedMailTask
16.HearingRelatedMailTask --> 17.HearingRelatedMailTask
9.HearingRelatedMailTask --> 18.HearingRelatedMailTask
11.HearingRelatedMailTask --> 19.HearingRelatedMailTask
16.HearingRelatedMailTask --> 20.HearingRelatedMailTask
9.HearingRelatedMailTask --> 21.HearingRelatedMailTask
5.CavcRemandProcessedLetterResponseWindowTask --> 22.CavcRemandProcessedLetterResponseWindowTask
8.HearingRelatedMailTask --> 23.HearingRelatedMailTask
15.HearingRelatedMailTask --> 24.HearingRelatedMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.CTO.SCRPLTO.CRPLRWTO.THTO

5 (3%) occurrences (example appeal IDs: [135589, 129818, 130045, 136117, 135340])

Task Tree for appeal with ID 135589
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  5.CavcRemandProcessedLetterResponseWindowTask["5.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 6.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.TimedHoldTask["6.TimedHoldTask\n(organization)"]
style 7.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  7.CavcRemandProcessedLetterResponseWindowTask["7.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
style 11.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(organization)"}}
style 12.BvaDispatchTask fill:#e78ac3
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.SendCavcRemandProcessedLetterTask
3.CavcTask --> 5.CavcRemandProcessedLetterResponseWindowTask
5.CavcRemandProcessedLetterResponseWindowTask --> 6.TimedHoldTask
5.CavcRemandProcessedLetterResponseWindowTask --> 7.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.BvaDispatchTask
11.BvaDispatchTask --> 12.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.CTO.SCRPLTO.CRPLRWTO.THTO

3 (2%) occurrences (example appeal IDs: [135526, 135742, 135317])

Task Tree for appeal with ID 135526
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  2.CavcTask["2.CavcTask\n(organization)"]
style 3.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  3.SendCavcRemandProcessedLetterTask["3.SendCavcRemandProcessedLetterTask\n(organization)"]
style 4.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  4.CavcRemandProcessedLetterResponseWindowTask["4.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 5.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.TimedHoldTask["5.TimedHoldTask\n(organization)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.AttorneyTask fill:#ffb482
  9.AttorneyTask["9.AttorneyTask\n(user)"]
style 10.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(organization)"}}
style 11.BvaDispatchTask fill:#e78ac3
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.CavcTask
2.CavcTask --> 3.SendCavcRemandProcessedLetterTask
2.CavcTask --> 4.CavcRemandProcessedLetterResponseWindowTask
4.CavcRemandProcessedLetterResponseWindowTask --> 5.TimedHoldTask
4.CavcRemandProcessedLetterResponseWindowTask --> 6.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
0.RootTask --> 10.BvaDispatchTask
10.BvaDispatchTask --> 11.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.CTO.MTO.THTO

2 (1%) occurrences (example appeal IDs: [157137, 169150])

Task Tree for appeal with ID 157137
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.MdrTask fill:#a48cf4,stroke-dasharray: 5 5
  4.MdrTask["4.MdrTask\n(organization)"]
style 5.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.TimedHoldTask["5.TimedHoldTask\n(organization)"]
style 6.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  6.SendCavcRemandProcessedLetterTask["6.SendCavcRemandProcessedLetterTask\n(organization)"]
style 7.SendCavcRemandProcessedLetterTask fill:#f77465
  7.SendCavcRemandProcessedLetterTask["7.SendCavcRemandProcessedLetterTask\n(user)"]
style 8.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  8.CavcRemandProcessedLetterResponseWindowTask["8.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 9.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  9.TimedHoldTask["9.TimedHoldTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.MdrTask
4.MdrTask --> 5.TimedHoldTask
3.CavcTask --> 6.SendCavcRemandProcessedLetterTask
6.SendCavcRemandProcessedLetterTask --> 7.SendCavcRemandProcessedLetterTask
3.CavcTask --> 8.CavcRemandProcessedLetterResponseWindowTask
8.CavcRemandProcessedLetterResponseWindowTask --> 9.TimedHoldTask
{{< /mermaid >}}


### RTO.TVTO.DTO.CTO.MTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

2 (1%) occurrences (example appeal IDs: [154091, 155918])

Task Tree for appeal with ID 154091
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.MdrTask fill:#a48cf4,stroke-dasharray: 5 5
  4.MdrTask["4.MdrTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(organization)"]
style 6.SendCavcRemandProcessedLetterTask fill:#f77465
  6.SendCavcRemandProcessedLetterTask["6.SendCavcRemandProcessedLetterTask\n(user)"]
style 7.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  7.CavcRemandProcessedLetterResponseWindowTask["7.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 8.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  8.TimedHoldTask["8.TimedHoldTask\n(organization)"]
style 9.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  9.AodMotionMailTask["9.AodMotionMailTask\n(organization)"]
style 10.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  10.AodMotionMailTask["10.AodMotionMailTask\n(organization)"]
style 11.AodMotionMailTask fill:#fffea3
  11.AodMotionMailTask["11.AodMotionMailTask\n(user)"]
style 12.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  12.CavcRemandProcessedLetterResponseWindowTask["12.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 13.JudgeAssignTask fill:#b3b3b3
  13.JudgeAssignTask[\"13.JudgeAssignTask\n(user)"/]
style 14.JudgeAssignTask fill:#b3b3b3
  14.JudgeAssignTask[\"14.JudgeAssignTask\n(user)"/]
style 15.JudgeAssignTask fill:#b3b3b3
  15.JudgeAssignTask[\"15.JudgeAssignTask\n(user)"/]
style 16.JudgeAssignTask fill:#b3b3b3
  16.JudgeAssignTask[\"16.JudgeAssignTask\n(user)"/]
style 17.JudgeDecisionReviewTask fill:#e5c494
  17.JudgeDecisionReviewTask[["17.JudgeDecisionReviewTask\n(user)"]]
style 18.AttorneyTask fill:#ffb482
  18.AttorneyTask["18.AttorneyTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.MdrTask
3.CavcTask --> 5.SendCavcRemandProcessedLetterTask
5.SendCavcRemandProcessedLetterTask --> 6.SendCavcRemandProcessedLetterTask
3.CavcTask --> 7.CavcRemandProcessedLetterResponseWindowTask
7.CavcRemandProcessedLetterResponseWindowTask --> 8.TimedHoldTask
0.RootTask --> 9.AodMotionMailTask
9.AodMotionMailTask --> 10.AodMotionMailTask
10.AodMotionMailTask --> 11.AodMotionMailTask
7.CavcRemandProcessedLetterResponseWindowTask --> 12.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 13.JudgeAssignTask
0.RootTask --> 14.JudgeAssignTask
0.RootTask --> 15.JudgeAssignTask
0.RootTask --> 16.JudgeAssignTask
0.RootTask --> 17.JudgeDecisionReviewTask
17.JudgeDecisionReviewTask --> 18.AttorneyTask
{{< /mermaid >}}


### DTO.CTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

1 (1%) occurrences (example appeal IDs: [159950])

Task Tree for appeal with ID 159950
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(user)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 7.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  7.TimedHoldTask["7.TimedHoldTask\n(organization)"]
style 8.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  8.CavcRemandProcessedLetterResponseWindowTask["8.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.AttorneyRewriteTask fill:#17becf
  12.AttorneyRewriteTask["12.AttorneyRewriteTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.SendCavcRemandProcessedLetterTask
4.SendCavcRemandProcessedLetterTask --> 5.SendCavcRemandProcessedLetterTask
3.CavcTask --> 6.CavcRemandProcessedLetterResponseWindowTask
6.CavcRemandProcessedLetterResponseWindowTask --> 7.TimedHoldTask
6.CavcRemandProcessedLetterResponseWindowTask --> 8.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
10.JudgeDecisionReviewTask --> 11.AttorneyTask
10.JudgeDecisionReviewTask --> 12.AttorneyRewriteTask
{{< /mermaid >}}


### RTO.DTO.CTO.MTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

1 (1%) occurrences (example appeal IDs: [180029])

Task Tree for appeal with ID 180029
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  2.CavcTask["2.CavcTask\n(organization)"]
style 3.MdrTask fill:#a48cf4,stroke-dasharray: 5 5
  3.MdrTask["3.MdrTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(user)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 7.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  7.TimedHoldTask["7.TimedHoldTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.CavcTask
2.CavcTask --> 3.MdrTask
2.CavcTask --> 4.SendCavcRemandProcessedLetterTask
4.SendCavcRemandProcessedLetterTask --> 5.SendCavcRemandProcessedLetterTask
2.CavcTask --> 6.CavcRemandProcessedLetterResponseWindowTask
6.CavcRemandProcessedLetterResponseWindowTask --> 7.TimedHoldTask
{{< /mermaid >}}


### RTO.TVTO.TVTO.DTO.CTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

1 (1%) occurrences (example appeal IDs: [171498])

Task Tree for appeal with ID 171498
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  2.TrackVeteranTask(["2.TrackVeteranTask\n(organization)"])
style 3.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  3.DistributionTask>"3.DistributionTask\n(organization)"]
style 4.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  4.CavcTask["4.CavcTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(organization)"]
style 6.SendCavcRemandProcessedLetterTask fill:#f77465
  6.SendCavcRemandProcessedLetterTask["6.SendCavcRemandProcessedLetterTask\n(user)"]
style 7.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  7.CavcRemandProcessedLetterResponseWindowTask["7.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 8.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  8.TimedHoldTask["8.TimedHoldTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.TrackVeteranTask
0.RootTask --> 3.DistributionTask
3.DistributionTask --> 4.CavcTask
4.CavcTask --> 5.SendCavcRemandProcessedLetterTask
5.SendCavcRemandProcessedLetterTask --> 6.SendCavcRemandProcessedLetterTask
4.CavcTask --> 7.CavcRemandProcessedLetterResponseWindowTask
7.CavcRemandProcessedLetterResponseWindowTask --> 8.TimedHoldTask
{{< /mermaid >}}


### RTO.TVTO.DTO.CTO.MTO.THTO.SCRPLTO.SCRPLTU.CRPLRWTO.THTO

1 (1%) occurrences (example appeal IDs: [157137])

Task Tree for appeal with ID 157137
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.MdrTask fill:#a48cf4,stroke-dasharray: 5 5
  4.MdrTask["4.MdrTask\n(organization)"]
style 5.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.TimedHoldTask["5.TimedHoldTask\n(organization)"]
style 6.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  6.SendCavcRemandProcessedLetterTask["6.SendCavcRemandProcessedLetterTask\n(organization)"]
style 7.SendCavcRemandProcessedLetterTask fill:#f77465
  7.SendCavcRemandProcessedLetterTask["7.SendCavcRemandProcessedLetterTask\n(user)"]
style 8.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  8.CavcRemandProcessedLetterResponseWindowTask["8.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 9.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  9.TimedHoldTask["9.TimedHoldTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.MdrTask
4.MdrTask --> 5.TimedHoldTask
3.CavcTask --> 6.SendCavcRemandProcessedLetterTask
6.SendCavcRemandProcessedLetterTask --> 7.SendCavcRemandProcessedLetterTask
3.CavcTask --> 8.CavcRemandProcessedLetterResponseWindowTask
8.CavcRemandProcessedLetterResponseWindowTask --> 9.TimedHoldTask
{{< /mermaid >}}


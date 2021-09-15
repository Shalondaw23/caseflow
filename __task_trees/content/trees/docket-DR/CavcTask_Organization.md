---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [direct_review Tasks](tasklist.md) |

# CavcTask_Organization for direct_review

[CavcTask_Organization description](../task_descr/CavcTask_Organization.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

CavcTask_Organization -- 740 --> SendCavcRemandProcessedLetterTask_Organization
CavcTask_Organization -- 740 --> CavcRemandProcessedLetterResponseWindowTask_Organization
CavcTask_Organization -- 53 --> MdrTask_Organization
CavcTask_Organization -- 1 --> MandateHoldTask_Organization
DistributionTask_Organization -- 768 --> CavcTask_Organization
{{< /mermaid >}}
**Parent Tasks:**

   * [DistributionTask_Organization](DistributionTask_Organization.md): 768 times

**Child Tasks:**

   * [SendCavcRemandProcessedLetterTask_Organization](SendCavcRemandProcessedLetterTask_Organization.md): 740 times
   * [CavcRemandProcessedLetterResponseWindowTask_Organization](CavcRemandProcessedLetterResponseWindowTask_Organization.md): 740 times
   * [MdrTask_Organization](MdrTask_Organization.md): 53 times
   * [MandateHoldTask_Organization](MandateHoldTask_Organization.md): 1 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

CavcTask_Organization -- 714 --> SendCavcRemandProcessedLetterTask_Organization
CavcTask_Organization -- 53 --> MdrTask_Organization
CavcTask_Organization -- 1 --> MandateHoldTask_Organization
DistributionTask_Organization -- 768 --> CavcTask_Organization
{{< /mermaid >}}
**Before:**

   * [DistributionTask_Organization](DistributionTask_Organization.md): 768 times

**After:**

   * [SendCavcRemandProcessedLetterTask_Organization](SendCavcRemandProcessedLetterTask_Organization.md): 714 times
   * [MdrTask_Organization](MdrTask_Organization.md): 53 times
   * [MandateHoldTask_Organization](MandateHoldTask_Organization.md): 1 times

## Task Creation Sequences

There are 768 total occurrences of CavcTask_Organization among appeals in the direct_review docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to CavcTask_Organization, sorted by frequency.

### RTO.TVTO.DTO.CTO

552 (72%) occurrences (example appeal IDs: [169541, 153085, 153094, 153108, 159306])

Task Tree for appeal with ID 169541
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(user)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 7.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5
  7.TimedHoldTask["7.TimedHoldTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.SendCavcRemandProcessedLetterTask
4.SendCavcRemandProcessedLetterTask --> 5.SendCavcRemandProcessedLetterTask
3.CavcTask --> 6.CavcRemandProcessedLetterResponseWindowTask
6.CavcRemandProcessedLetterResponseWindowTask --> 7.TimedHoldTask
{{< /mermaid >}}


### RTO.DTO.CTO

202 (26%) occurrences (example appeal IDs: [153315, 153344, 153519, 156256, 153603])

Task Tree for appeal with ID 153315
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.CavcTask fill:#d48d32,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  2.CavcTask["2.CavcTask\n(organization)"]
style 3.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  3.SendCavcRemandProcessedLetterTask["3.SendCavcRemandProcessedLetterTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(user)"]
style 5.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  5.CavcRemandProcessedLetterResponseWindowTask["5.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 6.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5
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

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.CavcTask
2.CavcTask --> 3.SendCavcRemandProcessedLetterTask
3.SendCavcRemandProcessedLetterTask --> 4.SendCavcRemandProcessedLetterTask
2.CavcTask --> 5.CavcRemandProcessedLetterResponseWindowTask
5.CavcRemandProcessedLetterResponseWindowTask --> 6.TimedHoldTask
5.CavcRemandProcessedLetterResponseWindowTask --> 7.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.BvaDispatchTask
11.BvaDispatchTask --> 12.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.TVTO.DTO.CTO

13 (2%) occurrences (example appeal IDs: [154783, 169586, 159731, 155096, 160315])

Task Tree for appeal with ID 154783
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
style 4.CavcTask fill:#d48d32,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  4.CavcTask["4.CavcTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(organization)"]
style 6.SendCavcRemandProcessedLetterTask fill:#f77465
  6.SendCavcRemandProcessedLetterTask["6.SendCavcRemandProcessedLetterTask\n(user)"]
style 7.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  7.CavcRemandProcessedLetterResponseWindowTask["7.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 8.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5
  8.TimedHoldTask["8.TimedHoldTask\n(organization)"]
style 9.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  9.CavcRemandProcessedLetterResponseWindowTask["9.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 10.JudgeAssignTask fill:#b3b3b3
  10.JudgeAssignTask[\"10.JudgeAssignTask\n(user)"/]
style 11.JudgeDecisionReviewTask fill:#e5c494
  11.JudgeDecisionReviewTask[["11.JudgeDecisionReviewTask\n(user)"]]
style 12.AttorneyTask fill:#ffb482
  12.AttorneyTask["12.AttorneyTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.TrackVeteranTask
0.RootTask --> 3.DistributionTask
3.DistributionTask --> 4.CavcTask
4.CavcTask --> 5.SendCavcRemandProcessedLetterTask
5.SendCavcRemandProcessedLetterTask --> 6.SendCavcRemandProcessedLetterTask
4.CavcTask --> 7.CavcRemandProcessedLetterResponseWindowTask
7.CavcRemandProcessedLetterResponseWindowTask --> 8.TimedHoldTask
7.CavcRemandProcessedLetterResponseWindowTask --> 9.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 10.JudgeAssignTask
0.RootTask --> 11.JudgeDecisionReviewTask
11.JudgeDecisionReviewTask --> 12.AttorneyTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


### DTO.CTO

1 (0%) occurrences (example appeal IDs: [153805])

Task Tree for appeal with ID 153805
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.CavcTask fill:#d48d32,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  3.CavcTask["3.CavcTask\n(organization)"]
style 4.SendCavcRemandProcessedLetterTask fill:#f77465,stroke-dasharray: 5 5
  4.SendCavcRemandProcessedLetterTask["4.SendCavcRemandProcessedLetterTask\n(organization)"]
style 5.SendCavcRemandProcessedLetterTask fill:#f77465
  5.SendCavcRemandProcessedLetterTask["5.SendCavcRemandProcessedLetterTask\n(user)"]
style 6.CavcRemandProcessedLetterResponseWindowTask fill:#f87640,stroke-dasharray: 5 5
  6.CavcRemandProcessedLetterResponseWindowTask["6.CavcRemandProcessedLetterResponseWindowTask\n(organization)"]
style 7.TimedHoldTask fill:#fab0e4,stroke-dasharray: 5 5
  7.TimedHoldTask["7.TimedHoldTask\n(organization)"]
style 8.CavcRemandProcessedLetterResponseWindowTask fill:#f87640
  8.CavcRemandProcessedLetterResponseWindowTask["8.CavcRemandProcessedLetterResponseWindowTask\n(user)"]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeAssignTask fill:#b3b3b3
  10.JudgeAssignTask[\"10.JudgeAssignTask\n(user)"/]
style 11.TimedHoldTask fill:#fab0e4
  11.TimedHoldTask["11.TimedHoldTask\n(user)"]
style 12.DocketSwitchMailTask fill:#b99932,stroke-dasharray: 5 5
  12.DocketSwitchMailTask["12.DocketSwitchMailTask\n(organization)"]
style 13.DocketSwitchMailTask fill:#b99932
  13.DocketSwitchMailTask["13.DocketSwitchMailTask\n(user)"]
style 14.DocketSwitchRulingTask fill:#9ba331
  14.DocketSwitchRulingTask["14.DocketSwitchRulingTask\n(user)"]
style 15.DocketSwitchGrantedTask fill:#c09632,stroke-dasharray: 5 5
  15.DocketSwitchGrantedTask["15.DocketSwitchGrantedTask\n(organization)"]
style 16.DocketSwitchGrantedTask fill:#c09632
  16.DocketSwitchGrantedTask["16.DocketSwitchGrantedTask\n(user)"]
style 17.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  17.EvidenceOrArgumentMailTask["17.EvidenceOrArgumentMailTask\n(organization)"]
style 18.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  18.EvidenceOrArgumentMailTask["18.EvidenceOrArgumentMailTask\n(organization)"]
style 19.EvidenceOrArgumentMailTask fill:#ff9f9b
  19.EvidenceOrArgumentMailTask["19.EvidenceOrArgumentMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.CavcTask
3.CavcTask --> 4.SendCavcRemandProcessedLetterTask
4.SendCavcRemandProcessedLetterTask --> 5.SendCavcRemandProcessedLetterTask
3.CavcTask --> 6.CavcRemandProcessedLetterResponseWindowTask
6.CavcRemandProcessedLetterResponseWindowTask --> 7.TimedHoldTask
6.CavcRemandProcessedLetterResponseWindowTask --> 8.CavcRemandProcessedLetterResponseWindowTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeAssignTask
10.JudgeAssignTask --> 11.TimedHoldTask
0.RootTask --> 12.DocketSwitchMailTask
12.DocketSwitchMailTask --> 13.DocketSwitchMailTask
0.RootTask --> 14.DocketSwitchRulingTask
14.DocketSwitchRulingTask --> 15.DocketSwitchGrantedTask
15.DocketSwitchGrantedTask --> 16.DocketSwitchGrantedTask
0.RootTask --> 17.EvidenceOrArgumentMailTask
17.EvidenceOrArgumentMailTask --> 18.EvidenceOrArgumentMailTask
18.EvidenceOrArgumentMailTask --> 19.EvidenceOrArgumentMailTask
{{< /mermaid >}}


---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [direct_review Tasks](tasklist.md) |

# AttorneyDispatchReturnTask_User for direct_review

[AttorneyDispatchReturnTask_User description](../task_descr/AttorneyDispatchReturnTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

AttorneyDispatchReturnTask_User -- 1 --> OtherColocatedTask_Organization
JudgeDispatchReturnTask_User -- 36 --> AttorneyDispatchReturnTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 36 times

**Child Tasks:**

   * [OtherColocatedTask_Organization](OtherColocatedTask_Organization.md): 1 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

AttorneyDispatchReturnTask_User -- 4 --> JudgeDispatchReturnTask_User
AttorneyDispatchReturnTask_User -- 4 --> BvaDispatchTask_User
AttorneyDispatchReturnTask_User -- 3 --> AttorneyDispatchReturnTask_User
AttorneyDispatchReturnTask_User -- 2 --> ReconsiderationMotionMailTask_Organization
AttorneyDispatchReturnTask_User -- 1 --> OtherColocatedTask_Organization
AttorneyDispatchReturnTask_User -- 1 --> EvidenceOrArgumentMailTask_Organization
JudgeDispatchReturnTask_User -- 31 --> AttorneyDispatchReturnTask_User
AttorneyDispatchReturnTask_User -- 3 --> AttorneyDispatchReturnTask_User
PoaClarificationColocatedTask_User -- 1 --> AttorneyDispatchReturnTask_User
OtherColocatedTask_User -- 1 --> AttorneyDispatchReturnTask_User
{{< /mermaid >}}
**Before:**

   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 31 times
   * [AttorneyDispatchReturnTask_User](AttorneyDispatchReturnTask_User.md): 3 times
   * [OtherColocatedTask_User](OtherColocatedTask_User.md): 1 times
   * [PoaClarificationColocatedTask_User](PoaClarificationColocatedTask_User.md): 1 times

**After:**

   * [BvaDispatchTask_User](BvaDispatchTask_User.md): 4 times
   * [JudgeDispatchReturnTask_User](JudgeDispatchReturnTask_User.md): 4 times
   * [AttorneyDispatchReturnTask_User](AttorneyDispatchReturnTask_User.md): 3 times
   * [ReconsiderationMotionMailTask_Organization](ReconsiderationMotionMailTask_Organization.md): 2 times
   * [OtherColocatedTask_Organization](OtherColocatedTask_Organization.md): 1 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 1 times

## Task Creation Sequences

There are 36 total occurrences of AttorneyDispatchReturnTask_User among appeals in the direct_review docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to AttorneyDispatchReturnTask_User, sorted by frequency.

### RTO.DTO.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

3 (8%) occurrences (example appeal IDs: [17635, 14517, 51939])

Task Tree for appeal with ID 17635
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.JudgeAssignTask fill:#b3b3b3
  2.JudgeAssignTask[\"2.JudgeAssignTask\n(user)"/]
style 3.JudgeDecisionReviewTask fill:#e5c494
  3.JudgeDecisionReviewTask[["3.JudgeDecisionReviewTask\n(user)"]]
style 4.AttorneyTask fill:#ffb482
  4.AttorneyTask["4.AttorneyTask\n(user)"]
style 5.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  5.BvaDispatchTask{{"5.BvaDispatchTask\n(organization)"}}
style 6.BvaDispatchTask fill:#e78ac3
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(user)"}}
style 7.JudgeDispatchReturnTask fill:#d08f32
  7.JudgeDispatchReturnTask["7.JudgeDispatchReturnTask\n(user)"]
style 8.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  8.AttorneyDispatchReturnTask["8.AttorneyDispatchReturnTask\n(user)"]
style 9.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  9.OtherColocatedTask["9.OtherColocatedTask\n(organization)"]
style 10.OtherColocatedTask fill:#f77189
  10.OtherColocatedTask["10.OtherColocatedTask\n(user)"]
style 11.OtherColocatedTask fill:#f77189
  11.OtherColocatedTask["11.OtherColocatedTask\n(user)"]
style 12.TimedHoldTask fill:#fab0e4
  12.TimedHoldTask["12.TimedHoldTask\n(user)"]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.BvaDispatchTask
5.BvaDispatchTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.JudgeDispatchReturnTask
7.JudgeDispatchReturnTask --> 8.AttorneyDispatchReturnTask
8.AttorneyDispatchReturnTask --> 9.OtherColocatedTask
9.OtherColocatedTask --> 10.OtherColocatedTask
9.OtherColocatedTask --> 11.OtherColocatedTask
11.OtherColocatedTask --> 12.TimedHoldTask
{{< /mermaid >}}


### RTO.DTO.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

2 (6%) occurrences (example appeal IDs: [4926, 2121])

Task Tree for appeal with ID 4926
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.JudgeDecisionReviewTask fill:#e5c494
  2.JudgeDecisionReviewTask[["2.JudgeDecisionReviewTask\n(user)"]]
style 3.AttorneyTask fill:#ffb482
  3.AttorneyTask["3.AttorneyTask\n(user)"]
style 4.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  4.BvaDispatchTask{{"4.BvaDispatchTask\n(organization)"}}
style 5.BvaDispatchTask fill:#e78ac3
  5.BvaDispatchTask{{"5.BvaDispatchTask\n(user)"}}
style 6.JudgeDispatchReturnTask fill:#d08f32
  6.JudgeDispatchReturnTask["6.JudgeDispatchReturnTask\n(user)"]
style 7.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  7.AttorneyDispatchReturnTask["7.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeDecisionReviewTask
2.JudgeDecisionReviewTask --> 3.AttorneyTask
0.RootTask --> 4.BvaDispatchTask
4.BvaDispatchTask --> 5.BvaDispatchTask
5.BvaDispatchTask --> 6.JudgeDispatchReturnTask
6.JudgeDispatchReturnTask --> 7.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

2 (6%) occurrences (example appeal IDs: [30125, 36846])

Task Tree for appeal with ID 30125
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeDecisionReviewTask fill:#e5c494
  4.JudgeDecisionReviewTask[["4.JudgeDecisionReviewTask\n(user)"]]
style 5.AttorneyTask fill:#ffb482
  5.AttorneyTask["5.AttorneyTask\n(user)"]
style 6.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(organization)"}}
style 7.BvaDispatchTask fill:#e78ac3
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(user)"}}
style 8.JudgeDispatchReturnTask fill:#d08f32
  8.JudgeDispatchReturnTask["8.JudgeDispatchReturnTask\n(user)"]
style 9.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  9.AttorneyDispatchReturnTask["9.AttorneyDispatchReturnTask\n(user)"]
style 10.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  10.AttorneyDispatchReturnTask["10.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.JudgeDispatchReturnTask
8.JudgeDispatchReturnTask --> 9.AttorneyDispatchReturnTask
8.JudgeDispatchReturnTask --> 10.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.SCMTU.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

2 (6%) occurrences (example appeal IDs: [80401, 122015])

Task Tree for appeal with ID 80401
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
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
style 12.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  12.ReconsiderationMotionMailTask["12.ReconsiderationMotionMailTask\n(organization)"]
style 13.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  13.ReconsiderationMotionMailTask["13.ReconsiderationMotionMailTask\n(organization)"]
style 14.ReconsiderationMotionMailTask fill:#e08632
  14.ReconsiderationMotionMailTask["14.ReconsiderationMotionMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.SpecialCaseMovementTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
7.BvaDispatchTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.JudgeDispatchReturnTask
10.JudgeDispatchReturnTask --> 11.AttorneyDispatchReturnTask
0.RootTask --> 12.ReconsiderationMotionMailTask
12.ReconsiderationMotionMailTask --> 13.ReconsiderationMotionMailTask
13.ReconsiderationMotionMailTask --> 14.ReconsiderationMotionMailTask
{{< /mermaid >}}


### RTO.DTO.SCMTU.JATU.JDRTU.ATU.BDTO.JDRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [98869])

Task Tree for appeal with ID 98869
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.SpecialCaseMovementTask fill:#f7754f
  2.SpecialCaseMovementTask["2.SpecialCaseMovementTask\n(user)"]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeDecisionReviewTask fill:#e5c494
  4.JudgeDecisionReviewTask[["4.JudgeDecisionReviewTask\n(user)"]]
style 5.AttorneyTask fill:#ffb482
  5.AttorneyTask["5.AttorneyTask\n(user)"]
style 6.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(organization)"}}
style 7.BvaDispatchTask fill:#e78ac3
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(user)"}}
style 8.BvaDispatchTask fill:#e78ac3
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(user)"}}
style 9.JudgeDispatchReturnTask fill:#d08f32
  9.JudgeDispatchReturnTask["9.JudgeDispatchReturnTask\n(user)"]
style 10.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  10.AttorneyDispatchReturnTask["10.AttorneyDispatchReturnTask\n(user)"]
style 11.JudgeDispatchReturnTask fill:#d08f32
  11.JudgeDispatchReturnTask["11.JudgeDispatchReturnTask\n(user)"]
style 12.JudgeDispatchReturnTask fill:#d08f32
  12.JudgeDispatchReturnTask["12.JudgeDispatchReturnTask\n(user)"]
style 13.JudgeDispatchReturnTask fill:#d08f32
  13.JudgeDispatchReturnTask["13.JudgeDispatchReturnTask\n(user)"]
style 14.JudgeDispatchReturnTask fill:#d08f32
  14.JudgeDispatchReturnTask["14.JudgeDispatchReturnTask\n(user)"]
style 15.JudgeDispatchReturnTask fill:#d08f32
  15.JudgeDispatchReturnTask["15.JudgeDispatchReturnTask\n(user)"]
style 16.BvaDispatchTask fill:#e78ac3
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.SpecialCaseMovementTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.BvaDispatchTask
6.BvaDispatchTask --> 8.BvaDispatchTask
8.BvaDispatchTask --> 9.JudgeDispatchReturnTask
9.JudgeDispatchReturnTask --> 10.AttorneyDispatchReturnTask
8.BvaDispatchTask --> 11.JudgeDispatchReturnTask
8.BvaDispatchTask --> 12.JudgeDispatchReturnTask
8.BvaDispatchTask --> 13.JudgeDispatchReturnTask
8.BvaDispatchTask --> 14.JudgeDispatchReturnTask
8.BvaDispatchTask --> 15.JudgeDispatchReturnTask
6.BvaDispatchTask --> 16.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [4722])

Task Tree for appeal with ID 4722
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.JudgeDecisionReviewTask fill:#e5c494
  3.JudgeDecisionReviewTask[["3.JudgeDecisionReviewTask\n(user)"]]
style 4.AttorneyTask fill:#ffb482
  4.AttorneyTask["4.AttorneyTask\n(user)"]
style 5.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  5.BvaDispatchTask{{"5.BvaDispatchTask\n(organization)"}}
style 6.BvaDispatchTask fill:#e78ac3
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(user)"}}
style 7.JudgeDispatchReturnTask fill:#d08f32
  7.JudgeDispatchReturnTask["7.JudgeDispatchReturnTask\n(user)"]
style 8.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  8.AttorneyDispatchReturnTask["8.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.BvaDispatchTask
5.BvaDispatchTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.JudgeDispatchReturnTask
7.JudgeDispatchReturnTask --> 8.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.JATU.JDRTU.ATU.BDTO.JDRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [10273])

Task Tree for appeal with ID 10273
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeDecisionReviewTask fill:#e5c494
  4.JudgeDecisionReviewTask[["4.JudgeDecisionReviewTask\n(user)"]]
style 5.AttorneyTask fill:#ffb482
  5.AttorneyTask["5.AttorneyTask\n(user)"]
style 6.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(organization)"}}
style 7.BvaDispatchTask fill:#e78ac3
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(user)"}}
style 8.JudgeDispatchReturnTask fill:#d08f32
  8.JudgeDispatchReturnTask["8.JudgeDispatchReturnTask\n(user)"]
style 9.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  9.AttorneyDispatchReturnTask["9.AttorneyDispatchReturnTask\n(user)"]
style 10.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  10.OtherColocatedTask["10.OtherColocatedTask\n(organization)"]
style 11.OtherColocatedTask fill:#f77189
  11.OtherColocatedTask["11.OtherColocatedTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(user)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.JudgeDispatchReturnTask
8.JudgeDispatchReturnTask --> 9.AttorneyDispatchReturnTask
9.AttorneyDispatchReturnTask --> 10.OtherColocatedTask
10.OtherColocatedTask --> 11.OtherColocatedTask
6.BvaDispatchTask --> 12.BvaDispatchTask
6.BvaDispatchTask --> 13.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.SCMTU.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [116630])

Task Tree for appeal with ID 116630
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.SpecialCaseMovementTask fill:#f7754f
  2.SpecialCaseMovementTask["2.SpecialCaseMovementTask\n(user)"]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeDecisionReviewTask fill:#e5c494
  4.JudgeDecisionReviewTask[["4.JudgeDecisionReviewTask\n(user)"]]
style 5.AttorneyTask fill:#ffb482
  5.AttorneyTask["5.AttorneyTask\n(user)"]
style 6.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(organization)"}}
style 7.BvaDispatchTask fill:#e78ac3
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(user)"}}
style 8.JudgeDispatchReturnTask fill:#d08f32
  8.JudgeDispatchReturnTask["8.JudgeDispatchReturnTask\n(user)"]
style 9.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  9.AttorneyDispatchReturnTask["9.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.SpecialCaseMovementTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
0.RootTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.JudgeDispatchReturnTask
8.JudgeDispatchReturnTask --> 9.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.JATU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [14517])

Task Tree for appeal with ID 14517
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.JudgeAssignTask fill:#b3b3b3
  2.JudgeAssignTask[\"2.JudgeAssignTask\n(user)"/]
style 3.JudgeDecisionReviewTask fill:#e5c494
  3.JudgeDecisionReviewTask[["3.JudgeDecisionReviewTask\n(user)"]]
style 4.AttorneyTask fill:#ffb482
  4.AttorneyTask["4.AttorneyTask\n(user)"]
style 5.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  5.BvaDispatchTask{{"5.BvaDispatchTask\n(organization)"}}
style 6.BvaDispatchTask fill:#e78ac3
  6.BvaDispatchTask{{"6.BvaDispatchTask\n(user)"}}
style 7.JudgeDispatchReturnTask fill:#d08f32
  7.JudgeDispatchReturnTask["7.JudgeDispatchReturnTask\n(user)"]
style 8.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  8.AttorneyDispatchReturnTask["8.AttorneyDispatchReturnTask\n(user)"]
style 9.AttorneyDispatchReturnTask fill:#aa8af4,stroke:#00f,stroke-width:4px
  9.AttorneyDispatchReturnTask["9.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.BvaDispatchTask
5.BvaDispatchTask --> 6.BvaDispatchTask
6.BvaDispatchTask --> 7.JudgeDispatchReturnTask
7.JudgeDispatchReturnTask --> 8.AttorneyDispatchReturnTask
7.JudgeDispatchReturnTask --> 9.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.TVTO.DTO.JATU.THTU.JDRTU.ATU.BDTO.BDTU.JDRTU.ADRTU

1 (3%) occurrences (example appeal IDs: [55959])

Task Tree for appeal with ID 55959
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.JudgeAssignTask fill:#b3b3b3
  3.JudgeAssignTask[\"3.JudgeAssignTask\n(user)"/]
style 4.JudgeAssignTask fill:#b3b3b3
  4.JudgeAssignTask[\"4.JudgeAssignTask\n(user)"/]
style 5.TimedHoldTask fill:#fab0e4
  5.TimedHoldTask["5.TimedHoldTask\n(user)"]
style 6.TimedHoldTask fill:#fab0e4
  6.TimedHoldTask["6.TimedHoldTask\n(user)"]
style 7.JudgeDecisionReviewTask fill:#e5c494
  7.JudgeDecisionReviewTask[["7.JudgeDecisionReviewTask\n(user)"]]
style 8.AttorneyTask fill:#ffb482
  8.AttorneyTask["8.AttorneyTask\n(user)"]
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
style 14.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  14.ReconsiderationMotionMailTask["14.ReconsiderationMotionMailTask\n(organization)"]
style 15.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  15.ReconsiderationMotionMailTask["15.ReconsiderationMotionMailTask\n(organization)"]
style 16.ReconsiderationMotionMailTask fill:#e08632
  16.ReconsiderationMotionMailTask["16.ReconsiderationMotionMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeAssignTask
4.JudgeAssignTask --> 5.TimedHoldTask
4.JudgeAssignTask --> 6.TimedHoldTask
0.RootTask --> 7.JudgeDecisionReviewTask
7.JudgeDecisionReviewTask --> 8.AttorneyTask
0.RootTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.BvaDispatchTask
9.BvaDispatchTask --> 11.BvaDispatchTask
11.BvaDispatchTask --> 12.JudgeDispatchReturnTask
12.JudgeDispatchReturnTask --> 13.AttorneyDispatchReturnTask
0.RootTask --> 14.ReconsiderationMotionMailTask
14.ReconsiderationMotionMailTask --> 15.ReconsiderationMotionMailTask
15.ReconsiderationMotionMailTask --> 16.ReconsiderationMotionMailTask
{{< /mermaid >}}


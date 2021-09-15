---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [direct_review Tasks](tasklist.md) |

# CongressionalInterestMailTask_User for direct_review

[CongressionalInterestMailTask_User description](../task_descr/CongressionalInterestMailTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

CongressionalInterestMailTask_Organization -- 18 --> CongressionalInterestMailTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [CongressionalInterestMailTask_Organization](CongressionalInterestMailTask_Organization.md): 18 times

**Child Tasks:**

   * (No child tasks)

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

CongressionalInterestMailTask_User -- 2 --> JudgeAssignTask_User
CongressionalInterestMailTask_User -- 1 --> TimedHoldTask_User
CongressionalInterestMailTask_User -- 1 --> ReconsiderationMotionMailTask_Organization
CongressionalInterestMailTask_User -- 1 --> QualityReviewTask_Organization
CongressionalInterestMailTask_User -- 1 --> InformalHearingPresentationTask_User
CongressionalInterestMailTask_User -- 1 --> CongressionalInterestMailTask_Organization
CongressionalInterestMailTask_User -- 1 --> AodMotionMailTask_Organization
CongressionalInterestMailTask_Organization -- 18 --> CongressionalInterestMailTask_User
{{< /mermaid >}}
**Before:**

   * [CongressionalInterestMailTask_Organization](CongressionalInterestMailTask_Organization.md): 18 times

**After:**

   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 2 times
   * [ReconsiderationMotionMailTask_Organization](ReconsiderationMotionMailTask_Organization.md): 1 times
   * [CongressionalInterestMailTask_Organization](CongressionalInterestMailTask_Organization.md): 1 times
   * [InformalHearingPresentationTask_User](InformalHearingPresentationTask_User.md): 1 times
   * [QualityReviewTask_Organization](QualityReviewTask_Organization.md): 1 times
   * [AodMotionMailTask_Organization](AodMotionMailTask_Organization.md): 1 times
   * [TimedHoldTask_User](TimedHoldTask_User.md): 1 times

## Task Creation Sequences

There are 18 total occurrences of CongressionalInterestMailTask_User among appeals in the direct_review docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to CongressionalInterestMailTask_User, sorted by frequency.

### RTO.DTO.CIMTO.CIMTO.CIMTU

5 (28%) occurrences (example appeal IDs: [113967, 29463, 51781, 136060, 135325])

Task Tree for appeal with ID 113967
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  2.CongressionalInterestMailTask["2.CongressionalInterestMailTask\n(organization)"]
style 3.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  3.CongressionalInterestMailTask["3.CongressionalInterestMailTask\n(organization)"]
style 4.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  4.CongressionalInterestMailTask["4.CongressionalInterestMailTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.CongressionalInterestMailTask
2.CongressionalInterestMailTask --> 3.CongressionalInterestMailTask
3.CongressionalInterestMailTask --> 4.CongressionalInterestMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.CIMTO.CIMTO.CIMTU

4 (22%) occurrences (example appeal IDs: [12876, 91484, 102961, 141237])

Task Tree for appeal with ID 12876
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  4.CongressionalInterestMailTask["4.CongressionalInterestMailTask\n(organization)"]
style 5.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  5.CongressionalInterestMailTask["5.CongressionalInterestMailTask\n(organization)"]
style 6.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  6.CongressionalInterestMailTask["6.CongressionalInterestMailTask\n(user)"]
style 7.InformalHearingPresentationTask fill:#a1c9f4
  7.InformalHearingPresentationTask[/"7.InformalHearingPresentationTask\n(user)"\]
style 8.InformalHearingPresentationTask fill:#a1c9f4
  8.InformalHearingPresentationTask[/"8.InformalHearingPresentationTask\n(user)"\]
style 9.InformalHearingPresentationTask fill:#a1c9f4
  9.InformalHearingPresentationTask[/"9.InformalHearingPresentationTask\n(user)"\]
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
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
2.DistributionTask --> 4.CongressionalInterestMailTask
4.CongressionalInterestMailTask --> 5.CongressionalInterestMailTask
5.CongressionalInterestMailTask --> 6.CongressionalInterestMailTask
3.InformalHearingPresentationTask --> 7.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 8.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 9.InformalHearingPresentationTask
0.RootTask --> 10.JudgeAssignTask
0.RootTask --> 11.JudgeDecisionReviewTask
11.JudgeDecisionReviewTask --> 12.AttorneyTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.IHPTU.JATU.JDRTU.ATU.BDTO.BDTU.CIMTO.CIMTO.CIMTU

2 (11%) occurrences (example appeal IDs: [60514, 13647])

Task Tree for appeal with ID 60514
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.InformalHearingPresentationTask fill:#a1c9f4
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(user)"\]
style 5.JudgeAssignTask fill:#b3b3b3
  5.JudgeAssignTask[\"5.JudgeAssignTask\n(user)"/]
style 6.JudgeDecisionReviewTask fill:#e5c494
  6.JudgeDecisionReviewTask[["6.JudgeDecisionReviewTask\n(user)"]]
style 7.AttorneyTask fill:#ffb482
  7.AttorneyTask["7.AttorneyTask\n(user)"]
style 8.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(organization)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  10.CongressionalInterestMailTask["10.CongressionalInterestMailTask\n(organization)"]
style 11.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  11.CongressionalInterestMailTask["11.CongressionalInterestMailTask\n(organization)"]
style 12.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  12.CongressionalInterestMailTask["12.CongressionalInterestMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 4.InformalHearingPresentationTask
0.RootTask --> 5.JudgeAssignTask
0.RootTask --> 6.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 7.AttorneyTask
0.RootTask --> 8.BvaDispatchTask
8.BvaDispatchTask --> 9.BvaDispatchTask
0.RootTask --> 10.CongressionalInterestMailTask
10.CongressionalInterestMailTask --> 11.CongressionalInterestMailTask
11.CongressionalInterestMailTask --> 12.CongressionalInterestMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.IHPTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [84314])

Task Tree for appeal with ID 84314
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.InformalHearingPresentationTask fill:#a1c9f4
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(user)"\]
style 5.InformalHearingPresentationTask fill:#a1c9f4
  5.InformalHearingPresentationTask[/"5.InformalHearingPresentationTask\n(user)"\]
style 6.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  6.CongressionalInterestMailTask["6.CongressionalInterestMailTask\n(organization)"]
style 7.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  7.CongressionalInterestMailTask["7.CongressionalInterestMailTask\n(organization)"]
style 8.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  8.CongressionalInterestMailTask["8.CongressionalInterestMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 4.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
2.DistributionTask --> 6.CongressionalInterestMailTask
6.CongressionalInterestMailTask --> 7.CongressionalInterestMailTask
7.CongressionalInterestMailTask --> 8.CongressionalInterestMailTask
{{< /mermaid >}}


### RTO.DTO.JATU.JDRTU.ATU.BDTO.BDTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [76582])

Task Tree for appeal with ID 76582
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
style 7.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  7.CongressionalInterestMailTask["7.CongressionalInterestMailTask\n(organization)"]
style 8.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  8.CongressionalInterestMailTask["8.CongressionalInterestMailTask\n(organization)"]
style 9.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  9.CongressionalInterestMailTask["9.CongressionalInterestMailTask\n(user)"]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.BvaDispatchTask
5.BvaDispatchTask --> 6.BvaDispatchTask
0.RootTask --> 7.CongressionalInterestMailTask
7.CongressionalInterestMailTask --> 8.CongressionalInterestMailTask
8.CongressionalInterestMailTask --> 9.CongressionalInterestMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.AMMTO.AMMTO.AMMTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [89461])

Task Tree for appeal with ID 89461
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  4.AodMotionMailTask["4.AodMotionMailTask\n(organization)"]
style 5.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  5.AodMotionMailTask["5.AodMotionMailTask\n(organization)"]
style 6.AodMotionMailTask fill:#fffea3
  6.AodMotionMailTask["6.AodMotionMailTask\n(user)"]
style 7.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  7.CongressionalInterestMailTask["7.CongressionalInterestMailTask\n(organization)"]
style 8.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  8.CongressionalInterestMailTask["8.CongressionalInterestMailTask\n(organization)"]
style 9.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  9.CongressionalInterestMailTask["9.CongressionalInterestMailTask\n(user)"]
style 10.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  10.AodMotionMailTask["10.AodMotionMailTask\n(organization)"]
style 11.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  11.AodMotionMailTask["11.AodMotionMailTask\n(organization)"]
style 12.AodMotionMailTask fill:#fffea3
  12.AodMotionMailTask["12.AodMotionMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
0.RootTask --> 4.AodMotionMailTask
4.AodMotionMailTask --> 5.AodMotionMailTask
5.AodMotionMailTask --> 6.AodMotionMailTask
2.DistributionTask --> 7.CongressionalInterestMailTask
7.CongressionalInterestMailTask --> 8.CongressionalInterestMailTask
8.CongressionalInterestMailTask --> 9.CongressionalInterestMailTask
0.RootTask --> 10.AodMotionMailTask
10.AodMotionMailTask --> 11.AodMotionMailTask
11.AodMotionMailTask --> 12.AodMotionMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.JATU.JDRTU.ATU.BDTO.BDTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [79060])

Task Tree for appeal with ID 79060
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
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
style 9.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  9.CongressionalInterestMailTask["9.CongressionalInterestMailTask\n(organization)"]
style 10.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  10.CongressionalInterestMailTask["10.CongressionalInterestMailTask\n(organization)"]
style 11.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  11.CongressionalInterestMailTask["11.CongressionalInterestMailTask\n(user)"]
style 12.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  12.CongressionalInterestMailTask["12.CongressionalInterestMailTask\n(organization)"]
style 13.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  13.CongressionalInterestMailTask["13.CongressionalInterestMailTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
0.RootTask --> 9.CongressionalInterestMailTask
9.CongressionalInterestMailTask --> 10.CongressionalInterestMailTask
10.CongressionalInterestMailTask --> 11.CongressionalInterestMailTask
0.RootTask --> 12.CongressionalInterestMailTask
12.CongressionalInterestMailTask --> 13.CongressionalInterestMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.IHPTU.JATU.JDRTU.ATU.ICTO.ICTU.THTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [113698])

Task Tree for appeal with ID 113698
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.InformalHearingPresentationTask fill:#a1c9f4
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(user)"\]
style 5.InformalHearingPresentationTask fill:#a1c9f4
  5.InformalHearingPresentationTask[/"5.InformalHearingPresentationTask\n(user)"\]
style 6.JudgeAssignTask fill:#b3b3b3
  6.JudgeAssignTask[\"6.JudgeAssignTask\n(user)"/]
style 7.JudgeDecisionReviewTask fill:#e5c494
  7.JudgeDecisionReviewTask[["7.JudgeDecisionReviewTask\n(user)"]]
style 8.AttorneyTask fill:#ffb482
  8.AttorneyTask["8.AttorneyTask\n(user)"]
style 9.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  9.IhpColocatedTask["9.IhpColocatedTask\n(organization)"]
style 10.IhpColocatedTask fill:#f77183
  10.IhpColocatedTask["10.IhpColocatedTask\n(user)"]
style 11.TimedHoldTask fill:#fab0e4
  11.TimedHoldTask["11.TimedHoldTask\n(user)"]
style 12.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  12.CongressionalInterestMailTask["12.CongressionalInterestMailTask\n(organization)"]
style 13.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  13.CongressionalInterestMailTask["13.CongressionalInterestMailTask\n(organization)"]
style 14.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  14.CongressionalInterestMailTask["14.CongressionalInterestMailTask\n(user)"]
style 15.TimedHoldTask fill:#fab0e4
  15.TimedHoldTask["15.TimedHoldTask\n(user)"]
style 16.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  16.IhpColocatedTask["16.IhpColocatedTask\n(organization)"]
style 17.IhpColocatedTask fill:#f77183
  17.IhpColocatedTask["17.IhpColocatedTask\n(user)"]
style 18.TimedHoldTask fill:#fab0e4
  18.TimedHoldTask["18.TimedHoldTask\n(user)"]
style 19.TimedHoldTask fill:#fab0e4
  19.TimedHoldTask["19.TimedHoldTask\n(user)"]
style 20.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  20.BvaDispatchTask{{"20.BvaDispatchTask\n(organization)"}}
style 21.BvaDispatchTask fill:#e78ac3
  21.BvaDispatchTask{{"21.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 4.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 5.InformalHearingPresentationTask
0.RootTask --> 6.JudgeAssignTask
0.RootTask --> 7.JudgeDecisionReviewTask
7.JudgeDecisionReviewTask --> 8.AttorneyTask
8.AttorneyTask --> 9.IhpColocatedTask
9.IhpColocatedTask --> 10.IhpColocatedTask
10.IhpColocatedTask --> 11.TimedHoldTask
0.RootTask --> 12.CongressionalInterestMailTask
12.CongressionalInterestMailTask --> 13.CongressionalInterestMailTask
13.CongressionalInterestMailTask --> 14.CongressionalInterestMailTask
10.IhpColocatedTask --> 15.TimedHoldTask
8.AttorneyTask --> 16.IhpColocatedTask
16.IhpColocatedTask --> 17.IhpColocatedTask
17.IhpColocatedTask --> 18.TimedHoldTask
17.IhpColocatedTask --> 19.TimedHoldTask
0.RootTask --> 20.BvaDispatchTask
20.BvaDispatchTask --> 21.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.JATU.ATU.OCTO.OCTU.THTU.THTU.THTU.THTU.ARTU.JDRTU.BDTO.BDTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [18354])

Task Tree for appeal with ID 18354
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
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  6.OtherColocatedTask["6.OtherColocatedTask\n(organization)"]
style 7.OtherColocatedTask fill:#f77189
  7.OtherColocatedTask["7.OtherColocatedTask\n(user)"]
style 8.TimedHoldTask fill:#fab0e4
  8.TimedHoldTask["8.TimedHoldTask\n(user)"]
style 9.TimedHoldTask fill:#fab0e4
  9.TimedHoldTask["9.TimedHoldTask\n(user)"]
style 10.TimedHoldTask fill:#fab0e4
  10.TimedHoldTask["10.TimedHoldTask\n(user)"]
style 11.TimedHoldTask fill:#fab0e4
  11.TimedHoldTask["11.TimedHoldTask\n(user)"]
style 12.TimedHoldTask fill:#fab0e4
  12.TimedHoldTask["12.TimedHoldTask\n(user)"]
style 13.TimedHoldTask fill:#fab0e4
  13.TimedHoldTask["13.TimedHoldTask\n(user)"]
style 14.AttorneyRewriteTask fill:#17becf
  14.AttorneyRewriteTask["14.AttorneyRewriteTask\n(user)"]
style 15.JudgeDecisionReviewTask fill:#e5c494
  15.JudgeDecisionReviewTask[["15.JudgeDecisionReviewTask\n(user)"]]
style 16.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(organization)"}}
style 17.BvaDispatchTask fill:#e78ac3
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(user)"}}
style 18.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  18.CongressionalInterestMailTask["18.CongressionalInterestMailTask\n(organization)"]
style 19.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  19.CongressionalInterestMailTask["19.CongressionalInterestMailTask\n(organization)"]
style 20.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  20.CongressionalInterestMailTask["20.CongressionalInterestMailTask\n(user)"]
style 21.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  21.ReconsiderationMotionMailTask["21.ReconsiderationMotionMailTask\n(organization)"]
style 22.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  22.ReconsiderationMotionMailTask["22.ReconsiderationMotionMailTask\n(organization)"]
style 23.ReconsiderationMotionMailTask fill:#e08632
  23.ReconsiderationMotionMailTask["23.ReconsiderationMotionMailTask\n(user)"]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
15.JudgeDecisionReviewTask --> 4.AttorneyTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.OtherColocatedTask
6.OtherColocatedTask --> 7.OtherColocatedTask
7.OtherColocatedTask --> 8.TimedHoldTask
7.OtherColocatedTask --> 9.TimedHoldTask
7.OtherColocatedTask --> 10.TimedHoldTask
7.OtherColocatedTask --> 11.TimedHoldTask
7.OtherColocatedTask --> 12.TimedHoldTask
7.OtherColocatedTask --> 13.TimedHoldTask
15.JudgeDecisionReviewTask --> 14.AttorneyRewriteTask
0.RootTask --> 15.JudgeDecisionReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
0.RootTask --> 18.CongressionalInterestMailTask
18.CongressionalInterestMailTask --> 19.CongressionalInterestMailTask
19.CongressionalInterestMailTask --> 20.CongressionalInterestMailTask
0.RootTask --> 21.ReconsiderationMotionMailTask
21.ReconsiderationMotionMailTask --> 22.ReconsiderationMotionMailTask
22.ReconsiderationMotionMailTask --> 23.ReconsiderationMotionMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.IHPTO.IHPTU.JATU.JDRTU.ATU.ICTO.ICTU.FCTO.FTO.FTU.CIMTO.CIMTO.CIMTU

1 (6%) occurrences (example appeal IDs: [39731])

Task Tree for appeal with ID 39731
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  3.InformalHearingPresentationTask[/"3.InformalHearingPresentationTask\n(organization)"\]
style 4.InformalHearingPresentationTask fill:#a1c9f4
  4.InformalHearingPresentationTask[/"4.InformalHearingPresentationTask\n(user)"\]
style 5.JudgeAssignTask fill:#b3b3b3
  5.JudgeAssignTask[\"5.JudgeAssignTask\n(user)"/]
style 6.JudgeDecisionReviewTask fill:#e5c494
  6.JudgeDecisionReviewTask[["6.JudgeDecisionReviewTask\n(user)"]]
style 7.AttorneyTask fill:#ffb482
  7.AttorneyTask["7.AttorneyTask\n(user)"]
style 8.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  8.IhpColocatedTask["8.IhpColocatedTask\n(organization)"]
style 9.IhpColocatedTask fill:#f77183
  9.IhpColocatedTask["9.IhpColocatedTask\n(user)"]
style 10.TimedHoldTask fill:#fab0e4
  10.TimedHoldTask["10.TimedHoldTask\n(user)"]
style 11.FoiaColocatedTask fill:#e58432,stroke-dasharray: 5 5
  11.FoiaColocatedTask["11.FoiaColocatedTask\n(organization)"]
style 12.FoiaTask fill:#f7727c,stroke-dasharray: 5 5
  12.FoiaTask["12.FoiaTask\n(organization)"]
style 13.FoiaTask fill:#f7727c
  13.FoiaTask["13.FoiaTask\n(user)"]
style 14.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  14.CongressionalInterestMailTask["14.CongressionalInterestMailTask\n(organization)"]
style 15.CongressionalInterestMailTask fill:#f7755b,stroke-dasharray: 5 5
  15.CongressionalInterestMailTask["15.CongressionalInterestMailTask\n(organization)"]
style 16.CongressionalInterestMailTask fill:#f7755b,stroke:#00f,stroke-width:4px
  16.CongressionalInterestMailTask["16.CongressionalInterestMailTask\n(user)"]
style 17.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  17.QualityReviewTask[\"17.QualityReviewTask\n(organization)"\]
style 18.QualityReviewTask fill:#b9f2f0
  18.QualityReviewTask[\"18.QualityReviewTask\n(user)"\]
style 19.JudgeQualityReviewTask fill:#b09c32
  19.JudgeQualityReviewTask["19.JudgeQualityReviewTask\n(user)"]
style 20.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  20.BvaDispatchTask{{"20.BvaDispatchTask\n(organization)"}}
style 21.BvaDispatchTask fill:#e78ac3
  21.BvaDispatchTask{{"21.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 4.InformalHearingPresentationTask
0.RootTask --> 5.JudgeAssignTask
0.RootTask --> 6.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 7.AttorneyTask
7.AttorneyTask --> 8.IhpColocatedTask
8.IhpColocatedTask --> 9.IhpColocatedTask
9.IhpColocatedTask --> 10.TimedHoldTask
7.AttorneyTask --> 11.FoiaColocatedTask
11.FoiaColocatedTask --> 12.FoiaTask
12.FoiaTask --> 13.FoiaTask
0.RootTask --> 14.CongressionalInterestMailTask
14.CongressionalInterestMailTask --> 15.CongressionalInterestMailTask
15.CongressionalInterestMailTask --> 16.CongressionalInterestMailTask
0.RootTask --> 17.QualityReviewTask
17.QualityReviewTask --> 18.QualityReviewTask
18.QualityReviewTask --> 19.JudgeQualityReviewTask
0.RootTask --> 20.BvaDispatchTask
20.BvaDispatchTask --> 21.BvaDispatchTask
{{< /mermaid >}}


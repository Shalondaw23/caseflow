---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [direct_review Tasks](tasklist.md) |

# UnaccreditedRepColocatedTask_Organization for direct_review

[UnaccreditedRepColocatedTask_Organization description](../task_descr/UnaccreditedRepColocatedTask_Organization.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

UnaccreditedRepColocatedTask_Organization -- 11 --> UnaccreditedRepColocatedTask_User
AttorneyTask_User -- 9 --> UnaccreditedRepColocatedTask_Organization
JudgeAssignTask_User -- 1 --> UnaccreditedRepColocatedTask_Organization
{{< /mermaid >}}
**Parent Tasks:**

   * [AttorneyTask_User](AttorneyTask_User.md): 9 times
   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 1 times

**Child Tasks:**

   * [UnaccreditedRepColocatedTask_User](UnaccreditedRepColocatedTask_User.md): 11 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

UnaccreditedRepColocatedTask_Organization -- 11 --> UnaccreditedRepColocatedTask_User
AttorneyTask_User -- 7 --> UnaccreditedRepColocatedTask_Organization
JudgeAssignTask_User -- 2 --> UnaccreditedRepColocatedTask_Organization
ReconsiderationMotionMailTask_User -- 1 --> UnaccreditedRepColocatedTask_Organization
PowerOfAttorneyRelatedMailTask_User -- 1 --> UnaccreditedRepColocatedTask_Organization
{{< /mermaid >}}
**Before:**

   * [AttorneyTask_User](AttorneyTask_User.md): 7 times
   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 2 times
   * [ReconsiderationMotionMailTask_User](ReconsiderationMotionMailTask_User.md): 1 times
   * [PowerOfAttorneyRelatedMailTask_User](PowerOfAttorneyRelatedMailTask_User.md): 1 times

**After:**

   * [UnaccreditedRepColocatedTask_User](UnaccreditedRepColocatedTask_User.md): 11 times

## Task Creation Sequences

There are 11 total occurrences of UnaccreditedRepColocatedTask_Organization among appeals in the direct_review docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to UnaccreditedRepColocatedTask_Organization, sorted by frequency.

### RTO.DTO.JATU.ATU.URCTO

3 (27%) occurrences (example appeal IDs: [55990, 11064, 53343])

Task Tree for appeal with ID 55990
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
style 5.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.UnaccreditedRepColocatedTask["5.UnaccreditedRepColocatedTask\n(organization)"]
style 6.UnaccreditedRepColocatedTask fill:#c180f4
  6.UnaccreditedRepColocatedTask["6.UnaccreditedRepColocatedTask\n(user)"]
style 7.UnaccreditedRepColocatedTask fill:#c180f4
  7.UnaccreditedRepColocatedTask["7.UnaccreditedRepColocatedTask\n(user)"]
style 8.TimedHoldTask fill:#fab0e4
  8.TimedHoldTask["8.TimedHoldTask\n(user)"]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(organization)"}}
style 11.BvaDispatchTask fill:#e78ac3
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 4.AttorneyTask
4.AttorneyTask --> 5.UnaccreditedRepColocatedTask
5.UnaccreditedRepColocatedTask --> 6.UnaccreditedRepColocatedTask
5.UnaccreditedRepColocatedTask --> 7.UnaccreditedRepColocatedTask
7.UnaccreditedRepColocatedTask --> 8.TimedHoldTask
0.RootTask --> 9.JudgeDecisionReviewTask
0.RootTask --> 10.BvaDispatchTask
10.BvaDispatchTask --> 11.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.JATU.JDRTU.ATU.URCTO

2 (18%) occurrences (example appeal IDs: [36673, 18256])

Task Tree for appeal with ID 36673
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
style 5.JudgeDecisionReviewTask fill:#e5c494
  5.JudgeDecisionReviewTask[["5.JudgeDecisionReviewTask\n(user)"]]
style 6.AttorneyTask fill:#ffb482
  6.AttorneyTask["6.AttorneyTask\n(user)"]
style 7.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  7.UnaccreditedRepColocatedTask["7.UnaccreditedRepColocatedTask\n(organization)"]
style 8.UnaccreditedRepColocatedTask fill:#c180f4
  8.UnaccreditedRepColocatedTask["8.UnaccreditedRepColocatedTask\n(user)"]
style 9.TimedHoldTask fill:#fab0e4
  9.TimedHoldTask["9.TimedHoldTask\n(user)"]
style 10.PowerOfAttorneyRelatedMailTask fill:#ef7d32,stroke-dasharray: 5 5
  10.PowerOfAttorneyRelatedMailTask["10.PowerOfAttorneyRelatedMailTask\n(organization)"]
style 11.PowerOfAttorneyRelatedMailTask fill:#ef7d32,stroke-dasharray: 5 5
  11.PowerOfAttorneyRelatedMailTask["11.PowerOfAttorneyRelatedMailTask\n(organization)"]
style 12.PowerOfAttorneyRelatedMailTask fill:#ef7d32
  12.PowerOfAttorneyRelatedMailTask["12.PowerOfAttorneyRelatedMailTask\n(user)"]
style 13.AttorneyRewriteTask fill:#17becf
  13.AttorneyRewriteTask["13.AttorneyRewriteTask\n(user)"]
style 14.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(organization)"}}
style 15.BvaDispatchTask fill:#e78ac3
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeAssignTask
0.RootTask --> 5.JudgeDecisionReviewTask
5.JudgeDecisionReviewTask --> 6.AttorneyTask
6.AttorneyTask --> 7.UnaccreditedRepColocatedTask
7.UnaccreditedRepColocatedTask --> 8.UnaccreditedRepColocatedTask
8.UnaccreditedRepColocatedTask --> 9.TimedHoldTask
0.RootTask --> 10.PowerOfAttorneyRelatedMailTask
10.PowerOfAttorneyRelatedMailTask --> 11.PowerOfAttorneyRelatedMailTask
11.PowerOfAttorneyRelatedMailTask --> 12.PowerOfAttorneyRelatedMailTask
5.JudgeDecisionReviewTask --> 13.AttorneyRewriteTask
0.RootTask --> 14.BvaDispatchTask
14.BvaDispatchTask --> 15.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.JATU.JDRTU.ATU.URCTO

2 (18%) occurrences (example appeal IDs: [98564, 67960])

Task Tree for appeal with ID 98564
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
style 6.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.UnaccreditedRepColocatedTask["6.UnaccreditedRepColocatedTask\n(organization)"]
style 7.UnaccreditedRepColocatedTask fill:#c180f4
  7.UnaccreditedRepColocatedTask["7.UnaccreditedRepColocatedTask\n(user)"]
style 8.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(organization)"}}
style 9.BvaDispatchTask fill:#e78ac3
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(user)"}}
style 10.BvaDispatchTask fill:#e78ac3
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
0.RootTask --> 3.JudgeAssignTask
0.RootTask --> 4.JudgeDecisionReviewTask
4.JudgeDecisionReviewTask --> 5.AttorneyTask
5.AttorneyTask --> 6.UnaccreditedRepColocatedTask
6.UnaccreditedRepColocatedTask --> 7.UnaccreditedRepColocatedTask
0.RootTask --> 8.BvaDispatchTask
8.BvaDispatchTask --> 9.BvaDispatchTask
8.BvaDispatchTask --> 10.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.JATU.URCTO

1 (9%) occurrences (example appeal IDs: [39301])

Task Tree for appeal with ID 39301
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
style 5.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.UnaccreditedRepColocatedTask["5.UnaccreditedRepColocatedTask\n(organization)"]
style 6.UnaccreditedRepColocatedTask fill:#c180f4
  6.UnaccreditedRepColocatedTask["6.UnaccreditedRepColocatedTask\n(user)"]
style 7.TimedHoldTask fill:#fab0e4
  7.TimedHoldTask["7.TimedHoldTask\n(user)"]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  12.BvaDispatchTask{{"12.BvaDispatchTask\n(organization)"}}
style 13.BvaDispatchTask fill:#e78ac3
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
4.AttorneyTask --> 5.UnaccreditedRepColocatedTask
5.UnaccreditedRepColocatedTask --> 6.UnaccreditedRepColocatedTask
6.UnaccreditedRepColocatedTask --> 7.TimedHoldTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
10.JudgeDecisionReviewTask --> 11.AttorneyTask
0.RootTask --> 12.BvaDispatchTask
12.BvaDispatchTask --> 13.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.TTO.TTU.JATU.URCTO

1 (9%) occurrences (example appeal IDs: [46574])

Task Tree for appeal with ID 46574
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.TranslationTask fill:#bcbd22,stroke-dasharray: 5 5
  2.TranslationTask["2.TranslationTask\n(organization)"]
style 3.TranslationTask fill:#bcbd22
  3.TranslationTask["3.TranslationTask\n(user)"]
style 4.TimedHoldTask fill:#fab0e4
  4.TimedHoldTask["4.TimedHoldTask\n(user)"]
style 5.JudgeAssignTask fill:#b3b3b3
  5.JudgeAssignTask[\"5.JudgeAssignTask\n(user)"/]
style 6.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.UnaccreditedRepColocatedTask["6.UnaccreditedRepColocatedTask\n(organization)"]
style 7.UnaccreditedRepColocatedTask fill:#c180f4
  7.UnaccreditedRepColocatedTask["7.UnaccreditedRepColocatedTask\n(user)"]
style 8.TimedHoldTask fill:#fab0e4
  8.TimedHoldTask["8.TimedHoldTask\n(user)"]
style 9.OtherColocatedTask fill:#f77189,stroke-dasharray: 5 5
  9.OtherColocatedTask["9.OtherColocatedTask\n(organization)"]
style 10.OtherColocatedTask fill:#f77189
  10.OtherColocatedTask["10.OtherColocatedTask\n(user)"]
style 11.JudgeDecisionReviewTask fill:#e5c494
  11.JudgeDecisionReviewTask[["11.JudgeDecisionReviewTask\n(user)"]]
style 12.AttorneyTask fill:#ffb482
  12.AttorneyTask["12.AttorneyTask\n(user)"]
style 13.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  13.BvaDispatchTask{{"13.BvaDispatchTask\n(organization)"}}
style 14.BvaDispatchTask fill:#e78ac3
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.TranslationTask
2.TranslationTask --> 3.TranslationTask
3.TranslationTask --> 4.TimedHoldTask
0.RootTask --> 5.JudgeAssignTask
5.JudgeAssignTask --> 6.UnaccreditedRepColocatedTask
6.UnaccreditedRepColocatedTask --> 7.UnaccreditedRepColocatedTask
7.UnaccreditedRepColocatedTask --> 8.TimedHoldTask
5.JudgeAssignTask --> 9.OtherColocatedTask
9.OtherColocatedTask --> 10.OtherColocatedTask
0.RootTask --> 11.JudgeDecisionReviewTask
11.JudgeDecisionReviewTask --> 12.AttorneyTask
0.RootTask --> 13.BvaDispatchTask
13.BvaDispatchTask --> 14.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.IHPTO.IHPTU.RMMTO.RMMTO.JATU.JDRTU.ATU.RMMTU.URCTO

1 (9%) occurrences (example appeal IDs: [167189])

Task Tree for appeal with ID 167189
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
style 5.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  5.ReconsiderationMotionMailTask["5.ReconsiderationMotionMailTask\n(organization)"]
style 6.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  6.ReconsiderationMotionMailTask["6.ReconsiderationMotionMailTask\n(organization)"]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.AttorneyTask fill:#ffb482
  9.AttorneyTask["9.AttorneyTask\n(user)"]
style 10.ReconsiderationMotionMailTask fill:#e08632
  10.ReconsiderationMotionMailTask["10.ReconsiderationMotionMailTask\n(user)"]
style 11.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  11.UnaccreditedRepColocatedTask["11.UnaccreditedRepColocatedTask\n(organization)"]
style 12.UnaccreditedRepColocatedTask fill:#c180f4
  12.UnaccreditedRepColocatedTask["12.UnaccreditedRepColocatedTask\n(user)"]
style 13.TimedHoldTask fill:#fab0e4
  13.TimedHoldTask["13.TimedHoldTask\n(user)"]
style 14.AttorneyRewriteTask fill:#17becf
  14.AttorneyRewriteTask["14.AttorneyRewriteTask\n(user)"]
style 15.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(organization)"}}
style 16.BvaDispatchTask fill:#e78ac3
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.InformalHearingPresentationTask
3.InformalHearingPresentationTask --> 4.InformalHearingPresentationTask
0.RootTask --> 5.ReconsiderationMotionMailTask
5.ReconsiderationMotionMailTask --> 6.ReconsiderationMotionMailTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
6.ReconsiderationMotionMailTask --> 10.ReconsiderationMotionMailTask
9.AttorneyTask --> 11.UnaccreditedRepColocatedTask
11.UnaccreditedRepColocatedTask --> 12.UnaccreditedRepColocatedTask
12.UnaccreditedRepColocatedTask --> 13.TimedHoldTask
8.JudgeDecisionReviewTask --> 14.AttorneyRewriteTask
0.RootTask --> 15.BvaDispatchTask
15.BvaDispatchTask --> 16.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.JATU.JDRTU.ATU.URCTO.URCTU.PCCTO.PCCTU.THTU.TVTO.IHPTO.POARMTO.POARMTO.POARMTU.URCTO

1 (9%) occurrences (example appeal IDs: [18256])

Task Tree for appeal with ID 18256
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
style 5.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.UnaccreditedRepColocatedTask["5.UnaccreditedRepColocatedTask\n(organization)"]
style 6.UnaccreditedRepColocatedTask fill:#c180f4
  6.UnaccreditedRepColocatedTask["6.UnaccreditedRepColocatedTask\n(user)"]
style 7.PoaClarificationColocatedTask fill:#c99232,stroke-dasharray: 5 5
  7.PoaClarificationColocatedTask["7.PoaClarificationColocatedTask\n(organization)"]
style 8.PoaClarificationColocatedTask fill:#c99232
  8.PoaClarificationColocatedTask["8.PoaClarificationColocatedTask\n(user)"]
style 9.TimedHoldTask fill:#fab0e4
  9.TimedHoldTask["9.TimedHoldTask\n(user)"]
style 10.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  10.TrackVeteranTask(["10.TrackVeteranTask\n(organization)"])
style 11.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  11.InformalHearingPresentationTask[/"11.InformalHearingPresentationTask\n(organization)"\]
style 12.PowerOfAttorneyRelatedMailTask fill:#ef7d32,stroke-dasharray: 5 5
  12.PowerOfAttorneyRelatedMailTask["12.PowerOfAttorneyRelatedMailTask\n(organization)"]
style 13.PowerOfAttorneyRelatedMailTask fill:#ef7d32,stroke-dasharray: 5 5
  13.PowerOfAttorneyRelatedMailTask["13.PowerOfAttorneyRelatedMailTask\n(organization)"]
style 14.PowerOfAttorneyRelatedMailTask fill:#ef7d32
  14.PowerOfAttorneyRelatedMailTask["14.PowerOfAttorneyRelatedMailTask\n(user)"]
style 15.UnaccreditedRepColocatedTask fill:#c180f4,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  15.UnaccreditedRepColocatedTask["15.UnaccreditedRepColocatedTask\n(organization)"]
style 16.UnaccreditedRepColocatedTask fill:#c180f4
  16.UnaccreditedRepColocatedTask["16.UnaccreditedRepColocatedTask\n(user)"]
style 17.IhpColocatedTask fill:#f77183,stroke-dasharray: 5 5
  17.IhpColocatedTask["17.IhpColocatedTask\n(organization)"]
style 18.IhpColocatedTask fill:#f77183
  18.IhpColocatedTask["18.IhpColocatedTask\n(user)"]
style 19.TimedHoldTask fill:#fab0e4
  19.TimedHoldTask["19.TimedHoldTask\n(user)"]
style 20.InformalHearingPresentationTask fill:#a1c9f4
  20.InformalHearingPresentationTask[/"20.InformalHearingPresentationTask\n(user)"\]
style 21.InformalHearingPresentationTask fill:#a1c9f4
  21.InformalHearingPresentationTask[/"21.InformalHearingPresentationTask\n(user)"\]
style 22.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  22.BvaDispatchTask{{"22.BvaDispatchTask\n(organization)"}}
style 23.BvaDispatchTask fill:#e78ac3
  23.BvaDispatchTask{{"23.BvaDispatchTask\n(user)"}}
style 24.InformalHearingPresentationTask fill:#a1c9f4
  24.InformalHearingPresentationTask[/"24.InformalHearingPresentationTask\n(user)"\]
style 25.InformalHearingPresentationTask fill:#a1c9f4
  25.InformalHearingPresentationTask[/"25.InformalHearingPresentationTask\n(user)"\]

0.RootTask --> 1.DistributionTask
0.RootTask --> 2.JudgeAssignTask
0.RootTask --> 3.JudgeDecisionReviewTask
3.JudgeDecisionReviewTask --> 4.AttorneyTask
4.AttorneyTask --> 5.UnaccreditedRepColocatedTask
5.UnaccreditedRepColocatedTask --> 6.UnaccreditedRepColocatedTask
4.AttorneyTask --> 7.PoaClarificationColocatedTask
7.PoaClarificationColocatedTask --> 8.PoaClarificationColocatedTask
8.PoaClarificationColocatedTask --> 9.TimedHoldTask
0.RootTask --> 10.TrackVeteranTask
0.RootTask --> 11.InformalHearingPresentationTask
0.RootTask --> 12.PowerOfAttorneyRelatedMailTask
12.PowerOfAttorneyRelatedMailTask --> 13.PowerOfAttorneyRelatedMailTask
13.PowerOfAttorneyRelatedMailTask --> 14.PowerOfAttorneyRelatedMailTask
4.AttorneyTask --> 15.UnaccreditedRepColocatedTask
15.UnaccreditedRepColocatedTask --> 16.UnaccreditedRepColocatedTask
4.AttorneyTask --> 17.IhpColocatedTask
17.IhpColocatedTask --> 18.IhpColocatedTask
18.IhpColocatedTask --> 19.TimedHoldTask
11.InformalHearingPresentationTask --> 20.InformalHearingPresentationTask
11.InformalHearingPresentationTask --> 21.InformalHearingPresentationTask
0.RootTask --> 22.BvaDispatchTask
22.BvaDispatchTask --> 23.BvaDispatchTask
11.InformalHearingPresentationTask --> 24.InformalHearingPresentationTask
11.InformalHearingPresentationTask --> 25.InformalHearingPresentationTask
{{< /mermaid >}}


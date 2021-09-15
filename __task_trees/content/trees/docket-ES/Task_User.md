---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# Task_User for evidence_submission

[Task_User description](../task_descr/Task_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

Task_Organization -- 5 --> Task_User
{{< /mermaid >}}
**Parent Tasks:**

   * [Task_Organization](Task_Organization.md): 5 times

**Child Tasks:**

   * (No child tasks)

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

Task_User -- 2 --> BvaDispatchTask_Organization
Task_User -- 1 --> TrackVeteranTask_Organization
Task_User -- 1 --> PreRoutingFoiaColocatedTask_User
Task_User -- 1 --> JudgeAssignTask_User
Task_Organization -- 5 --> Task_User
{{< /mermaid >}}
**Before:**

   * [Task_Organization](Task_Organization.md): 5 times

**After:**

   * [BvaDispatchTask_Organization](BvaDispatchTask_Organization.md): 2 times
   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 1 times
   * [PreRoutingFoiaColocatedTask_User](PreRoutingFoiaColocatedTask_User.md): 1 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 1 times

## Task Creation Sequences

There are 5 total occurrences of Task_User among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to Task_User, sorted by frequency.

### RTO.JDRTU.ATU.ECTO.ECTU.TO.TU

1 (20%) occurrences (example appeal IDs: [286])

Task Tree for appeal with ID 286
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.JudgeDecisionReviewTask fill:#e5c494
  1.JudgeDecisionReviewTask[["1.JudgeDecisionReviewTask\n(user)"]]
style 2.AttorneyTask fill:#ffb482
  2.AttorneyTask["2.AttorneyTask\n(user)"]
style 3.ExtensionColocatedTask fill:#bc9732,stroke-dasharray: 5 5
  3.ExtensionColocatedTask["3.ExtensionColocatedTask\n(organization)"]
style 4.ExtensionColocatedTask fill:#bc9732
  4.ExtensionColocatedTask["4.ExtensionColocatedTask\n(user)"]
style 5.Task fill:#9e8ef4,stroke-dasharray: 5 5
  5.Task["5.Task\n(organization)"]
style 6.Task fill:#9e8ef4,stroke:#00f,stroke-width:4px
  6.Task["6.Task\n(user)"]
style 7.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  7.HearingRelatedMailTask["7.HearingRelatedMailTask\n(organization)"]
style 8.HearingRelatedMailTask fill:#ff7f0e,stroke-dasharray: 5 5
  8.HearingRelatedMailTask["8.HearingRelatedMailTask\n(organization)"]
style 9.HearingRelatedMailTask fill:#ff7f0e
  9.HearingRelatedMailTask["9.HearingRelatedMailTask\n(user)"]
style 10.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(organization)"}}
style 11.BvaDispatchTask fill:#e78ac3
  11.BvaDispatchTask{{"11.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.JudgeDecisionReviewTask
1.JudgeDecisionReviewTask --> 2.AttorneyTask
2.AttorneyTask --> 3.ExtensionColocatedTask
3.ExtensionColocatedTask --> 4.ExtensionColocatedTask
4.ExtensionColocatedTask --> 5.Task
5.Task --> 6.Task
0.RootTask --> 7.HearingRelatedMailTask
7.HearingRelatedMailTask --> 8.HearingRelatedMailTask
8.HearingRelatedMailTask --> 9.HearingRelatedMailTask
0.RootTask --> 10.BvaDispatchTask
10.BvaDispatchTask --> 11.BvaDispatchTask
{{< /mermaid >}}


### RTO.JDRTU.ATU.PRFCTO.PRFCTU.TO.TU

1 (20%) occurrences (example appeal IDs: [76])

Task Tree for appeal with ID 76
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.JudgeDecisionReviewTask fill:#e5c494
  1.JudgeDecisionReviewTask[["1.JudgeDecisionReviewTask\n(user)"]]
style 2.AttorneyTask fill:#ffb482
  2.AttorneyTask["2.AttorneyTask\n(user)"]
style 3.PreRoutingFoiaColocatedTask fill:#b088f4,stroke-dasharray: 5 5
  3.PreRoutingFoiaColocatedTask["3.PreRoutingFoiaColocatedTask\n(organization)"]
style 4.PreRoutingFoiaColocatedTask fill:#b088f4
  4.PreRoutingFoiaColocatedTask["4.PreRoutingFoiaColocatedTask\n(user)"]
style 5.Task fill:#9e8ef4,stroke-dasharray: 5 5
  5.Task["5.Task\n(organization)"]
style 6.Task fill:#9e8ef4,stroke:#00f,stroke-width:4px
  6.Task["6.Task\n(user)"]
style 7.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  7.BvaDispatchTask{{"7.BvaDispatchTask\n(organization)"}}
style 8.BvaDispatchTask fill:#e78ac3
  8.BvaDispatchTask{{"8.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.JudgeDecisionReviewTask
1.JudgeDecisionReviewTask --> 2.AttorneyTask
2.AttorneyTask --> 3.PreRoutingFoiaColocatedTask
3.PreRoutingFoiaColocatedTask --> 4.PreRoutingFoiaColocatedTask
4.PreRoutingFoiaColocatedTask --> 5.Task
5.Task --> 6.Task
0.RootTask --> 7.BvaDispatchTask
7.BvaDispatchTask --> 8.BvaDispatchTask
{{< /mermaid >}}


### RTO.IHPTO.JDRTU.ATU.PRFCTO.TO.TU

1 (20%) occurrences (example appeal IDs: [409])

Task Tree for appeal with ID 409
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
style 7.Task fill:#9e8ef4,stroke:#00f,stroke-width:4px
  7.Task["7.Task\n(user)"]
style 8.PreRoutingFoiaColocatedTask fill:#b088f4
  8.PreRoutingFoiaColocatedTask["8.PreRoutingFoiaColocatedTask\n(user)"]
style 9.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  9.BvaDispatchTask{{"9.BvaDispatchTask\n(organization)"}}
style 10.BvaDispatchTask fill:#e78ac3
  10.BvaDispatchTask{{"10.BvaDispatchTask\n(user)"}}
style 11.JudgeDispatchReturnTask fill:#d08f32
  11.JudgeDispatchReturnTask["11.JudgeDispatchReturnTask\n(user)"]
style 12.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  12.TrackVeteranTask(["12.TrackVeteranTask\n(organization)"])
style 13.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  13.InformalHearingPresentationTask[/"13.InformalHearingPresentationTask\n(organization)"\]
style 14.InformalHearingPresentationTask fill:#a1c9f4
  14.InformalHearingPresentationTask[/"14.InformalHearingPresentationTask\n(user)"\]
style 15.ClearAndUnmistakeableErrorMailTask fill:#7899f4,stroke-dasharray: 5 5
  15.ClearAndUnmistakeableErrorMailTask["15.ClearAndUnmistakeableErrorMailTask\n(organization)"]
style 16.ClearAndUnmistakeableErrorMailTask fill:#7899f4,stroke-dasharray: 5 5
  16.ClearAndUnmistakeableErrorMailTask["16.ClearAndUnmistakeableErrorMailTask\n(organization)"]
style 17.ClearAndUnmistakeableErrorMailTask fill:#7899f4
  17.ClearAndUnmistakeableErrorMailTask["17.ClearAndUnmistakeableErrorMailTask\n(user)"]
style 18.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  18.AodMotionMailTask["18.AodMotionMailTask\n(organization)"]
style 19.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  19.AodMotionMailTask["19.AodMotionMailTask\n(organization)"]
style 20.AodMotionMailTask fill:#fffea3
  20.AodMotionMailTask["20.AodMotionMailTask\n(user)"]
style 21.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  21.ReconsiderationMotionMailTask["21.ReconsiderationMotionMailTask\n(organization)"]
style 22.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  22.ReconsiderationMotionMailTask["22.ReconsiderationMotionMailTask\n(organization)"]
style 23.ReconsiderationMotionMailTask fill:#e08632
  23.ReconsiderationMotionMailTask["23.ReconsiderationMotionMailTask\n(user)"]
style 24.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  24.EvidenceOrArgumentMailTask["24.EvidenceOrArgumentMailTask\n(organization)"]
style 25.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  25.EvidenceOrArgumentMailTask["25.EvidenceOrArgumentMailTask\n(organization)"]
style 26.EvidenceOrArgumentMailTask fill:#ff9f9b
  26.EvidenceOrArgumentMailTask["26.EvidenceOrArgumentMailTask\n(user)"]
style 27.EvidenceOrArgumentMailTask fill:#ff9f9b
  27.EvidenceOrArgumentMailTask["27.EvidenceOrArgumentMailTask\n(user)"]
style 28.ClearAndUnmistakeableErrorMailTask fill:#7899f4,stroke-dasharray: 5 5
  28.ClearAndUnmistakeableErrorMailTask["28.ClearAndUnmistakeableErrorMailTask\n(organization)"]
style 29.ClearAndUnmistakeableErrorMailTask fill:#7899f4,stroke-dasharray: 5 5
  29.ClearAndUnmistakeableErrorMailTask["29.ClearAndUnmistakeableErrorMailTask\n(organization)"]
style 30.ClearAndUnmistakeableErrorMailTask fill:#7899f4
  30.ClearAndUnmistakeableErrorMailTask["30.ClearAndUnmistakeableErrorMailTask\n(user)"]
style 31.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  31.ReconsiderationMotionMailTask["31.ReconsiderationMotionMailTask\n(organization)"]
style 32.ReconsiderationMotionMailTask fill:#e08632,stroke-dasharray: 5 5
  32.ReconsiderationMotionMailTask["32.ReconsiderationMotionMailTask\n(organization)"]
style 33.ReconsiderationMotionMailTask fill:#e08632
  33.ReconsiderationMotionMailTask["33.ReconsiderationMotionMailTask\n(user)"]
style 34.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  34.AodMotionMailTask["34.AodMotionMailTask\n(organization)"]
style 35.AodMotionMailTask fill:#fffea3,stroke-dasharray: 5 5
  35.AodMotionMailTask["35.AodMotionMailTask\n(organization)"]
style 36.AodMotionMailTask fill:#fffea3
  36.AodMotionMailTask["36.AodMotionMailTask\n(user)"]
style 37.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  37.EvidenceOrArgumentMailTask["37.EvidenceOrArgumentMailTask\n(organization)"]
style 38.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  38.EvidenceOrArgumentMailTask["38.EvidenceOrArgumentMailTask\n(organization)"]
style 39.EvidenceOrArgumentMailTask fill:#ff9f9b
  39.EvidenceOrArgumentMailTask["39.EvidenceOrArgumentMailTask\n(user)"]
style 40.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  40.EvidenceOrArgumentMailTask["40.EvidenceOrArgumentMailTask\n(organization)"]
style 41.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  41.EvidenceOrArgumentMailTask["41.EvidenceOrArgumentMailTask\n(organization)"]
style 42.EvidenceOrArgumentMailTask fill:#ff9f9b
  42.EvidenceOrArgumentMailTask["42.EvidenceOrArgumentMailTask\n(user)"]

0.RootTask --> 1.InformalHearingPresentationTask
0.RootTask --> 2.JudgeDecisionReviewTask
2.JudgeDecisionReviewTask --> 3.AttorneyTask
3.AttorneyTask --> 4.PreRoutingFoiaColocatedTask
4.PreRoutingFoiaColocatedTask --> 5.PreRoutingFoiaColocatedTask
5.PreRoutingFoiaColocatedTask --> 6.Task
6.Task --> 7.Task
4.PreRoutingFoiaColocatedTask --> 8.PreRoutingFoiaColocatedTask
0.RootTask --> 9.BvaDispatchTask
9.BvaDispatchTask --> 10.BvaDispatchTask
10.BvaDispatchTask --> 11.JudgeDispatchReturnTask
0.RootTask --> 12.TrackVeteranTask
0.RootTask --> 13.InformalHearingPresentationTask
13.InformalHearingPresentationTask --> 14.InformalHearingPresentationTask
0.RootTask --> 15.ClearAndUnmistakeableErrorMailTask
15.ClearAndUnmistakeableErrorMailTask --> 16.ClearAndUnmistakeableErrorMailTask
16.ClearAndUnmistakeableErrorMailTask --> 17.ClearAndUnmistakeableErrorMailTask
0.RootTask --> 18.AodMotionMailTask
18.AodMotionMailTask --> 19.AodMotionMailTask
19.AodMotionMailTask --> 20.AodMotionMailTask
0.RootTask --> 21.ReconsiderationMotionMailTask
21.ReconsiderationMotionMailTask --> 22.ReconsiderationMotionMailTask
22.ReconsiderationMotionMailTask --> 23.ReconsiderationMotionMailTask
0.RootTask --> 24.EvidenceOrArgumentMailTask
24.EvidenceOrArgumentMailTask --> 25.EvidenceOrArgumentMailTask
25.EvidenceOrArgumentMailTask --> 26.EvidenceOrArgumentMailTask
25.EvidenceOrArgumentMailTask --> 27.EvidenceOrArgumentMailTask
0.RootTask --> 28.ClearAndUnmistakeableErrorMailTask
28.ClearAndUnmistakeableErrorMailTask --> 29.ClearAndUnmistakeableErrorMailTask
29.ClearAndUnmistakeableErrorMailTask --> 30.ClearAndUnmistakeableErrorMailTask
0.RootTask --> 31.ReconsiderationMotionMailTask
31.ReconsiderationMotionMailTask --> 32.ReconsiderationMotionMailTask
32.ReconsiderationMotionMailTask --> 33.ReconsiderationMotionMailTask
0.RootTask --> 34.AodMotionMailTask
34.AodMotionMailTask --> 35.AodMotionMailTask
35.AodMotionMailTask --> 36.AodMotionMailTask
0.RootTask --> 37.EvidenceOrArgumentMailTask
37.EvidenceOrArgumentMailTask --> 38.EvidenceOrArgumentMailTask
38.EvidenceOrArgumentMailTask --> 39.EvidenceOrArgumentMailTask
0.RootTask --> 40.EvidenceOrArgumentMailTask
40.EvidenceOrArgumentMailTask --> 41.EvidenceOrArgumentMailTask
41.EvidenceOrArgumentMailTask --> 42.EvidenceOrArgumentMailTask
{{< /mermaid >}}


### RTO.IHPTO.JDRTU.ATU.PRFCTO.PRFCTU.TO.TU

1 (20%) occurrences (example appeal IDs: [319])

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
style 7.Task fill:#9e8ef4,stroke:#00f,stroke-width:4px
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
style 17.AttorneyDispatchReturnTask fill:#aa8af4
  17.AttorneyDispatchReturnTask["17.AttorneyDispatchReturnTask\n(user)"]
style 18.JudgeDispatchReturnTask fill:#d08f32
  18.JudgeDispatchReturnTask["18.JudgeDispatchReturnTask\n(user)"]
style 19.JudgeDispatchReturnTask fill:#d08f32
  19.JudgeDispatchReturnTask["19.JudgeDispatchReturnTask\n(user)"]
style 20.AttorneyDispatchReturnTask fill:#aa8af4
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


### RTO.DTO.ESWTO.TVTO.OMMTO.OMMTO.OMMTU.TO.TU

1 (20%) occurrences (example appeal IDs: [16009])

Task Tree for appeal with ID 16009
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
style 4.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  4.TrackVeteranTask(["4.TrackVeteranTask\n(organization)"])
style 5.OtherMotionMailTask fill:#b69a32,stroke-dasharray: 5 5
  5.OtherMotionMailTask["5.OtherMotionMailTask\n(organization)"]
style 6.OtherMotionMailTask fill:#b69a32,stroke-dasharray: 5 5
  6.OtherMotionMailTask["6.OtherMotionMailTask\n(organization)"]
style 7.OtherMotionMailTask fill:#b69a32
  7.OtherMotionMailTask["7.OtherMotionMailTask\n(user)"]
style 8.Task fill:#9e8ef4,stroke-dasharray: 5 5
  8.Task["8.Task\n(organization)"]
style 9.Task fill:#9e8ef4,stroke:#00f,stroke-width:4px
  9.Task["9.Task\n(user)"]
style 10.JudgeAssignTask fill:#b3b3b3
  10.JudgeAssignTask[\"10.JudgeAssignTask\n(user)"/]
style 11.JudgeDecisionReviewTask fill:#e5c494
  11.JudgeDecisionReviewTask[["11.JudgeDecisionReviewTask\n(user)"]]
style 12.AttorneyTask fill:#ffb482
  12.AttorneyTask["12.AttorneyTask\n(user)"]
style 13.FoiaColocatedTask fill:#e58432,stroke-dasharray: 5 5
  13.FoiaColocatedTask["13.FoiaColocatedTask\n(organization)"]
style 14.FoiaTask fill:#f7727c,stroke-dasharray: 5 5
  14.FoiaTask["14.FoiaTask\n(organization)"]
style 15.FoiaTask fill:#f7727c
  15.FoiaTask["15.FoiaTask\n(user)"]
style 16.JudgeDecisionReviewTask fill:#e5c494
  16.JudgeDecisionReviewTask[["16.JudgeDecisionReviewTask\n(user)"]]
style 17.JudgeDecisionReviewTask fill:#e5c494
  17.JudgeDecisionReviewTask[["17.JudgeDecisionReviewTask\n(user)"]]
style 18.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(organization)"}}
style 19.BvaDispatchTask fill:#e78ac3
  19.BvaDispatchTask{{"19.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.TrackVeteranTask
0.RootTask --> 4.TrackVeteranTask
0.RootTask --> 5.OtherMotionMailTask
5.OtherMotionMailTask --> 6.OtherMotionMailTask
6.OtherMotionMailTask --> 7.OtherMotionMailTask
7.OtherMotionMailTask --> 8.Task
8.Task --> 9.Task
0.RootTask --> 10.JudgeAssignTask
0.RootTask --> 11.JudgeDecisionReviewTask
17.JudgeDecisionReviewTask --> 12.AttorneyTask
12.AttorneyTask --> 13.FoiaColocatedTask
13.FoiaColocatedTask --> 14.FoiaTask
14.FoiaTask --> 15.FoiaTask
0.RootTask --> 16.JudgeDecisionReviewTask
0.RootTask --> 17.JudgeDecisionReviewTask
0.RootTask --> 18.BvaDispatchTask
18.BvaDispatchTask --> 19.BvaDispatchTask
{{< /mermaid >}}


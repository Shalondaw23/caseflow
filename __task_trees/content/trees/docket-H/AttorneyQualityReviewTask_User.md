---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [hearing Tasks](tasklist.md) |

# AttorneyQualityReviewTask_User for hearing

[AttorneyQualityReviewTask_User description](../task_descr/AttorneyQualityReviewTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

AttorneyQualityReviewTask_User -- 1 --> MissingHearingTranscriptsColocatedTask_Organization
AttorneyQualityReviewTask_User -- 1 --> FoiaColocatedTask_Organization
JudgeQualityReviewTask_User -- 37 --> AttorneyQualityReviewTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [JudgeQualityReviewTask_User](JudgeQualityReviewTask_User.md): 37 times

**Child Tasks:**

   * [MissingHearingTranscriptsColocatedTask_Organization](MissingHearingTranscriptsColocatedTask_Organization.md): 1 times
   * [FoiaColocatedTask_Organization](FoiaColocatedTask_Organization.md): 1 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

AttorneyQualityReviewTask_User -- 29 --> BvaDispatchTask_Organization
AttorneyQualityReviewTask_User -- 3 --> AttorneyQualityReviewTask_User
AttorneyQualityReviewTask_User -- 2 --> JudgeQualityReviewTask_User
AttorneyQualityReviewTask_User -- 1 --> MissingHearingTranscriptsColocatedTask_Organization
AttorneyQualityReviewTask_User -- 1 --> FoiaColocatedTask_Organization
AttorneyQualityReviewTask_User -- 1 --> EvidenceOrArgumentMailTask_Organization
JudgeQualityReviewTask_User -- 32 --> AttorneyQualityReviewTask_User
AttorneyQualityReviewTask_User -- 3 --> AttorneyQualityReviewTask_User
QualityReviewTask_User -- 1 --> AttorneyQualityReviewTask_User
PrivacyActTask_User -- 1 --> AttorneyQualityReviewTask_User
{{< /mermaid >}}
**Before:**

   * [JudgeQualityReviewTask_User](JudgeQualityReviewTask_User.md): 32 times
   * [AttorneyQualityReviewTask_User](AttorneyQualityReviewTask_User.md): 3 times
   * [PrivacyActTask_User](PrivacyActTask_User.md): 1 times
   * [QualityReviewTask_User](QualityReviewTask_User.md): 1 times

**After:**

   * [BvaDispatchTask_Organization](BvaDispatchTask_Organization.md): 29 times
   * [AttorneyQualityReviewTask_User](AttorneyQualityReviewTask_User.md): 3 times
   * [JudgeQualityReviewTask_User](JudgeQualityReviewTask_User.md): 2 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 1 times
   * [MissingHearingTranscriptsColocatedTask_Organization](MissingHearingTranscriptsColocatedTask_Organization.md): 1 times
   * [FoiaColocatedTask_Organization](FoiaColocatedTask_Organization.md): 1 times

## Task Creation Sequences

There are 37 total occurrences of AttorneyQualityReviewTask_User among appeals in the hearing docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to AttorneyQualityReviewTask_User, sorted by frequency.

### RTO.TVTO.DTO.HTO.SHTO.AHDTO.TTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

2 (5%) occurrences (example appeal IDs: [50794, 43700])

Task Tree for appeal with ID 50794
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  6.TranscriptionTask["6.TranscriptionTask\n(organization)"]
style 7.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  7.EvidenceSubmissionWindowTask[/"7.EvidenceSubmissionWindowTask\n(organization)"/]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
style 11.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  11.QualityReviewTask[\"11.QualityReviewTask\n(organization)"\]
style 12.QualityReviewTask fill:#b9f2f0
  12.QualityReviewTask[\"12.QualityReviewTask\n(user)"\]
style 13.JudgeQualityReviewTask fill:#b09c32
  13.JudgeQualityReviewTask["13.JudgeQualityReviewTask\n(user)"]
style 14.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  14.AttorneyQualityReviewTask["14.AttorneyQualityReviewTask\n(user)"]
style 15.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(organization)"}}
style 16.BvaDispatchTask fill:#e78ac3
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
5.AssignHearingDispositionTask --> 6.TranscriptionTask
5.AssignHearingDispositionTask --> 7.EvidenceSubmissionWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.QualityReviewTask
11.QualityReviewTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.JudgeQualityReviewTask
13.JudgeQualityReviewTask --> 14.AttorneyQualityReviewTask
0.RootTask --> 15.BvaDispatchTask
15.BvaDispatchTask --> 16.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.SHTO.AHDTO.TTO.ESWTO.JATU.JDRTU.ATU.ARTU.QRTO.QRTU.JQRTU.AQRTU

2 (5%) occurrences (example appeal IDs: [76015, 22956])

Task Tree for appeal with ID 76015
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  6.TranscriptionTask["6.TranscriptionTask\n(organization)"]
style 7.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  7.EvidenceSubmissionWindowTask[/"7.EvidenceSubmissionWindowTask\n(organization)"/]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
style 11.AttorneyRewriteTask fill:#17becf
  11.AttorneyRewriteTask["11.AttorneyRewriteTask\n(user)"]
style 12.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  12.QualityReviewTask[\"12.QualityReviewTask\n(organization)"\]
style 13.QualityReviewTask fill:#b9f2f0
  13.QualityReviewTask[\"13.QualityReviewTask\n(user)"\]
style 14.JudgeQualityReviewTask fill:#b09c32
  14.JudgeQualityReviewTask["14.JudgeQualityReviewTask\n(user)"]
style 15.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  15.AttorneyQualityReviewTask["15.AttorneyQualityReviewTask\n(user)"]
style 16.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(organization)"}}
style 17.BvaDispatchTask fill:#e78ac3
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
5.AssignHearingDispositionTask --> 6.TranscriptionTask
5.AssignHearingDispositionTask --> 7.EvidenceSubmissionWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
9.JudgeDecisionReviewTask --> 11.AttorneyRewriteTask
0.RootTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.QualityReviewTask
13.QualityReviewTask --> 14.JudgeQualityReviewTask
14.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.SHTO.HTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [75])

Task Tree for appeal with ID 75
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  2.HearingTask[["2.HearingTask\n(organization)"]]
style 3.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  3.ScheduleHearingTask["3.ScheduleHearingTask\n(organization)"]
style 4.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  4.AssignHearingDispositionTask["4.AssignHearingDispositionTask\n(organization)"]
style 5.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  5.HearingTask[["5.HearingTask\n(organization)"]]
style 6.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  6.ScheduleHearingTask["6.ScheduleHearingTask\n(organization)"]
style 7.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  7.EvidenceSubmissionWindowTask[/"7.EvidenceSubmissionWindowTask\n(organization)"/]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
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
style 18.BvaDispatchTask fill:#e78ac3
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
2.HearingTask --> 4.AssignHearingDispositionTask
1.DistributionTask --> 5.HearingTask
5.HearingTask --> 6.ScheduleHearingTask
5.HearingTask --> 7.EvidenceSubmissionWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.QualityReviewTask
11.QualityReviewTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.JudgeQualityReviewTask
13.JudgeQualityReviewTask --> 14.AttorneyQualityReviewTask
13.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
16.BvaDispatchTask --> 18.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.SHTO.HTO.ESWTO.JATU.ATU.JDRTU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [84179])

Task Tree for appeal with ID 84179
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  6.HearingTask[["6.HearingTask\n(organization)"]]
style 7.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  7.ScheduleHearingTask["7.ScheduleHearingTask\n(organization)"]
style 8.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  8.EvidenceSubmissionWindowTask[/"8.EvidenceSubmissionWindowTask\n(organization)"/]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.JudgeDecisionReviewTask fill:#e5c494
  12.JudgeDecisionReviewTask[["12.JudgeDecisionReviewTask\n(user)"]]
style 13.JudgeDecisionReviewTask fill:#e5c494
  13.JudgeDecisionReviewTask[["13.JudgeDecisionReviewTask\n(user)"]]
style 14.JudgeDecisionReviewTask fill:#e5c494
  14.JudgeDecisionReviewTask[["14.JudgeDecisionReviewTask\n(user)"]]
style 15.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  15.QualityReviewTask[\"15.QualityReviewTask\n(organization)"\]
style 16.QualityReviewTask fill:#b9f2f0
  16.QualityReviewTask[\"16.QualityReviewTask\n(user)"\]
style 17.JudgeQualityReviewTask fill:#b09c32
  17.JudgeQualityReviewTask["17.JudgeQualityReviewTask\n(user)"]
style 18.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  18.AttorneyQualityReviewTask["18.AttorneyQualityReviewTask\n(user)"]
style 19.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  19.BvaDispatchTask{{"19.BvaDispatchTask\n(organization)"}}
style 20.BvaDispatchTask fill:#e78ac3
  20.BvaDispatchTask{{"20.BvaDispatchTask\n(user)"}}
style 21.JudgeDispatchReturnTask fill:#d08f32
  21.JudgeDispatchReturnTask["21.JudgeDispatchReturnTask\n(user)"]
style 22.JudgeDispatchReturnTask fill:#d08f32
  22.JudgeDispatchReturnTask["22.JudgeDispatchReturnTask\n(user)"]
style 23.AttorneyDispatchReturnTask fill:#aa8af4
  23.AttorneyDispatchReturnTask["23.AttorneyDispatchReturnTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
2.DistributionTask --> 6.HearingTask
6.HearingTask --> 7.ScheduleHearingTask
6.HearingTask --> 8.EvidenceSubmissionWindowTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
14.JudgeDecisionReviewTask --> 11.AttorneyTask
0.RootTask --> 12.JudgeDecisionReviewTask
0.RootTask --> 13.JudgeDecisionReviewTask
0.RootTask --> 14.JudgeDecisionReviewTask
0.RootTask --> 15.QualityReviewTask
15.QualityReviewTask --> 16.QualityReviewTask
16.QualityReviewTask --> 17.JudgeQualityReviewTask
17.JudgeQualityReviewTask --> 18.AttorneyQualityReviewTask
0.RootTask --> 19.BvaDispatchTask
19.BvaDispatchTask --> 20.BvaDispatchTask
20.BvaDispatchTask --> 21.JudgeDispatchReturnTask
20.BvaDispatchTask --> 22.JudgeDispatchReturnTask
22.JudgeDispatchReturnTask --> 23.AttorneyDispatchReturnTask
{{< /mermaid >}}


### RTO.DTO.SHTO.HTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [75])

Task Tree for appeal with ID 75
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  2.HearingTask[["2.HearingTask\n(organization)"]]
style 3.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  3.ScheduleHearingTask["3.ScheduleHearingTask\n(organization)"]
style 4.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  4.AssignHearingDispositionTask["4.AssignHearingDispositionTask\n(organization)"]
style 5.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  5.HearingTask[["5.HearingTask\n(organization)"]]
style 6.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  6.ScheduleHearingTask["6.ScheduleHearingTask\n(organization)"]
style 7.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  7.EvidenceSubmissionWindowTask[/"7.EvidenceSubmissionWindowTask\n(organization)"/]
style 8.JudgeAssignTask fill:#b3b3b3
  8.JudgeAssignTask[\"8.JudgeAssignTask\n(user)"/]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]
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
style 18.BvaDispatchTask fill:#e78ac3
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
2.HearingTask --> 4.AssignHearingDispositionTask
1.DistributionTask --> 5.HearingTask
5.HearingTask --> 6.ScheduleHearingTask
5.HearingTask --> 7.EvidenceSubmissionWindowTask
0.RootTask --> 8.JudgeAssignTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
0.RootTask --> 11.QualityReviewTask
11.QualityReviewTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.JudgeQualityReviewTask
13.JudgeQualityReviewTask --> 14.AttorneyQualityReviewTask
13.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
16.BvaDispatchTask --> 18.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.SHTO.AHDTO.TTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [74507])

Task Tree for appeal with ID 74507
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  6.TranscriptionTask["6.TranscriptionTask\n(organization)"]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.JudgeDecisionReviewTask fill:#e5c494
  8.JudgeDecisionReviewTask[["8.JudgeDecisionReviewTask\n(user)"]]
style 9.AttorneyTask fill:#ffb482
  9.AttorneyTask["9.AttorneyTask\n(user)"]
style 10.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  10.QualityReviewTask[\"10.QualityReviewTask\n(organization)"\]
style 11.QualityReviewTask fill:#b9f2f0
  11.QualityReviewTask[\"11.QualityReviewTask\n(user)"\]
style 12.JudgeQualityReviewTask fill:#b09c32
  12.JudgeQualityReviewTask["12.JudgeQualityReviewTask\n(user)"]
style 13.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  13.AttorneyQualityReviewTask["13.AttorneyQualityReviewTask\n(user)"]
style 14.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  14.BvaDispatchTask{{"14.BvaDispatchTask\n(organization)"}}
style 15.BvaDispatchTask fill:#e78ac3
  15.BvaDispatchTask{{"15.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
5.AssignHearingDispositionTask --> 6.TranscriptionTask
0.RootTask --> 7.JudgeAssignTask
0.RootTask --> 8.JudgeDecisionReviewTask
8.JudgeDecisionReviewTask --> 9.AttorneyTask
0.RootTask --> 10.QualityReviewTask
10.QualityReviewTask --> 11.QualityReviewTask
11.QualityReviewTask --> 12.JudgeQualityReviewTask
12.JudgeQualityReviewTask --> 13.AttorneyQualityReviewTask
0.RootTask --> 14.BvaDispatchTask
14.BvaDispatchTask --> 15.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.SHTO.HTO.AHDTO.TTO.JATU.JDRTU.ATU.TVTO.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [21440])

Task Tree for appeal with ID 21440
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  6.HearingTask[["6.HearingTask\n(organization)"]]
style 7.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  7.AssignHearingDispositionTask["7.AssignHearingDispositionTask\n(organization)"]
style 8.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  8.TranscriptionTask["8.TranscriptionTask\n(organization)"]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  12.TrackVeteranTask(["12.TrackVeteranTask\n(organization)"])
style 13.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  13.QualityReviewTask[\"13.QualityReviewTask\n(organization)"\]
style 14.QualityReviewTask fill:#b9f2f0
  14.QualityReviewTask[\"14.QualityReviewTask\n(user)"\]
style 15.JudgeQualityReviewTask fill:#b09c32
  15.JudgeQualityReviewTask["15.JudgeQualityReviewTask\n(user)"]
style 16.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  16.AttorneyQualityReviewTask["16.AttorneyQualityReviewTask\n(user)"]
style 17.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(organization)"}}
style 18.BvaDispatchTask fill:#e78ac3
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
2.DistributionTask --> 6.HearingTask
6.HearingTask --> 7.AssignHearingDispositionTask
7.AssignHearingDispositionTask --> 8.TranscriptionTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
10.JudgeDecisionReviewTask --> 11.AttorneyTask
0.RootTask --> 12.TrackVeteranTask
0.RootTask --> 13.QualityReviewTask
13.QualityReviewTask --> 14.QualityReviewTask
14.QualityReviewTask --> 15.JudgeQualityReviewTask
15.JudgeQualityReviewTask --> 16.AttorneyQualityReviewTask
0.RootTask --> 17.BvaDispatchTask
17.BvaDispatchTask --> 18.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.SHTO.HTO.AHDTO.TTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [97918])

Task Tree for appeal with ID 97918
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  6.HearingTask[["6.HearingTask\n(organization)"]]
style 7.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  7.AssignHearingDispositionTask["7.AssignHearingDispositionTask\n(organization)"]
style 8.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  8.TranscriptionTask["8.TranscriptionTask\n(organization)"]
style 9.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  9.EvidenceSubmissionWindowTask[/"9.EvidenceSubmissionWindowTask\n(organization)"/]
style 10.JudgeAssignTask fill:#b3b3b3
  10.JudgeAssignTask[\"10.JudgeAssignTask\n(user)"/]
style 11.JudgeDecisionReviewTask fill:#e5c494
  11.JudgeDecisionReviewTask[["11.JudgeDecisionReviewTask\n(user)"]]
style 12.AttorneyTask fill:#ffb482
  12.AttorneyTask["12.AttorneyTask\n(user)"]
style 13.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  13.QualityReviewTask[\"13.QualityReviewTask\n(organization)"\]
style 14.QualityReviewTask fill:#b9f2f0
  14.QualityReviewTask[\"14.QualityReviewTask\n(user)"\]
style 15.JudgeQualityReviewTask fill:#b09c32
  15.JudgeQualityReviewTask["15.JudgeQualityReviewTask\n(user)"]
style 16.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  16.AttorneyQualityReviewTask["16.AttorneyQualityReviewTask\n(user)"]
style 17.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(organization)"}}
style 18.BvaDispatchTask fill:#e78ac3
  18.BvaDispatchTask{{"18.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
2.DistributionTask --> 6.HearingTask
6.HearingTask --> 7.AssignHearingDispositionTask
7.AssignHearingDispositionTask --> 8.TranscriptionTask
7.AssignHearingDispositionTask --> 9.EvidenceSubmissionWindowTask
0.RootTask --> 10.JudgeAssignTask
0.RootTask --> 11.JudgeDecisionReviewTask
11.JudgeDecisionReviewTask --> 12.AttorneyTask
0.RootTask --> 13.QualityReviewTask
13.QualityReviewTask --> 14.QualityReviewTask
14.QualityReviewTask --> 15.JudgeQualityReviewTask
15.JudgeQualityReviewTask --> 16.AttorneyQualityReviewTask
0.RootTask --> 17.BvaDispatchTask
17.BvaDispatchTask --> 18.BvaDispatchTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.TVTO.AHDTO.TTO.ESWTO.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [267])

Task Tree for appeal with ID 267
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  1.InformalHearingPresentationTask[/"1.InformalHearingPresentationTask\n(organization)"\]
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  5.TrackVeteranTask(["5.TrackVeteranTask\n(organization)"])
style 6.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  6.AssignHearingDispositionTask["6.AssignHearingDispositionTask\n(organization)"]
style 7.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  7.TranscriptionTask["7.TranscriptionTask\n(organization)"]
style 8.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  8.EvidenceSubmissionWindowTask[/"8.EvidenceSubmissionWindowTask\n(organization)"/]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  12.QualityReviewTask[\"12.QualityReviewTask\n(organization)"\]
style 13.QualityReviewTask fill:#b9f2f0
  13.QualityReviewTask[\"13.QualityReviewTask\n(user)"\]
style 14.JudgeQualityReviewTask fill:#b09c32
  14.JudgeQualityReviewTask["14.JudgeQualityReviewTask\n(user)"]
style 15.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  15.AttorneyQualityReviewTask["15.AttorneyQualityReviewTask\n(user)"]
style 16.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(organization)"}}
style 17.BvaDispatchTask fill:#e78ac3
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(user)"}}

2.DistributionTask --> 1.InformalHearingPresentationTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
0.RootTask --> 5.TrackVeteranTask
3.HearingTask --> 6.AssignHearingDispositionTask
6.AssignHearingDispositionTask --> 7.TranscriptionTask
6.AssignHearingDispositionTask --> 8.EvidenceSubmissionWindowTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
10.JudgeDecisionReviewTask --> 11.AttorneyTask
0.RootTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.QualityReviewTask
13.QualityReviewTask --> 14.JudgeQualityReviewTask
14.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.SHTO.AHDTO.ESWTO.ESWTU.JATU.JDRTU.ATU.QRTO.QRTU.JQRTU.AQRTU

1 (3%) occurrences (example appeal IDs: [17111])

Task Tree for appeal with ID 17111
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  1.TrackVeteranTask(["1.TrackVeteranTask\n(organization)"])
style 2.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  2.DistributionTask>"2.DistributionTask\n(organization)"]
style 3.HearingTask fill:#a6d854,stroke-dasharray: 5 5
  3.HearingTask[["3.HearingTask\n(organization)"]]
style 4.ScheduleHearingTask fill:#ffd92f,stroke-dasharray: 5 5
  4.ScheduleHearingTask["4.ScheduleHearingTask\n(organization)"]
style 5.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  5.AssignHearingDispositionTask["5.AssignHearingDispositionTask\n(organization)"]
style 6.ChangeHearingDispositionTask fill:#d88b32,stroke-dasharray: 5 5
  6.ChangeHearingDispositionTask["6.ChangeHearingDispositionTask\n(organization)"]
style 7.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  7.EvidenceSubmissionWindowTask[/"7.EvidenceSubmissionWindowTask\n(organization)"/]
style 8.EvidenceSubmissionWindowTask fill:#8de5a1
  8.EvidenceSubmissionWindowTask[/"8.EvidenceSubmissionWindowTask\n(user)"/]
style 9.JudgeAssignTask fill:#b3b3b3
  9.JudgeAssignTask[\"9.JudgeAssignTask\n(user)"/]
style 10.JudgeDecisionReviewTask fill:#e5c494
  10.JudgeDecisionReviewTask[["10.JudgeDecisionReviewTask\n(user)"]]
style 11.AttorneyTask fill:#ffb482
  11.AttorneyTask["11.AttorneyTask\n(user)"]
style 12.QualityReviewTask fill:#b9f2f0,stroke-dasharray: 5 5
  12.QualityReviewTask[\"12.QualityReviewTask\n(organization)"\]
style 13.QualityReviewTask fill:#b9f2f0
  13.QualityReviewTask[\"13.QualityReviewTask\n(user)"\]
style 14.JudgeQualityReviewTask fill:#b09c32
  14.JudgeQualityReviewTask["14.JudgeQualityReviewTask\n(user)"]
style 15.AttorneyQualityReviewTask fill:#9ea231,stroke:#00f,stroke-width:4px
  15.AttorneyQualityReviewTask["15.AttorneyQualityReviewTask\n(user)"]
style 16.BvaDispatchTask fill:#e78ac3,stroke-dasharray: 5 5
  16.BvaDispatchTask{{"16.BvaDispatchTask\n(organization)"}}
style 17.BvaDispatchTask fill:#e78ac3
  17.BvaDispatchTask{{"17.BvaDispatchTask\n(user)"}}

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
3.HearingTask --> 5.AssignHearingDispositionTask
3.HearingTask --> 6.ChangeHearingDispositionTask
2.DistributionTask --> 7.EvidenceSubmissionWindowTask
7.EvidenceSubmissionWindowTask --> 8.EvidenceSubmissionWindowTask
0.RootTask --> 9.JudgeAssignTask
0.RootTask --> 10.JudgeDecisionReviewTask
10.JudgeDecisionReviewTask --> 11.AttorneyTask
0.RootTask --> 12.QualityReviewTask
12.QualityReviewTask --> 13.QualityReviewTask
13.QualityReviewTask --> 14.JudgeQualityReviewTask
14.JudgeQualityReviewTask --> 15.AttorneyQualityReviewTask
0.RootTask --> 16.BvaDispatchTask
16.BvaDispatchTask --> 17.BvaDispatchTask
{{< /mermaid >}}


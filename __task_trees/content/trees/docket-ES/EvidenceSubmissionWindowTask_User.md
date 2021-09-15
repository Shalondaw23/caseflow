---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [evidence_submission Tasks](tasklist.md) |

# EvidenceSubmissionWindowTask_User for evidence_submission

[EvidenceSubmissionWindowTask_User description](../task_descr/EvidenceSubmissionWindowTask_User.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

EvidenceSubmissionWindowTask_Organization -- 659 --> EvidenceSubmissionWindowTask_User
{{< /mermaid >}}
**Parent Tasks:**

   * [EvidenceSubmissionWindowTask_Organization](EvidenceSubmissionWindowTask_Organization.md): 659 times

**Child Tasks:**

   * (No child tasks)

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

EvidenceSubmissionWindowTask_User -- 136 --> InformalHearingPresentationTask_Organization
EvidenceSubmissionWindowTask_User -- 70 --> JudgeAssignTask_User
EvidenceSubmissionWindowTask_User -- 50 --> EvidenceOrArgumentMailTask_Organization
EvidenceSubmissionWindowTask_User -- 47 --> TrackVeteranTask_Organization
EvidenceSubmissionWindowTask_User -- 8 --> AodMotionMailTask_Organization
EvidenceSubmissionWindowTask_User -- 5 --> TranslationTask_User
EvidenceSubmissionWindowTask_User -- 4 --> StatusInquiryMailTask_Organization
EvidenceSubmissionWindowTask_User -- 3 --> SpecialCaseMovementTask_User
EvidenceSubmissionWindowTask_User -- 3 --> PowerOfAttorneyRelatedMailTask_Organization
EvidenceSubmissionWindowTask_User -- 3 --> HearingRelatedMailTask_Organization
EvidenceSubmissionWindowTask_User -- 3 --> ExtensionRequestMailTask_Organization
EvidenceSubmissionWindowTask_User -- 2 --> FoiaRequestMailTask_Organization
EvidenceSubmissionWindowTask_User -- 2 --> CongressionalInterestMailTask_Organization
EvidenceSubmissionWindowTask_User -- 1 --> TimedHoldTask_User
EvidenceSubmissionWindowTask_User -- 1 --> InformalHearingPresentationTask_User
EvidenceSubmissionWindowTask_User -- 1 --> EvidenceOrArgumentMailTask_User
EvidenceSubmissionWindowTask_User -- 1 --> AppealWithdrawalMailTask_Organization
EvidenceSubmissionWindowTask_Organization -- 640 --> EvidenceSubmissionWindowTask_User
TranslationTask_Organization -- 6 --> EvidenceSubmissionWindowTask_User
VeteranRecordRequest_Organization -- 5 --> EvidenceSubmissionWindowTask_User
InformalHearingPresentationTask_Organization -- 2 --> EvidenceSubmissionWindowTask_User
EvidenceOrArgumentMailTask_Organization -- 2 --> EvidenceSubmissionWindowTask_User
TranslationTask_User -- 1 --> EvidenceSubmissionWindowTask_User
TrackVeteranTask_Organization -- 1 --> EvidenceSubmissionWindowTask_User
AodMotionMailTask_User -- 1 --> EvidenceSubmissionWindowTask_User
AodMotionMailTask_Organization -- 1 --> EvidenceSubmissionWindowTask_User
{{< /mermaid >}}
**Before:**

   * [EvidenceSubmissionWindowTask_Organization](EvidenceSubmissionWindowTask_Organization.md): 640 times
   * [TranslationTask_Organization](TranslationTask_Organization.md): 6 times
   * [VeteranRecordRequest_Organization](VeteranRecordRequest_Organization.md): 5 times
   * [InformalHearingPresentationTask_Organization](InformalHearingPresentationTask_Organization.md): 2 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 2 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 1 times
   * [AodMotionMailTask_User](AodMotionMailTask_User.md): 1 times
   * [AodMotionMailTask_Organization](AodMotionMailTask_Organization.md): 1 times
   * [TranslationTask_User](TranslationTask_User.md): 1 times

**After:**

   * [InformalHearingPresentationTask_Organization](InformalHearingPresentationTask_Organization.md): 136 times
   * [JudgeAssignTask_User](JudgeAssignTask_User.md): 70 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 50 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 47 times
   * [AodMotionMailTask_Organization](AodMotionMailTask_Organization.md): 8 times
   * [TranslationTask_User](TranslationTask_User.md): 5 times
   * [StatusInquiryMailTask_Organization](StatusInquiryMailTask_Organization.md): 4 times
   * [ExtensionRequestMailTask_Organization](ExtensionRequestMailTask_Organization.md): 3 times
   * [PowerOfAttorneyRelatedMailTask_Organization](PowerOfAttorneyRelatedMailTask_Organization.md): 3 times
   * [HearingRelatedMailTask_Organization](HearingRelatedMailTask_Organization.md): 3 times
   * [SpecialCaseMovementTask_User](SpecialCaseMovementTask_User.md): 3 times
   * [CongressionalInterestMailTask_Organization](CongressionalInterestMailTask_Organization.md): 2 times
   * [FoiaRequestMailTask_Organization](FoiaRequestMailTask_Organization.md): 2 times
   * [TimedHoldTask_User](TimedHoldTask_User.md): 1 times
   * [AppealWithdrawalMailTask_Organization](AppealWithdrawalMailTask_Organization.md): 1 times
   * [InformalHearingPresentationTask_User](InformalHearingPresentationTask_User.md): 1 times
   * [EvidenceOrArgumentMailTask_User](EvidenceOrArgumentMailTask_User.md): 1 times

## Task Creation Sequences

There are 659 total occurrences of EvidenceSubmissionWindowTask_User among appeals in the evidence_submission docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to EvidenceSubmissionWindowTask_User, sorted by frequency.

### RTO.TVTO.DTO.ESWTO.ESWTU

379 (58%) occurrences (example appeal IDs: [84815, 83913, 83912, 83915, 83916])

Task Tree for appeal with ID 84815
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
style 4.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  4.EvidenceSubmissionWindowTask[/"4.EvidenceSubmissionWindowTask\n(user)"/]
style 5.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  5.TrackVeteranTask(["5.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
3.EvidenceSubmissionWindowTask --> 4.EvidenceSubmissionWindowTask
0.RootTask --> 5.TrackVeteranTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.ESWTU

249 (38%) occurrences (example appeal IDs: [88247, 85336, 83911, 83920, 74973])

Task Tree for appeal with ID 88247
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(user)"/]
style 4.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  4.EvidenceOrArgumentMailTask["4.EvidenceOrArgumentMailTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
2.EvidenceSubmissionWindowTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.EvidenceOrArgumentMailTask
{{< /mermaid >}}


### ESWTO.ESWTU

11 (2%) occurrences (example appeal IDs: [87502, 89465, 87344, 89515, 83627])

Task Tree for appeal with ID 87502
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  3.EvidenceSubmissionWindowTask[/"3.EvidenceSubmissionWindowTask\n(user)"/]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
2.EvidenceSubmissionWindowTask --> 3.EvidenceSubmissionWindowTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.TTO.ESWTU

6 (1%) occurrences (example appeal IDs: [84100, 88092, 86191, 96397, 79317])

Task Tree for appeal with ID 84100
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.TranslationTask fill:#bcbd22,stroke-dasharray: 5 5
  3.TranslationTask["3.TranslationTask\n(organization)"]
style 4.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  4.EvidenceSubmissionWindowTask[/"4.EvidenceSubmissionWindowTask\n(user)"/]
style 5.TranslationTask fill:#bcbd22
  5.TranslationTask["5.TranslationTask\n(user)"]
style 6.TranslationTask fill:#bcbd22
  6.TranslationTask["6.TranslationTask\n(user)"]
style 7.TimedHoldTask fill:#fab0e4
  7.TimedHoldTask["7.TimedHoldTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
1.DistributionTask --> 3.TranslationTask
2.EvidenceSubmissionWindowTask --> 4.EvidenceSubmissionWindowTask
3.TranslationTask --> 5.TranslationTask
3.TranslationTask --> 6.TranslationTask
6.TranslationTask --> 7.TimedHoldTask
{{< /mermaid >}}


### RTO.TVTO.DTO.ESWTO.VRRO.ESWTU

4 (1%) occurrences (example appeal IDs: [77213, 84652, 83925, 96806])

Task Tree for appeal with ID 77213
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
style 4.VeteranRecordRequest fill:#f7736e,stroke-dasharray: 5 5
  4.VeteranRecordRequest["4.VeteranRecordRequest\n(organization)"]
style 5.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  5.EvidenceSubmissionWindowTask[/"5.EvidenceSubmissionWindowTask\n(user)"/]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.VeteranRecordRequest
3.EvidenceSubmissionWindowTask --> 5.EvidenceSubmissionWindowTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.TVTO.IHPTO.ESWTU

2 (0%) occurrences (example appeal IDs: [75905, 83927])

Task Tree for appeal with ID 75905
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
style 4.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  4.TrackVeteranTask(["4.TrackVeteranTask\n(organization)"])
style 5.InformalHearingPresentationTask fill:#a1c9f4,stroke-dasharray: 5 5
  5.InformalHearingPresentationTask[/"5.InformalHearingPresentationTask\n(organization)"\]
style 6.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  6.EvidenceSubmissionWindowTask[/"6.EvidenceSubmissionWindowTask\n(user)"/]
style 7.InformalHearingPresentationTask fill:#a1c9f4
  7.InformalHearingPresentationTask[/"7.InformalHearingPresentationTask\n(user)"\]
style 8.InformalHearingPresentationTask fill:#a1c9f4
  8.InformalHearingPresentationTask[/"8.InformalHearingPresentationTask\n(user)"\]
style 9.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  9.TrackVeteranTask(["9.TrackVeteranTask\n(organization)"])
style 10.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  10.TrackVeteranTask(["10.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
0.RootTask --> 4.TrackVeteranTask
0.RootTask --> 5.InformalHearingPresentationTask
3.EvidenceSubmissionWindowTask --> 6.EvidenceSubmissionWindowTask
5.InformalHearingPresentationTask --> 7.InformalHearingPresentationTask
5.InformalHearingPresentationTask --> 8.InformalHearingPresentationTask
0.RootTask --> 9.TrackVeteranTask
0.RootTask --> 10.TrackVeteranTask
{{< /mermaid >}}


### DTO.ESWTO.ESWTU

1 (0%) occurrences (example appeal IDs: [30591])

Task Tree for appeal with ID 30591
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
style 4.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  4.EvidenceSubmissionWindowTask[/"4.EvidenceSubmissionWindowTask\n(user)"/]
style 5.JudgeAssignTask fill:#b3b3b3
  5.JudgeAssignTask[\"5.JudgeAssignTask\n(user)"/]
style 6.JudgeDecisionReviewTask fill:#e5c494
  6.JudgeDecisionReviewTask[["6.JudgeDecisionReviewTask\n(user)"]]
style 7.AttorneyTask fill:#ffb482
  7.AttorneyTask["7.AttorneyTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.EvidenceSubmissionWindowTask
3.EvidenceSubmissionWindowTask --> 4.EvidenceSubmissionWindowTask
0.RootTask --> 5.JudgeAssignTask
0.RootTask --> 6.JudgeDecisionReviewTask
6.JudgeDecisionReviewTask --> 7.AttorneyTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.TVTO.ESWTU

1 (0%) occurrences (example appeal IDs: [92552])

Task Tree for appeal with ID 92552
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
style 4.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  4.EvidenceSubmissionWindowTask[/"4.EvidenceSubmissionWindowTask\n(user)"/]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.TrackVeteranTask
2.EvidenceSubmissionWindowTask --> 4.EvidenceSubmissionWindowTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.VRRO.ESWTU

1 (0%) occurrences (example appeal IDs: [89477])

Task Tree for appeal with ID 89477
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.VeteranRecordRequest fill:#f7736e,stroke-dasharray: 5 5
  3.VeteranRecordRequest["3.VeteranRecordRequest\n(organization)"]
style 4.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  4.EvidenceSubmissionWindowTask[/"4.EvidenceSubmissionWindowTask\n(user)"/]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
0.RootTask --> 3.VeteranRecordRequest
2.EvidenceSubmissionWindowTask --> 4.EvidenceSubmissionWindowTask
{{< /mermaid >}}


### RTO.DTO.ESWTO.TTO.TTU.ESWTU

1 (0%) occurrences (example appeal IDs: [76388])

Task Tree for appeal with ID 76388
{{< mermaid >}}
flowchart TD
style 0.RootTask fill:#eeeeee,stroke-dasharray: 5 5
  0.RootTask(["0.RootTask\n(organization)"])
style 1.DistributionTask fill:#dddddd,stroke-dasharray: 5 5
  1.DistributionTask>"1.DistributionTask\n(organization)"]
style 2.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  2.EvidenceSubmissionWindowTask[/"2.EvidenceSubmissionWindowTask\n(organization)"/]
style 3.TranslationTask fill:#bcbd22,stroke-dasharray: 5 5
  3.TranslationTask["3.TranslationTask\n(organization)"]
style 4.TranslationTask fill:#bcbd22
  4.TranslationTask["4.TranslationTask\n(user)"]
style 5.EvidenceSubmissionWindowTask fill:#8de5a1,stroke:#00f,stroke-width:4px
  5.EvidenceSubmissionWindowTask[/"5.EvidenceSubmissionWindowTask\n(user)"/]
style 6.TimedHoldTask fill:#fab0e4
  6.TimedHoldTask["6.TimedHoldTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.EvidenceSubmissionWindowTask
1.DistributionTask --> 3.TranslationTask
3.TranslationTask --> 4.TranslationTask
2.EvidenceSubmissionWindowTask --> 5.EvidenceSubmissionWindowTask
4.TranslationTask --> 6.TimedHoldTask
{{< /mermaid >}}


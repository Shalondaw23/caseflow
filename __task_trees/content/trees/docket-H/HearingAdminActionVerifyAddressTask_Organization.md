---
---
<!-- DO NOT EDIT THIS FILE.  This file is autogenerated. -->
| [All Tasks](../alltasks.md) | [hearing Tasks](tasklist.md) |

# HearingAdminActionVerifyAddressTask_Organization for hearing

[HearingAdminActionVerifyAddressTask_Organization description](../task_descr/HearingAdminActionVerifyAddressTask_Organization.md)

## Parent and Child Tasks

{{< mermaid >}}
flowchart LR

HearingAdminActionVerifyAddressTask_Organization -- 98 --> HearingAdminActionVerifyAddressTask_User
ScheduleHearingTask_Organization -- 389 --> HearingAdminActionVerifyAddressTask_Organization
{{< /mermaid >}}
**Parent Tasks:**

   * [ScheduleHearingTask_Organization](ScheduleHearingTask_Organization.md): 389 times

**Child Tasks:**

   * [HearingAdminActionVerifyAddressTask_User](HearingAdminActionVerifyAddressTask_User.md): 98 times

## Tasks Created Before and After

{{< mermaid >}}
flowchart LR

HearingAdminActionVerifyAddressTask_Organization -- 90 --> HearingAdminActionVerifyAddressTask_User
HearingAdminActionVerifyAddressTask_Organization -- 22 --> TrackVeteranTask_Organization
HearingAdminActionVerifyAddressTask_Organization -- 9 --> TranslationTask_User
HearingAdminActionVerifyAddressTask_Organization -- 6 --> EvidenceOrArgumentMailTask_Organization
HearingAdminActionVerifyAddressTask_Organization -- 3 --> HearingRelatedMailTask_Organization
HearingAdminActionVerifyAddressTask_Organization -- 2 --> AodMotionMailTask_Organization
HearingAdminActionVerifyAddressTask_Organization -- 1 --> PowerOfAttorneyRelatedMailTask_Organization
HearingAdminActionVerifyAddressTask_Organization -- 1 --> AddressChangeMailTask_Organization
ScheduleHearingTask_Organization -- 304 --> HearingAdminActionVerifyAddressTask_Organization
TrackVeteranTask_Organization -- 19 --> HearingAdminActionVerifyAddressTask_Organization
TranslationTask_Organization -- 14 --> HearingAdminActionVerifyAddressTask_Organization
HearingAdminActionForeignVeteranCaseTask_Organization -- 13 --> HearingAdminActionVerifyAddressTask_Organization
EvidenceOrArgumentMailTask_Organization -- 13 --> HearingAdminActionVerifyAddressTask_Organization
HearingTask_Organization -- 12 --> HearingAdminActionVerifyAddressTask_Organization
VeteranRecordRequest_Organization -- 7 --> HearingAdminActionVerifyAddressTask_Organization
TranslationTask_User -- 6 --> HearingAdminActionVerifyAddressTask_Organization
HearingRelatedMailTask_Organization -- 4 --> HearingAdminActionVerifyAddressTask_Organization
EvidenceOrArgumentMailTask_User -- 3 --> HearingAdminActionVerifyAddressTask_Organization
StatusInquiryMailTask_User -- 2 --> HearingAdminActionVerifyAddressTask_Organization
ChangeHearingRequestTypeTask_User -- 2 --> HearingAdminActionVerifyAddressTask_Organization
TimedHoldTask_User -- 1 --> HearingAdminActionVerifyAddressTask_Organization
ReturnedUndeliverableCorrespondenceMailTask_Organization -- 1 --> HearingAdminActionVerifyAddressTask_Organization
FoiaRequestMailTask_User -- 1 --> HearingAdminActionVerifyAddressTask_Organization
{{< /mermaid >}}
**Before:**

   * [ScheduleHearingTask_Organization](ScheduleHearingTask_Organization.md): 304 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 19 times
   * [TranslationTask_Organization](TranslationTask_Organization.md): 14 times
   * [HearingAdminActionForeignVeteranCaseTask_Organization](HearingAdminActionForeignVeteranCaseTask_Organization.md): 13 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 13 times
   * [HearingTask_Organization](HearingTask_Organization.md): 12 times
   * [VeteranRecordRequest_Organization](VeteranRecordRequest_Organization.md): 7 times
   * [TranslationTask_User](TranslationTask_User.md): 6 times
   * [HearingRelatedMailTask_Organization](HearingRelatedMailTask_Organization.md): 4 times
   * [EvidenceOrArgumentMailTask_User](EvidenceOrArgumentMailTask_User.md): 3 times
   * [ChangeHearingRequestTypeTask_User](ChangeHearingRequestTypeTask_User.md): 2 times
   * [StatusInquiryMailTask_User](StatusInquiryMailTask_User.md): 2 times
   * [FoiaRequestMailTask_User](FoiaRequestMailTask_User.md): 1 times
   * [ReturnedUndeliverableCorrespondenceMailTask_Organization](ReturnedUndeliverableCorrespondenceMailTask_Organization.md): 1 times
   * [TimedHoldTask_User](TimedHoldTask_User.md): 1 times

**After:**

   * [HearingAdminActionVerifyAddressTask_User](HearingAdminActionVerifyAddressTask_User.md): 90 times
   * [TrackVeteranTask_Organization](TrackVeteranTask_Organization.md): 22 times
   * [TranslationTask_User](TranslationTask_User.md): 9 times
   * [EvidenceOrArgumentMailTask_Organization](EvidenceOrArgumentMailTask_Organization.md): 6 times
   * [HearingRelatedMailTask_Organization](HearingRelatedMailTask_Organization.md): 3 times
   * [AodMotionMailTask_Organization](AodMotionMailTask_Organization.md): 2 times
   * [AddressChangeMailTask_Organization](AddressChangeMailTask_Organization.md): 1 times
   * [PowerOfAttorneyRelatedMailTask_Organization](PowerOfAttorneyRelatedMailTask_Organization.md): 1 times

## Task Creation Sequences

There are 402 total occurrences of HearingAdminActionVerifyAddressTask_Organization among appeals in the hearing docket.  This count includes multiple occurrences in a single appeal.

The following subsections provide TCSs up to HearingAdminActionVerifyAddressTask_Organization, sorted by frequency.

### RTO.TVTO.DTO.HTO.SHTO.HAAVATO

183 (46%) occurrences (example appeal IDs: [153174, 153416, 162644, 157771, 161049])

Task Tree for appeal with ID 153174
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
style 5.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.HearingAdminActionVerifyAddressTask["5.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
4.ScheduleHearingTask --> 5.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.HAAVATO

105 (26%) occurrences (example appeal IDs: [153348, 134743, 154113, 156519, 159448])

Task Tree for appeal with ID 153348
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
style 4.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  4.HearingAdminActionVerifyAddressTask["4.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
3.ScheduleHearingTask --> 4.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.TTO.HAAVATO

14 (3%) occurrences (example appeal IDs: [22116, 21638, 154651, 26590, 27968])

Task Tree for appeal with ID 22116
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
style 4.TranslationTask fill:#bcbd22,stroke-dasharray: 5 5
  4.TranslationTask["4.TranslationTask\n(organization)"]
style 5.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.HearingAdminActionVerifyAddressTask["5.HearingAdminActionVerifyAddressTask\n(organization)"]
style 6.TranslationTask fill:#bcbd22
  6.TranslationTask["6.TranslationTask\n(user)"]
style 7.TranslationTask fill:#bcbd22
  7.TranslationTask["7.TranslationTask\n(user)"]
style 8.HearingAdminActionVerifyAddressTask fill:#d0bbff
  8.HearingAdminActionVerifyAddressTask["8.HearingAdminActionVerifyAddressTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
1.DistributionTask --> 4.TranslationTask
3.ScheduleHearingTask --> 5.HearingAdminActionVerifyAddressTask
4.TranslationTask --> 6.TranslationTask
4.TranslationTask --> 7.TranslationTask
5.HearingAdminActionVerifyAddressTask --> 8.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.TVTO.HAAVATO

13 (3%) occurrences (example appeal IDs: [141132, 123401, 130551, 120523, 125530])

Task Tree for appeal with ID 141132
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
style 5.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  5.TrackVeteranTask(["5.TrackVeteranTask\n(organization)"])
style 6.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.HearingAdminActionVerifyAddressTask["6.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
0.RootTask --> 5.TrackVeteranTask
4.ScheduleHearingTask --> 6.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.SHTO.HAAFVCTO.HAAVATO

10 (2%) occurrences (example appeal IDs: [30929, 26203, 21128, 27817, 27588])

Task Tree for appeal with ID 30929
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
style 5.HearingAdminActionForeignVeteranCaseTask fill:#97a431,stroke-dasharray: 5 5
  5.HearingAdminActionForeignVeteranCaseTask["5.HearingAdminActionForeignVeteranCaseTask\n(organization)"]
style 6.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.HearingAdminActionVerifyAddressTask["6.HearingAdminActionVerifyAddressTask\n(organization)"]
style 7.HearingAdminActionVerifyAddressTask fill:#d0bbff
  7.HearingAdminActionVerifyAddressTask["7.HearingAdminActionVerifyAddressTask\n(user)"]
style 8.ChangeHearingRequestTypeTask fill:#c69432
  8.ChangeHearingRequestTypeTask["8.ChangeHearingRequestTypeTask\n(user)"]
style 9.AssignHearingDispositionTask fill:#debb9b,stroke-dasharray: 5 5
  9.AssignHearingDispositionTask["9.AssignHearingDispositionTask\n(organization)"]
style 10.TranscriptionTask fill:#cfcfcf,stroke-dasharray: 5 5
  10.TranscriptionTask["10.TranscriptionTask\n(organization)"]
style 11.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  11.EvidenceSubmissionWindowTask[/"11.EvidenceSubmissionWindowTask\n(organization)"/]
style 12.ExtensionRequestMailTask fill:#f57832,stroke-dasharray: 5 5
  12.ExtensionRequestMailTask["12.ExtensionRequestMailTask\n(organization)"]
style 13.ExtensionRequestMailTask fill:#f57832,stroke-dasharray: 5 5
  13.ExtensionRequestMailTask["13.ExtensionRequestMailTask\n(organization)"]
style 14.ExtensionRequestMailTask fill:#f57832
  14.ExtensionRequestMailTask["14.ExtensionRequestMailTask\n(user)"]
style 15.ExtensionRequestMailTask fill:#f57832
  15.ExtensionRequestMailTask["15.ExtensionRequestMailTask\n(user)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
4.ScheduleHearingTask --> 5.HearingAdminActionForeignVeteranCaseTask
4.ScheduleHearingTask --> 6.HearingAdminActionVerifyAddressTask
6.HearingAdminActionVerifyAddressTask --> 7.HearingAdminActionVerifyAddressTask
4.ScheduleHearingTask --> 8.ChangeHearingRequestTypeTask
3.HearingTask --> 9.AssignHearingDispositionTask
9.AssignHearingDispositionTask --> 10.TranscriptionTask
9.AssignHearingDispositionTask --> 11.EvidenceSubmissionWindowTask
2.DistributionTask --> 12.ExtensionRequestMailTask
12.ExtensionRequestMailTask --> 13.ExtensionRequestMailTask
13.ExtensionRequestMailTask --> 14.ExtensionRequestMailTask
13.ExtensionRequestMailTask --> 15.ExtensionRequestMailTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.HAAVATO

7 (2%) occurrences (example appeal IDs: [50721, 102987, 103921, 26318, 116666])

Task Tree for appeal with ID 50721
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
style 5.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.HearingAdminActionVerifyAddressTask["5.HearingAdminActionVerifyAddressTask\n(organization)"]
style 6.HearingAdminActionVerifyAddressTask fill:#d0bbff
  6.HearingAdminActionVerifyAddressTask["6.HearingAdminActionVerifyAddressTask\n(user)"]
style 7.HearingAdminActionVerifyAddressTask fill:#d0bbff
  7.HearingAdminActionVerifyAddressTask["7.HearingAdminActionVerifyAddressTask\n(user)"]
style 8.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  8.EvidenceSubmissionWindowTask[/"8.EvidenceSubmissionWindowTask\n(organization)"/]
style 9.TrackVeteranTask fill:#cccccc,stroke-dasharray: 5 5
  9.TrackVeteranTask(["9.TrackVeteranTask\n(organization)"])

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
4.ScheduleHearingTask --> 5.HearingAdminActionVerifyAddressTask
5.HearingAdminActionVerifyAddressTask --> 6.HearingAdminActionVerifyAddressTask
5.HearingAdminActionVerifyAddressTask --> 7.HearingAdminActionVerifyAddressTask
3.HearingTask --> 8.EvidenceSubmissionWindowTask
0.RootTask --> 9.TrackVeteranTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.VRRO.HAAVATO

6 (1%) occurrences (example appeal IDs: [166022, 173616, 168166, 178956, 177585])

Task Tree for appeal with ID 166022
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
style 4.VeteranRecordRequest fill:#f7736e,stroke-dasharray: 5 5
  4.VeteranRecordRequest["4.VeteranRecordRequest\n(organization)"]
style 5.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  5.HearingAdminActionVerifyAddressTask["5.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
0.RootTask --> 4.VeteranRecordRequest
3.ScheduleHearingTask --> 5.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.TVTO.DTO.HTO.SHTO.EOAMTO.HAAVATO

6 (1%) occurrences (example appeal IDs: [157125, 164017, 121607, 41876, 103061])

Task Tree for appeal with ID 157125
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
style 5.EvidenceOrArgumentMailTask fill:#ff9f9b,stroke-dasharray: 5 5
  5.EvidenceOrArgumentMailTask["5.EvidenceOrArgumentMailTask\n(organization)"]
style 6.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  6.HearingAdminActionVerifyAddressTask["6.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.TrackVeteranTask
0.RootTask --> 2.DistributionTask
2.DistributionTask --> 3.HearingTask
3.HearingTask --> 4.ScheduleHearingTask
0.RootTask --> 5.EvidenceOrArgumentMailTask
4.ScheduleHearingTask --> 6.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


### RTO.DTO.HTO.HAAVATO

5 (1%) occurrences (example appeal IDs: [26695, 88444, 99689, 108588, 2320])

Task Tree for appeal with ID 26695
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
style 4.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  4.HearingAdminActionVerifyAddressTask["4.HearingAdminActionVerifyAddressTask\n(organization)"]
style 5.HearingAdminActionVerifyAddressTask fill:#d0bbff
  5.HearingAdminActionVerifyAddressTask["5.HearingAdminActionVerifyAddressTask\n(user)"]
style 6.EvidenceSubmissionWindowTask fill:#8de5a1,stroke-dasharray: 5 5
  6.EvidenceSubmissionWindowTask[/"6.EvidenceSubmissionWindowTask\n(organization)"/]
style 7.JudgeAssignTask fill:#b3b3b3
  7.JudgeAssignTask[\"7.JudgeAssignTask\n(user)"/]
style 8.TimedHoldTask fill:#fab0e4
  8.TimedHoldTask["8.TimedHoldTask\n(user)"]
style 9.JudgeDecisionReviewTask fill:#e5c494
  9.JudgeDecisionReviewTask[["9.JudgeDecisionReviewTask\n(user)"]]
style 10.AttorneyTask fill:#ffb482
  10.AttorneyTask["10.AttorneyTask\n(user)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
3.ScheduleHearingTask --> 4.HearingAdminActionVerifyAddressTask
4.HearingAdminActionVerifyAddressTask --> 5.HearingAdminActionVerifyAddressTask
2.HearingTask --> 6.EvidenceSubmissionWindowTask
0.RootTask --> 7.JudgeAssignTask
7.JudgeAssignTask --> 8.TimedHoldTask
0.RootTask --> 9.JudgeDecisionReviewTask
9.JudgeDecisionReviewTask --> 10.AttorneyTask
{{< /mermaid >}}


### RTO.DTO.HTO.SHTO.TTO.TTU.HAAVATO

5 (1%) occurrences (example appeal IDs: [122200, 127856, 120366, 126768, 150292])

Task Tree for appeal with ID 122200
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
style 4.TranslationTask fill:#bcbd22,stroke-dasharray: 5 5
  4.TranslationTask["4.TranslationTask\n(organization)"]
style 5.TranslationTask fill:#bcbd22
  5.TranslationTask["5.TranslationTask\n(user)"]
style 6.TranslationTask fill:#bcbd22
  6.TranslationTask["6.TranslationTask\n(user)"]
style 7.TimedHoldTask fill:#fab0e4
  7.TimedHoldTask["7.TimedHoldTask\n(user)"]
style 8.HearingAdminActionVerifyAddressTask fill:#d0bbff,stroke-dasharray: 5 5,stroke:#00f,stroke-width:4px
  8.HearingAdminActionVerifyAddressTask["8.HearingAdminActionVerifyAddressTask\n(organization)"]

0.RootTask --> 1.DistributionTask
1.DistributionTask --> 2.HearingTask
2.HearingTask --> 3.ScheduleHearingTask
1.DistributionTask --> 4.TranslationTask
4.TranslationTask --> 5.TranslationTask
4.TranslationTask --> 6.TranslationTask
6.TranslationTask --> 7.TimedHoldTask
3.ScheduleHearingTask --> 8.HearingAdminActionVerifyAddressTask
{{< /mermaid >}}


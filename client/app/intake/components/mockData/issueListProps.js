export const mockedIssueListProps = {
  editPage: true,
  intakeData: {
    claimant: '358808523',
    claimantType: 'veteran',
    claimantName: 'Bob Smithkeebler',
    veteranIsNotClaimant: false,
    processedInCaseflow: true,
    legacyOptInApproved: false,
    legacyAppeals: [],
    ratings: null,
    editIssuesUrl: '/higher_level_reviews/6545833b-1a6c-4966-823f-7d0037aa5f6a/edit',
    processedAt: '2023-07-28T14:34:36.571-04:00',
    veteranInvalidFields: {
      veteranMissingFields: '',
      veteranAddressTooLong: false,
      veteranZipCodeInvalid: false,
      veteranPayGradeInvalid: false
    },
    requestIssues: [
      {
        id: 6292,
        rating_issue_reference_id: null,
        rating_issue_profile_date: null,
        rating_decision_reference_id: null,
        description: 'Other - stuff and things',
        contention_text: 'Other - stuff and things',
        approx_decision_date: null,
        category: 'Other',
        notes: null,
        is_unidentified: null,
        ramp_claim_id: null,
        vacols_id: null,
        vacols_sequence_id: null,
        ineligible_reason: null,
        ineligible_due_to_id: null,
        decision_review_title: 'Higher-Level Review',
        title_of_active_review: null,
        contested_decision_issue_id: null,
        withdrawal_date: null,
        contested_issue_description: null,
        end_product_code: null,
        end_product_establishment_code: null,
        verified_unidentified_issue: null,
        editable: true,
        exam_requested: null,
        vacols_issue: null,
        end_product_cleared: null,
        benefit_type: 'vha',
        is_predocket_needed: null
      }
    ],
    decisionIssues: [],
    activeNonratingRequestIssues: [
      {
        id: '6291',
        benefitType: 'vha',
        decisionIssueId: null,
        description: 'Caregiver | Eligibility - pact act testing',
        decisionDate: '2023-07-19',
        ineligibleReason: null,
        ineligibleDueToId: null,
        decisionReviewTitle: 'Higher-Level Review',
        contentionText: 'Caregiver | Eligibility - pact act testing',
        vacolsId: null,
        vacolsSequenceId: null,
        vacolsIssue: null,
        endProductCleared: null,
        endProductCode: null,
        withdrawalDate: null,
        editable: true,
        examRequested: null,
        isUnidentified: null,
        notes: null,
        category: 'Caregiver | Eligibility',
        index: null,
        isRating: false,
        ratingIssueReferenceId: null,
        ratingDecisionReferenceId: null,
        ratingIssueProfileDate: null,
        approxDecisionDate: '2023-07-19',
        titleOfActiveReview: null,
        rampClaimId: null,
        verifiedUnidentifiedIssue: null,
        isPreDocketNeeded: null
      }
    ],
    contestableIssuesByDate: [],
    intakeUser: 'SUPERUSER',
    relationships: [
      {
        value: 'CLAIMANT_WITH_PVA_AS_VSO',
        fullName: 'Bob Vance',
        relationshipType: 'Spouse',
        displayText: 'Bob Vance, Spouse',
        defaultPayeeCode: '10'
      },
      {
        value: '1129318238',
        fullName: 'Cathy Smith',
        relationshipType: 'Child',
        displayText: 'Cathy Smith, Child',
        defaultPayeeCode: '11'
      },
      {
        value: 'no-such-pid',
        fullName: 'Tom Brady',
        relationshipType: 'Child',
        displayText: 'Tom Brady, Child',
        defaultPayeeCode: '11'
      }
    ],
    veteranValid: true,
    receiptDate: '2023/07/14',
    veteran: {
      name: 'Bob Smithkeebler',
      fileNumber: '000100009',
      formName: 'Smithkeebler, Bob',
      ssn: '303940217'
    },
    powerOfAttorneyName: 'Clarence Darrow',
    claimantRelationship: 'Veteran',
    asyncJobUrl: '/asyncable_jobs/HigherLevelReview/jobs/385',
    benefitType: 'vha',
    payeeCode: null,
    hasClearedRatingEp: false,
    hasClearedNonratingEp: false,
    informalConference: false,
    sameOffice: null,
    formType: 'higher_level_review',
    contestableIssues: {},
    claimId: '6545833b-1a6c-4966-823f-7d0037aa5f6a',
    featureToggles: {
      useAmaActivationDate: true,
      correctClaimReviews: true,
      covidTimelinessExemption: true
    },
    userCanWithdrawIssues: false,
    addIssuesModalVisible: false,
    nonRatingRequestIssueModalVisible: false,
    unidentifiedIssuesModalVisible: false,
    addedIssues: [
      {
        id: '6291',
        benefitType: 'vha',
        decisionIssueId: null,
        description: 'Other - Other description',
        decisionDate: null,
        ineligibleReason: null,
        ineligibleDueToId: null,
        decisionReviewTitle: 'Higher-Level Review',
        contentionText: 'Other - Other description',
        vacolsId: null,
        vacolsSequenceId: null,
        vacolsIssue: null,
        endProductCleared: null,
        endProductCode: null,
        withdrawalDate: null,
        editable: true,
        examRequested: null,
        isUnidentified: null,
        notes: null,
        category: 'Other',
        index: null,
        isRating: false,
        ratingIssueReferenceId: null,
        ratingDecisionReferenceId: null,
        ratingIssueProfileDate: null,
        approxDecisionDate: null,
        titleOfActiveReview: null,
        rampClaimId: null,
        verifiedUnidentifiedIssue: null,
        isPreDocketNeeded: null
      },
      {
        benefitType: 'vha',
        category: 'Beneficiary Travel',
        description: 'vha camo testing',
        decisionDate: '2023-07-19',
        ineligibleDueToId: null,
        ineligibleReason: null,
        decisionReviewTitle: null,
        isRating: false,
        isPreDocketNeeded: null,
        timely: true,
        editable: true
      }
    ],
    originalIssues: [
      {
        id: '6292',
        benefitType: 'vha',
        decisionIssueId: null,
        description: 'Other - stuff and things',
        decisionDate: null,
        ineligibleReason: null,
        ineligibleDueToId: null,
        decisionReviewTitle: 'Higher-Level Review',
        contentionText: 'Other - stuff and things',
        vacolsId: null,
        vacolsSequenceId: null,
        vacolsIssue: null,
        endProductCleared: null,
        endProductCode: null,
        withdrawalDate: null,
        editable: true,
        examRequested: null,
        isUnidentified: null,
        notes: null,
        category: 'Other',
        index: null,
        isRating: false,
        ratingIssueReferenceId: null,
        ratingDecisionReferenceId: null,
        ratingIssueProfileDate: null,
        approxDecisionDate: null,
        titleOfActiveReview: null,
        rampClaimId: null,
        verifiedUnidentifiedIssue: null,
        isPreDocketNeeded: null
      }
    ],
    requestStatus: {
      requestIssuesUpdate: 'NOT_STARTED'
    },
    requestIssuesUpdateErrorCode: null,
    afterIssues: null,
    beforeIssues: null,
    updatedIssues: null,
    editEpUpdateError: null,
    issueCount: 2
  },
  issues: [
    {
      index: 0,
      id: '6292',
      text: 'Other - stuff and things',
      benefitType: 'vha',
      date: null,
      beforeAma: true,
      ineligibleReason: null,
      vacolsId: null,
      vacolsSequenceId: null,
      vacolsIssue: null,
      decisionReviewTitle: 'Higher-Level Review',
      withdrawalDate: null,
      endProductCleared: null,
      endProductCode: null,
      category: 'Other',
      editable: true,
      examRequested: null,
      decisionIssueId: null,
      isPreDocketNeeded: null
    },
    {
      index: 1,
      text: 'Beneficiary Travel - vha camo testing',
      benefitType: 'vha',
      date: '2023-07-19',
      timely: true,
      beforeAma: false,
      ineligibleReason: null,
      decisionReviewTitle: null,
      category: 'Beneficiary Travel',
      editable: true,
      isPreDocketNeeded: null
    }
  ],
  featureToggles: {
    useAmaActivationDate: true,
    correctClaimReviews: true,
    covidTimelinessExemption: true
  },
  formType: 'higher_level_review',
  userCanWithdrawIssues: false,
  withdrawReview: false
};

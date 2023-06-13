
/* eslint-disable max-lines */
import { css } from 'glamor';
import _ from 'lodash';
import VACOLS_DISPOSITIONS_BY_ID from '../../constants/VACOLS_DISPOSITIONS_BY_ID';
import ISSUE_DISPOSITIONS_BY_ID from '../../constants/ISSUE_DISPOSITIONS_BY_ID';
import LEGACY_REMAND_REASONS_BY_ID from '../../constants/LEGACY_ACTIVE_REMAND_REASONS_BY_ID';
import REMAND_REASONS_BY_ID from '../../constants/AMA_REMAND_REASONS_BY_ID';
import StringUtil from '../util/StringUtil';
import { COLORS as COMMON_COLORS } from '@department-of-veterans-affairs/caseflow-frontend-toolkit/util/StyleConstants';
import COPY from '../../COPY';
import VACOLS_COLUMN_MAX_LENGTHS from '../../constants/VACOLS_COLUMN_MAX_LENGTHS';
import LEGACY_APPEAL_TYPES_BY_ID from '../../constants/LEGACY_APPEAL_TYPES_BY_ID';

export const COLORS = {
  QUEUE_LOGO_PRIMARY: '#11598D',
  QUEUE_LOGO_OVERLAP: '#0E456C',
  QUEUE_LOGO_BACKGROUND: '#D6D7D9',
  // $color-secondary-dark in uswds/core/_variables.scss
  ERROR: '#CD2026'
};

export const ACTIONS = {
  RECEIVE_QUEUE_DETAILS: 'RECEIVE_QUEUE_DETAILS',
  RECEIVE_JUDGE_DETAILS: 'RECEIVE_JUDGE_DETAILS',
  RECEIVE_NEW_FILES_FOR_APPEAL: 'RECEIVE_NEW_FILES_FOR_APPEAL',
  RECEIVE_NEW_FILES_FOR_TASK: 'RECEIVE_NEW_FILES_FOR_TASK',
  ERROR_ON_RECEIVE_NEW_FILES_FOR_APPEAL: 'ERROR_ON_RECEIVE_NEW_FILES_FOR_APPEAL',
  ERROR_ON_RECEIVE_NEW_FILES_FOR_TASK: 'ERROR_ON_RECEIVE_NEW_FILES_FOR_TASK',
  ERROR_ON_RECEIVE_DOCUMENT_COUNT: 'ERROR_ON_RECEIVE_DOCUMENT_COUNT',
  STARTED_DOC_COUNT_REQUEST: 'STARTED_DOC_COUNT_REQUEST',
  STARTED_LOADING_DOCUMENTS_FOR_APPEAL: 'STARTED_LOADING_DOCUMENTS_FOR_APPEAL',
  STARTED_LOADING_DOCUMENTS_FOR_TASK: 'STARTED_LOADING_DOCUMENTS_FOR_TASK',
  SET_LOADED_QUEUE_ID: 'SET_LOADED_QUEUE_ID',
  SET_APPEAL_DOC_COUNT: 'SET_APPEAL_DOC_COUNT',
  SET_REVIEW_ACTION_TYPE: 'SET_REVIEW_ACTION_TYPE',
  SET_DECISION_OPTIONS: 'SET_DECISION_OPTIONS',
  RESET_DECISION_OPTIONS: 'RESET_DECISION_OPTIONS',
  EDIT_APPEAL: 'EDIT_APPEAL',
  EDIT_NOD_DATE_UPDATES: 'EDIT_NOD_DATE_UPDATES',
  CLEAR_APPEAL: 'CLEAR_APPEAL',
  SET_OVERTIME: 'SET_OVERTIME',
  DELETE_TASK: 'DELETE_TASK',
  DELETE_APPEAL: 'DELETE_APPEAL',
  STAGE_APPEAL: 'STAGE_APPEAL',
  EDIT_STAGED_APPEAL: 'EDIT_STAGED_APPEAL',
  CHECKOUT_STAGED_APPEAL: 'CHECKOUT_STAGED_APPEAL',
  START_EDITING_APPEAL_ISSUE: 'START_EDITING_APPEAL_ISSUE',
  CANCEL_EDITING_APPEAL_ISSUE: 'CANCEL_EDITING_APPEAL_ISSUE',
  SAVE_EDITED_APPEAL_ISSUE: 'SAVE_EDITED_APPEAL_ISSUE',
  UPDATE_EDITING_APPEAL_ISSUE: 'UPDATE_EDITING_APPEAL_ISSUE',
  DELETE_EDITING_APPEAL_ISSUE: 'DELETE_EDITING_APPEAL_ISSUE',
  INCREMENT_TASK_COUNT_FOR_ATTORNEY: 'INCREMENT_TASK_COUNT_FOR_ATTORNEY',
  DECREMENT_TASK_COUNT_FOR_ATTORNEY: 'DECREMENT_TASK_COUNT_FOR_ATTORNEY',
  SET_ATTORNEYS_OF_JUDGE: 'SET_ATTORNEYS_OF_JUDGE',
  SET_TASKS_AND_APPEALS_OF_ATTORNEY: 'SET_TASKS_AND_APPEALS_OF_ATTORNEY',
  REQUEST_TASKS_AND_APPEALS_OF_ATTORNEY: 'REQUEST_TASKS_AND_APPEALS_OF_ATTORNEY',
  ERROR_TASKS_AND_APPEALS_OF_ATTORNEY: 'ERROR_TASKS_AND_APPEALS_OF_ATTORNEY',
  SET_SELECTION_OF_TASK_OF_USER: 'SET_SELECTION_OF_TASK_OF_USER',
  SET_SELECTED_ASSIGNEE_OF_USER: 'SET_SELECTED_ASSIGNEE_OF_USER',
  SET_MOST_RECENTLY_HELD_HEARING_FOR_APPEAL: 'SET_MOST_RECENTLY_HELD_HEARING_FOR_APPEAL',
  ERROR_ON_RECEIVE_HEARING_FOR_APPEAL: 'ERROR_ON_RECEIVE_HEARING_FOR_APPEAL',
  START_ASSIGN_TASKS_TO_USER: 'START_ASSIGN_TASKS_TO_USER',
  SET_PENDING_DISTRIBUTION: 'SET_PENDING_DISTRIBUTION',
  RECEIVE_ALL_ATTORNEYS: 'RECEIVE_ALL_ATTORNEYS',
  RECEIVE_VHA_PROGRAM_OFFICES: 'RECEIVE_VHA_PROGRAM_OFFICES',
  ERROR_LOADING_ATTORNEYS: 'ERROR_LOADING_ATTORNEYS',
  ERROR_LOADING_VHA_PROGRAM_OFFICES: 'ERROR_LOADING_VHA_PROGRAM_OFFICES',
  RECEIVE_TASKS: 'RECEIVE_TASKS',
  RECEIVE_APPEAL_DETAILS: 'RECEIVE_APPEAL_DETAILS',
  RECEIVE_CLAIM_REVIEW_DETAILS: 'RECEIVE_CLAIM_REVIEW_DETAILS',
  SET_TASK_ATTRS: 'SET_TASK_ATTRS',
  SET_SPECIAL_ISSUE: 'SET_SPECIAL_ISSUE',
  CLEAR_SPECIAL_ISSUE: 'CLEAR_SPECIAL_ISSUE',
  SET_APPEAL_AOD: 'SET_APPEAL_AOD',
  STARTED_LOADING_APPEAL_VALUE: 'STARTED_LOADING_APPEAL_VALUE',
  RECEIVE_APPEAL_VALUE: 'RECEIVE_APPEAL_VALUE',
  ERROR_ON_RECEIVE_APPEAL_VALUE: 'ERROR_ON_RECEIVE_APPEAL_VALUE',
  SET_APPEAL_ATTRS: 'SET_APPEAL_ATTRS',
  RECEIVE_AMA_TASKS: 'RECEIVE_AMA_TASKS',
  SET_QUEUE_CONFIG: 'SET_QUEUE_CONFIG'
};

// 'red' isn't contrasty enough w/white; it raises Sniffybara::PageNotAccessibleError when testing
export const redText = css({ color: '#E60000' });
export const boldText = css({ fontWeight: 'bold' });
export const fullWidth = css({ width: '100%' });
export const dropdownStyling = css({ minHeight: 0 });
export const disabledLinkStyle = css({ color: COMMON_COLORS.GREY_MEDIUM });
export const subHeadTextStyle = css(disabledLinkStyle, {
  fontSize: 'small'
});
export const marginTop = (margin) => css({ marginTop: `${margin}rem` });
export const marginBottom = (margin) => css({ marginBottom: `${margin}rem` });
export const marginLeft = (margin) => css({ marginLeft: `${margin}rem` });
export const marginRight = (margin) => css({ marginRight: `${margin}rem` });

export const paddingLeft = (padding) => css({ paddingLeft: `${padding}rem` });

export const setHeight = (height) => css({ height: `${height}rem` });

export const CATEGORIES = {
  CASE_DETAIL: 'Appeal Details',
  QUEUE_TABLE: 'Queue Table',
  QUEUE_TASK: 'Queue Task'
};

export const TASK_ACTIONS = {
  VIEW_APPELLANT_INFO: 'view-appellant-info',
  VIEW_APPEAL_INFO: 'view-appeal-info',
  QUEUE_TO_READER: 'queue-to-reader'
};

export const OMO_ATTORNEY_CASE_REVIEW_WORK_PRODUCT_TYPES = [{
  displayText: COPY.ATTORNEY_CHECKOUT_OMO_CASE_REVIEW_WORK_PRODUCT_VHA,
  value: COPY.ATTORNEY_CHECKOUT_OMO_CASE_REVIEW_WORK_PRODUCT_VHA
}, {
  displayText: COPY.ATTORNEY_CHECKOUT_OMO_CASE_REVIEW_WORK_PRODUCT_IME,
  value: COPY.ATTORNEY_CHECKOUT_OMO_CASE_REVIEW_WORK_PRODUCT_IME
}];

export const APPELLANT_TYPES = {
  OTHER_CLAIMANT: 'OtherClaimant',
  ATTORNEY_CLAIMANT: 'AttorneyClaimant',
  VETERAN_CLAIMANT: 'VeteranClaimant',
  HEALTHCARE_PROVIDER_CLAIMANT: 'HealthcareProviderClaimant'
};

export const SEARCH_ERROR_FOR = {
  EMPTY_SEARCH_TERM: 'EMPTY_SEARCH_TERM',
  INVALID_VETERAN_ID: 'INVALID_VETERAN_ID',
  NO_APPEALS: 'NO_APPEALS',
  UNKNOWN_SERVER_ERROR: 'UNKNOWN_SERVER_ERROR',
  BACKEND_ERROR: 'BACKEND_ERROR'
};

const formatRemandReasons = (reasons) => Object.assign({},
  ...Object.keys(reasons).map((reasonType) => ({
    [reasonType]: _.map(reasons[reasonType], (label, id) => ({
      id,
      label
    }))
  }))
);

export const LEGACY_REMAND_REASONS = formatRemandReasons(LEGACY_REMAND_REASONS_BY_ID);
export const REMAND_REASONS = formatRemandReasons(REMAND_REASONS_BY_ID);

const parameterizedDispositions = Object.values(VACOLS_DISPOSITIONS_BY_ID).
  map(StringUtil.parameterize);

export const VACOLS_DISPOSITIONS = _.fromPairs(_.zip(
  _.invokeMap(parameterizedDispositions, 'toUpperCase'),
  Object.keys(VACOLS_DISPOSITIONS_BY_ID)
));

export const ISSUE_DISPOSITIONS = _.fromPairs(_.zip(
  _.invokeMap(_.keys(ISSUE_DISPOSITIONS_BY_ID), 'toUpperCase'),
  _.keys(ISSUE_DISPOSITIONS_BY_ID)
));

export const LEGACY_APPEAL_TYPES = _.fromPairs(_.zip(
  _.invokeMap(_.keys(LEGACY_APPEAL_TYPES_BY_ID), 'toUpperCase'),
  _.values(LEGACY_APPEAL_TYPES_BY_ID)
));

export const ISSUE_DESCRIPTION_MAX_LENGTH = VACOLS_COLUMN_MAX_LENGTHS.ISSUES.ISSDESC;
export const ATTORNEY_COMMENTS_MAX_LENGTH = VACOLS_COLUMN_MAX_LENGTHS.DECASS.DEATCOM;
export const DOCUMENT_ID_MAX_LENGTH = VACOLS_COLUMN_MAX_LENGTHS.DECASS.DEDOCID;
export const JUDGE_CASE_REVIEW_COMMENT_MAX_LENGTH = VACOLS_COLUMN_MAX_LENGTHS.DECASS.DEBMCOM;

export const PAGE_TITLES = {
  DISPOSITIONS: {
    JUDGE: 'Review Dispositions',
    ATTORNEY: 'Select Dispositions'
  },
  REMANDS: {
    JUDGE: 'Review Remand Reasons',
    ATTORNEY: 'Select Remand Reasons'
  },
  REVIEW_CASES: 'Review Cases',
  UNASSIGED_CASES: 'Unassgined Cases',
  CASE_DETAILS: 'Case Details',
  DRAFT_DECISION: 'Draft Decision',
  EVALUATE_DECISION: 'Evaluate Decision',
  ADD_COLOCATED_TASK: 'Add Colocated Task',
  ADD_CAVC_REMAND: 'Add Cavc Remand',
  EDIT_CAVC_REMAND: 'Edit Cavc Remand',
  ORGANIZATION_USERS: 'Organization Users',
  ORGANIZATION_QUEUE: 'Organization Queue',
  EDIT_APPELLANT_INFORMATION: 'Edit Appellant Information',
  EDIT_POA_INFORMATION: 'Edit POA Information',
  TEAM_MANAGEMENT: 'Team Management',
  USER_MANAGEMENT: 'User Management',
  MOTION_TO_VACATE: {
    ADDRESS_MOTION_TO_VACATE: 'Address Motion to Vacate',
    RETURN_TO_LITIGATION_SUPPORT: 'Return to Litigation Support'
  },
  SUBSTITUTE_APPELLANT: 'Substitute Appellant',
  MARK_TASK_COMPLETE: 'Mark Task Complete',
  READY_FOR_REVIEW: 'Ready for review',
  RETURN_TO_BOARD_INTAKE: 'Return to Board Intake',
  ASSIGN_TO_PULAC_CERULLO: 'Assign to Pulac-Cerullo',
  CANCEL_AND_ASSIGN_TO_RO: 'Cancel Task and Assign Regional Office',
  SEND_TO_SCHEDULE_VETERAN_LIST: 'Send to Schedule Veteran List',
  CANCEL_TASK: 'Cancel Task',
  ASSIGN_HEARING: 'Assign Hearing',
  REMOVE_HEARING_TO_CORRECT_ERROR: 'Remove hearing to correct a scheduling error',
  POSTPONE_HEARING: 'Postpone Hearing',
  CHANGE_TASK_TYPE: 'Change Task Type',
  CONVERT_HEARING_TO_VIRTUAL: 'Change Hearing Request Type to Virtual',
  CONVERT_HEARING_TO_VIDEO: 'Change Hearing Request Type to Video',
  CONVERT_HEARING_TO_CENTRAL: 'Change Hearing Request Type to Central'

};

export const CUSTOM_HOLD_DURATION_TEXT = 'Custom';
export const COLOCATED_HOLD_DURATIONS = [15, 30, 45, 60, 90, 120, CUSTOM_HOLD_DURATION_TEXT];
export const VHA_HOLD_DURATIONS = [15, 30, 45, CUSTOM_HOLD_DURATION_TEXT];

export const DECISION_SPECIAL_ISSUES = [
  {
    id: 'blue_water',
    label: 'Blue Water',
    requiresJustification: false
  },
  {
    id: 'burn_pit',
    label: 'Burn Pit',
    requiresJustification: false
  },
  {
    id: 'mstStatus',
    label: 'Military Sexual Trauma (MST)',
    requiresJustification: true
  },
  {
    id: 'pactStatus',
    label: 'PACT Act',
    requiresJustification: true
  },
];

export const DECISION_SPECIAL_ISSUES_NO_MST_PACT = [
  {
    id: 'blue_water',
    label: 'Blue Water',
    requiresJustification: false
  },
  {
    id: 'burn_pit',
    label: 'Burn Pit',
    requiresJustification: false
  }
];

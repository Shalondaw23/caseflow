import React, { useState } from 'react';
import { css } from 'glamor';

import { LABELS } from './cavcDashboardConstants';
import PropTypes from 'prop-types';
import BENEFIT_TYPES from '../../../constants/BENEFIT_TYPES';
import COPY from '../../../COPY';
import SearchableDropdown from '../../components/SearchableDropdown';
import CavcDecisionReasons from './CavcDecisionReasons';
import Button from '../../components/Button';
import CAVC_DASHBOARD_DISPOSITIONS from '../../../constants/CAVC_DASHBOARD_DISPOSITIONS';
import RemoveCavcDashboardIssueModal from './RemoveCavcDashboardIssueModal';
import { useDispatch } from 'react-redux';
import { removeCheckedDecisionReason } from './cavcDashboardActions';

const singleIssueStyling = css({
  marginBottom: '1.5em !important',
  display: 'grid',
  fontWeight: 'normal',
  gridTemplateColumns: '70% 30%',
  '@media(max-width: 1200px)': { width: '100%' },
  '@media(max-width: 829px)': {
    display: 'flex',
    flexDirection: 'column'
  }
});

const headerStyling = css({
  display: 'grid',
  gridTemplateColumns: '70% 30%',
  marginBottom: '0',
});

const issueSectionStyling = css({
  marginTop: '1.5em'
});

const olStyling = css({
  fontWeight: 'bold',
  paddingLeft: '1em'
});

const CavcDashboardIssue = (props) => {
  const {
    issue,
    index,
    dispositions,
    removeIssueHandler,
    addedIssueSection
  } = props;

  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);

  const [disposition, setDisposition] = useState(dispositions?.find(
    (dis) => dis.request_issue_id === issue.id ||
      dis.cavc_dashboard_issue_id === issue.id)?.disposition || issue?.disposition);

  /* eslint-disable-next-line */
  const loadCheckedBoxes = dispositions.find((dis) => dis.request_issue_id === issue.id)?.cavc_dispositions_to_reasons;

  const dispositionsOptions = Object.keys(CAVC_DASHBOARD_DISPOSITIONS).map(
    (value) => ({ value, label: CAVC_DASHBOARD_DISPOSITIONS[value] }));

  let issueType = {};
  const dispatch = useDispatch();

  const requireDecisionReason = () => {
    /* eslint-disable-next-line */
    if (disposition === CAVC_DASHBOARD_DISPOSITIONS.reversed || disposition === CAVC_DASHBOARD_DISPOSITIONS.vacated_and_remanded) {
      return true;
    }
    dispatch(removeCheckedDecisionReason(issue.id));

    return false;
  };

  if (issue.decision_review_type) {
    if (issue.contested_issue_description) {
      issueType = `${issue.decision_review_type} - ${issue.contested_issue_description}`;
    } else {
      issueType = `${issue.decision_review_type}`;
    }
  } else {
    issueType = addedIssueSection ? issue.issue_category?.label : issue.issue_category;
  }

  const toggleRemoveIssueModal = () => {
    setRemoveModalIsOpen(!removeModalIsOpen);
  };

  const removeIssue = () => {
    removeIssueHandler(index);
    toggleRemoveIssueModal();
  };

  return (
    <li key={index}>
      <div {...singleIssueStyling}>
        <div>
          <div>
            <strong> Benefit type: </strong> {BENEFIT_TYPES[issue.benefit_type]}
          </div>
          <div>
            <strong>Issue: </strong> {issueType}
          </div>
        </div>
        <div>
          <SearchableDropdown
            name={`issue-dispositions-${index}`}
            label="Dispositions"
            placeholder={disposition}
            value={disposition}
            searchable
            hideLabel
            options={dispositionsOptions}
            onChange={(option) => setDisposition(option.label)}
          />
        </div>
        <div />
        {addedIssueSection &&
          <>
            <Button
              type="button"
              name="Remove Issue Button"
              classNames={['cf-push-right', 'cf-btn-link']}
              onClick={toggleRemoveIssueModal}
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>  { COPY.REMOVE_CAVC_DASHBOARD_ISSUE_BUTTON_TEXT }
            </Button>
            {removeModalIsOpen &&
              <RemoveCavcDashboardIssueModal closeHandler={toggleRemoveIssueModal} submitHandler={removeIssue} />
            }
          </>
        }
      </div>
      {requireDecisionReason() && (
        <CavcDecisionReasons uniqueId={issue.id} loadCheckedBoxes={loadCheckedBoxes} />
      )}
    </li>
  );
};

const CavcDashboardIssuesSection = (props) => {
  const { dashboard, dashboardIndex, removeDashboardIssue } = props;
  const issues = dashboard.source_request_issues;
  const cavcIssues = dashboard.cavc_dashboard_issues;
  const dashboardDispositions = dashboard.cavc_dashboard_dispositions;
  const dashboardId = dashboard.id;

  // the handler is in this component because it needs the dashboardIndex prop that isn't passed down
  const removeIssueHandler = (issueIndex) => {
    removeDashboardIssue(dashboardIndex, issueIndex);
  };

  return (
    <div {...issueSectionStyling}>
      <div>
        <strong {...headerStyling}>
          <span>{LABELS.CAVC_DASHBOARD_ISSUES}</span>
          <span>{LABELS.CAVC_DASHBOARD_DISPOSITIONS}</span>
        </strong>
        <hr />
      </div>
      <ol {...olStyling}>
        {issues.map((issue, i) => {
          const issueDisposition = dashboardDispositions ? (dashboardDispositions.filter((dis) => {
            return dis.request_issue_id === issue.id;
          })) : 'Select';

          return (
            <React.Fragment key={i}>
              <CavcDashboardIssue issue={issue} index={i} dispositions={issueDisposition} dashboardId={dashboardId} />
            </React.Fragment>
          );
        })}
      </ol>
      <br />
      {cavcIssues.length > 0 &&
        <>
          <div>
            <strong {...headerStyling}>
              <span>{LABELS.CAVC_DASHBOARD_ADDED_ISSUES}</span>
              <span>{LABELS.CAVC_DASHBOARD_DISPOSITIONS}</span>
            </strong>
            <hr />
          </div>
          <ol {...olStyling}>
            {cavcIssues.map((cavcIssue, i) => {

              return (
                <React.Fragment key={i}>
                  <CavcDashboardIssue
                    issue={cavcIssue}
                    index={i}
                    dispositions={dashboardDispositions.filter((dis) => dis.cavc_dashboard_issue_id === cavcIssue.id)}
                    removeIssueHandler={removeIssueHandler}
                    addedIssueSection
                  />
                </React.Fragment>
              );
            })}
          </ol>
        </>
      }
    </div>
  );
};

CavcDashboardIssue.propTypes = {
  index: PropTypes.number,
  issue: PropTypes.shape({
    benefit_type: PropTypes.string,
    decision_review_type: PropTypes.string,
    contested_issue_description: PropTypes.string,
    issue_category: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    id: PropTypes.number,
  }),
  dispositions: PropTypes.array,
  removeIssueHandler: PropTypes.func,
  addedIssueSection: PropTypes.bool
};

CavcDashboardIssuesSection.propTypes = {
  dashboard: PropTypes.object,
  dashboardIndex: PropTypes.number,
  removeDashboardIssue: PropTypes.func,
};

export default CavcDashboardIssuesSection;

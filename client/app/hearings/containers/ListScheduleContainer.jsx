import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';
import ListSchedule from '../components/ListSchedule';
import { hearingSchedStyling } from '../components/ListScheduleDateSearch';
import {
  onViewStartDateChange,
  onViewEndDateChange,
  onReceiveHearingSchedule,
  onInputInvalidDates,
  onResetInvalidDates,
  onSelectedHearingDayChange,
  selectRequestType,
  onResetDeleteSuccessful,
  onAssignHearingRoom
} from '../actions/hearingScheduleActions';
import {
  selectVlj,
  selectHearingCoordinator,
  setNotes
} from '../actions/dailyDocketActions';
import { bindActionCreators } from 'redux';
import { css } from 'glamor';
import Link from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/Link';
import Alert from '../../components/Alert';
import COPY from '../../../COPY';
import {
  formatDateStr,
  getMinutesToMilliseconds
} from '../../util/DateUtil';
import ApiUtil from '../../util/ApiUtil';
import PropTypes from 'prop-types';
import QueueCaseSearchBar from '../../queue/SearchBar';
import AddHearingDay from '../components/AddHearingDay';
import { onRegionalOfficeChange } from '../../components/common/actions';
import moment from 'moment';
import UserAlerts from '../../components/UserAlerts';
import Pagination from '../../components/Pagination/Pagination';

import { LIST_SCHEDULE_VIEWS, ENDPOINT_NAMES } from '../constants';
import LoadingScreen from '../../components/LoadingScreen';
import { LOGO_COLORS } from '../../constants/AppConstants';

const dateFormatString = 'YYYY-MM-DD';

const actionButtonsStyling = css({
  marginRight: '25px'
});

const filterKeyMap = {
  vlj: 'with_judges',
  readableRequestType: 'with_request_types',
  regionalOffice: 'with_ros'
};

const sortKeyMap = {
  room: 'sort_by_room',
  date: 'sort_by_scheduled_for',
  true: 'asc',
  false: 'desc'
};

export class ListScheduleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateRangeKey: `${props.startDate}->${props.endDate}`,
      modalOpen: false,
      showModalAlert: false,
      view: LIST_SCHEDULE_VIEWS.DEFAULT_VIEW,
      // This will hold a reference to the button that opens the modal in order to preserve
      // page flow when the modal is closed
      modalButton: null,
      currentPage: 0,
      totalCases: 0,
      currentCases: 0,
      totalPages: 0,
      pageSize: 0,
      queries: {},
      loading: false
    };
  }

  switchListView = (view) => {
    this.setState({ view }, () => this.loadHearingSchedule(0));
  }

  componentDidMount = () => {
    this.loadHearingSchedule(this.state.currentPage);
    this.props.onSelectedHearingDayChange('');
  };

  componentDidUpdate = (prevProps) => {
    if (!((_.isNil(prevProps.invalidDates) && this.props.invalidDates) || _.isNil(this.props.invalidDates))) {
      this.props.onResetInvalidDates();
    }
  };

  updateQueries = (newQueries) => {
    this.setState({ queries: newQueries }, () => this.loadHearingSchedule(0));
  };

  loadHearingSchedule = (index) => {
    this.setState({
      loading: true
    });

    let requestUrl = `/hearings/hearing_day.json?page=${index + 1}`;

    if (this.props.startDate && this.props.endDate) {
      if (!moment(this.props.startDate, dateFormatString, true).isValid() ||
        !moment(this.props.endDate, dateFormatString, true).isValid()) {
        return this.props.onInputInvalidDates();
      }

      requestUrl += `?start_date=${this.props.startDate}&end_date=${this.props.endDate}&show_all=${this.state.view}`;
    }

    if (this.state.queries.sort) {
      // append sort criteria
      const col = this.state.queries.sort.column;
      const dir = this.state.queries.sort.ascending;

      requestUrl += `&query[${sortKeyMap[col]}]=${sortKeyMap[dir]}`;
    }

    if (this.state.queries.filter) {
      // append filter criteria
      const filterKeys = Object.keys(this.state.queries.filter);

      filterKeys.forEach((col) => {
        requestUrl += `&query[${filterKeyMap[col]}]=${Object.values(this.state.queries.filter[col]).join(',')}`;
      });
    }

    const requestOptions = {
      timeout: { response: getMinutesToMilliseconds(2) }
    };

    return ApiUtil.get(requestUrl, requestOptions, ENDPOINT_NAMES.HEARINGS_SCHEDULE).then((response) => {
      const resp = ApiUtil.convertToCamelCase(response.body);

      this.props.onReceiveHearingSchedule(resp.hearings);
      this.props.onViewStartDateChange(formatDateStr(resp.startDate, dateFormatString, dateFormatString));
      this.props.onViewEndDateChange(formatDateStr(resp.endDate, dateFormatString, dateFormatString));

      this.setState({
        loading: false,
        currentPage: resp.pagination.page,
        totalCases: resp.pagination.count,
        currentCases: resp.pagination.items,
        totalPages: resp.pagination.pages,
        pageSize: resp.pagination.in,
        filterOptions: resp.filterOptions
      });
    });
  };

  openModal = (event) => {
    this.setState({
      showModalAlert: false,
      modalOpen: true,
      serverError: false,
      noRoomsAvailable: false,
      modalButton: event.target
    });
    this.props.onSelectedHearingDayChange('');
    this.props.selectRequestType('');
    this.props.onRegionalOfficeChange('');
    this.props.selectVlj(null);
    this.props.selectHearingCoordinator(null);
    this.props.setNotes('');
    this.props.onAssignHearingRoom(true);
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      showModalAlert: true
    });
  };

  cancelModal = () => {
    // Move the focus back to the button that opened the modal
    this.state.modalButton.focus();

    this.setState({
      modalOpen: false,
      modalButton: null
    });
  };

  getAlertTitle = () => {
    if (this.props.successfulHearingDayDelete) {
      return `You have successfully removed Hearing Day ${formatDateStr(this.props.successfulHearingDayDelete)}`;
    }

    if (['Saturday', 'Sunday'].includes(moment(this.props.selectedHearingDay).format('dddd'))) {
      return `The Hearing day you created for ${formatDateStr(this.props.selectedHearingDay)} is a Saturday or Sunday.`;
    }

    return `You have successfully added Hearing Day ${formatDateStr(this.props.successfulHearingDayCreate)}`;

  };

  getAlertMessage = () => {
    if (this.props.successfulHearingDayDelete) {
      return '';
    }

    if (['Saturday', 'Sunday'].includes(moment(this.props.selectedHearingDay).format('dddd'))) {
      return 'If this was done in error, please remove hearing day from Hearing Schedule.';
    }

    return <p>To add Veterans to this date, click Schedule Veterans</p>;
  };

  getAlertType = () => {
    if (['Saturday', 'Sunday'].includes(moment(this.props.selectedHearingDay).format('dddd'))) {
      return 'warning';
    }

    return 'success';
  };

  getHeader = () => {
    const { user } = this.props;

    if (user.userCanViewHearingSchedule || user.userCanVsoHearingSchedule) {
      return COPY.HEARING_SCHEDULE_VIEW_PAGE_HEADER_NONBOARD_USER;
    } else if (user.userHasHearingPrepRole) {
      return this.state.view === LIST_SCHEDULE_VIEWS.DEFAULT_VIEW ?
        COPY.HEARING_SCHEDULE_JUDGE_DEFAULT_VIEW_PAGE_HEADER :
        COPY.HEARING_SCHEDULE_JUDGE_SHOW_ALL_VIEW_PAGE_HEADER;
    }

    return COPY.HEARING_SCHEDULE_VIEW_PAGE_HEADER;
  }

  render() {
    const user = this.props.user;

    // Determine the path to render the correct component
    const addHearingDay = (/add_hearing_day/).test(this.props.location.pathname);

    return (
      <React.Fragment>
        {!addHearingDay && <QueueCaseSearchBar />}
        <UserAlerts />
        {(this.props.successfulHearingDayCreate || this.props.successfulHearingDayDelete) &&
          <Alert type={this.getAlertType()} title={this.getAlertTitle()} scrollOnAlert={false}>
            {this.getAlertMessage()}
          </Alert>
        }
        { this.props.invalidDates && <Alert type="error" title="Please enter valid dates." /> }
        {addHearingDay ? (
          <AddHearingDay cancelModal={this.cancelModal} user={user} />
        ) : (
          <AppSegment filledBackground>
            <h1 className="cf-push-left">
              {this.getHeader()}
            </h1>
            <div className="cf-push-right">
              {user.userCanAssignHearingSchedule &&
            <span className="cf-push-left" {...actionButtonsStyling}>
              <Link button="primary" to="/schedule/assign">Schedule Veterans</Link>
            </span>
              }
              {user.userCanBuildHearingSchedule &&
            <span className="cf-push-left">
              <Link button="secondary" to="/schedule/build">Build Schedule</Link>
            </span>
              }
            </div>
            <div className="cf-help-divider" {...hearingSchedStyling} ></div>
            {this.state.loading &&
              <LoadingScreen
                spinnerColor = {LOGO_COLORS.HEARINGS.ACCENT}
                message = "Loading the hearing schedule..."
              />
            }
            <ListSchedule
              hearingSchedule={this.props.hearingSchedule}
              fetchHearings={this.loadHearingSchedule}
              user={user}
              view={this.state.view}
              switchListView={this.switchListView}
              filterOptions={this.state.filterOptions}
              updateQueries={this.updateQueries}
            />
            <Pagination
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              currentCases={this.state.currentCases}
              totalPages={this.state.totalPages}
              totalCases={this.state.totalCases}
              updatePage={(index) => this.loadHearingSchedule(index)}
            />
          </AppSegment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  hearingSchedule: state.hearingSchedule.hearingSchedule,
  startDate: state.hearingSchedule.viewStartDate,
  endDate: state.hearingSchedule.viewEndDate,
  selectedHearingDay: state.hearingSchedule.selectedHearingDay,
  selectedRegionalOffice: state.components.selectedRegionalOffice,
  requestType: state.hearingSchedule.requestType,
  vlj: state.hearingSchedule.vlj,
  coordinator: state.hearingSchedule.coordinator,
  notes: state.hearingSchedule.notes,
  roomRequired: state.hearingSchedule.roomRequired,
  successfulHearingDayDelete: state.hearingSchedule.successfulHearingDayDelete,
  successfulHearingDayCreate: state.hearingSchedule.successfulHearingDayCreate,
  invalidDates: state.hearingSchedule.invalidDates
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onViewStartDateChange,
  onViewEndDateChange,
  onReceiveHearingSchedule,
  onInputInvalidDates,
  onResetInvalidDates,
  onSelectedHearingDayChange,
  selectRequestType,
  selectVlj,
  selectHearingCoordinator,
  setNotes,
  onAssignHearingRoom,
  onRegionalOfficeChange,
  onResetDeleteSuccessful
}, dispatch);

ListScheduleContainer.propTypes = {
  endDate: PropTypes.string,
  hearingSchedule: PropTypes.object,
  invalidDates: PropTypes.bool,
  onAssignHearingRoom: PropTypes.func,
  onInputInvalidDates: PropTypes.func,
  onReceiveHearingSchedule: PropTypes.func,
  onRegionalOfficeChange: PropTypes.func,
  onResetDeleteSuccessful: PropTypes.func,
  onResetInvalidDates: PropTypes.func,
  onSelectedHearingDayChange: PropTypes.func,
  onViewEndDateChange: PropTypes.func,
  onViewStartDateChange: PropTypes.func,
  selectedHearingDay: PropTypes.string,
  selectHearingCoordinator: PropTypes.func,
  selectRequestType: PropTypes.func,
  selectVlj: PropTypes.func,
  setNotes: PropTypes.func,
  startDate: PropTypes.string,
  successfulHearingDayDelete: PropTypes.string,
  successfulHearingDayCreate: PropTypes.string,
  user: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListScheduleContainer));

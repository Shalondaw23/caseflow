import { sprintf } from 'sprintf-js';
import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';
import PropTypes from 'prop-types';
import React from 'react';

import { VSOAppellantSection } from './VirtualHearings/VSOAppellantSection';
import { HelperText } from './VirtualHearings/HelperText';
import { VSORepresentativeSection } from './VirtualHearings/VSORepresentativeSection';
import { getAppellantTitle } from '../utils';
import { marginTop, saveButton, cancelButton } from './details/style';
import Button from '../../components/Button';
import COPY from '../../../COPY';

export const VSOHearingTypeConversionForm = ({
  appeal,
  isLoading,
  onCancel,
  onSubmit,
  type,
}) => {
  // 'Appellant' or 'Veteran'
  const appellantTitle = getAppellantTitle(appeal?.appellantIsNotVeteran);

  /* eslint-disable camelcase */
  // powerOfAttorney gets loaded into redux store when case details page loads
  const hearing = {
    representative: appeal?.powerOfAttorney?.representative_name,
    representativeType: appeal?.powerOfAttorney?.representative_type,
    appellantFullName: appeal?.appellantFullName,
    appellantIsNotVeteran: appeal?.appellantIsNotVeteran,
    veteranFullName: appeal?.veteranFullName,
  };

  // veteranInfo gets loaded into redux store when case details page loads
  const virtualHearing = {
    appellantEmail: appeal?.veteranInfo?.veteran?.email_address,
    representativeEmail: appeal?.powerOfAttorney?.representative_email_address,
  };
  /* eslint-enable camelcase */

  // Set the section props
  const sectionProps = {
    appellantTitle,
    hearing,
    readOnly: true,
    showDivider: false,
    showOnlyAppellantName: true,
    showMissingEmailAlert: true,
    type,
    virtualHearing,
  };

  const convertTitle = sprintf(COPY.CONVERT_HEARING_TYPE_TITLE, type);
  const convertSubtitle = sprintf(
    COPY.CONVERT_HEARING_TYPE_SUBTITLE,
    appeal?.closestRegionalOfficeLabel ?
      `<strong>${appeal.closestRegionalOfficeLabel}</strong>` :
      COPY.CONVERT_HEARING_TYPE_DEFAULT_REGIONAL_OFFICE_TEXT
  );

  return (
    <React.Fragment>
      <AppSegment filledBackground>
        <h1 className="cf-margin-bottom-0">{convertTitle}</h1>
        <HelperText label={COPY.CONVERT_HEARING_TYPE_SUBTITLE_3} />
        <VSOAppellantSection {...sectionProps} />
        <VSORepresentativeSection {...sectionProps} showDivider />
      </AppSegment>
      <div {...marginTop(30)}>
        <Button
          name="Cancel"
          linkStyling
          onClick={onCancel}
          styling={cancelButton}
        >
          Cancel
        </Button>
        <span {...saveButton}>
          <Button
            name={convertTitle}
            loading={isLoading}
            className="usa-button"
            onClick={onSubmit}
          >
            {convertTitle}
          </Button>
        </span>
      </div>
    </React.Fragment>
  );
};

VSOHearingTypeConversionForm.defaultProps = {
  isLoading: false
};

VSOHearingTypeConversionForm.propTypes = {
  appeal: PropTypes.object,
  type: PropTypes.oneOf(['Virtual']),
  isLoading: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
};

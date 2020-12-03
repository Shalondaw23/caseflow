import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Modal from 'app/components/Modal';
import DateSelector from 'app/components/DateSelector';
import COPY from 'app/../COPY';
import { useDispatch } from 'react-redux';
import { resetSuccessMessages, showSuccessMessage } from '../uiReducer/uiActions';
import { editAppeal } from '../QueueActions';
import ApiUtil from '../../util/ApiUtil';
import moment from 'moment';

export const EditNodDateModalContainer = ({ onCancel, onSubmit, nodDate, appealId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSuccessMessages());
  }, []);

  const handleSubmit = (receiptDate) => {
    const successMessage = {
      title: COPY.EDIT_NOD_DATE_SUCCESS_ALERT_TITLE,
      detail: COPY.EDIT_NOD_DATE_SUCCESS_ALERT_MESSAGE,
    };
    const payload = { data: { receipt_date: receiptDate } };

    ApiUtil.patch(`/appeals/${appealId}/update_nod_date`, payload).then(() => {
      dispatch(editAppeal(appealId, { nodDate: receiptDate }));
      dispatch(showSuccessMessage(successMessage));
      onSubmit?.();
      window.scrollTo(0, 0);
    });
  };

  return (
    <EditNodDateModal
      onCancel={onCancel}
      onSubmit={handleSubmit}
      nodDate={nodDate}
      appealId={appealId}
    />
  );
};

export const EditNodDateModal = ({ onCancel, onSubmit, nodDate }) => {
  const [receiptDate, setReceiptDate] = useState(nodDate);
  const [futureDate, setFutureDate] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const buttons = [
    {
      classNames: ['cf-modal-link', 'cf-btn-link'],
      name: 'Cancel',
      onClick: onCancel
    },
    {
      classNames: ['usa-button', 'usa-button-primary'],
      name: 'Submit',
      // For future disable use cases
      disabled: disableButton,
      onClick: () => onSubmit(receiptDate)
    }
  ];

  const isFutureDate = (newDate) => {
    const today = new Date();
    const todaysDate = moment(today.toISOString());
    const date = moment(newDate);

    return (date > todaysDate);
  };

  const handleDateChange = (value) => {
    if (isFutureDate(value)) {
      setFutureDate(true);
      setDisableButton(true);
      setReceiptDate(value);
    } else {
      setReceiptDate(value);
      setDisableButton(false);
      setFutureDate(false);
    }
  };

  return (
    <Modal
      title={COPY.EDIT_NOD_DATE_MODAL_TITLE}
      onCancel={onCancel}
      onSubmit={onSubmit}
      closeHandler={onCancel}
      buttons={buttons}>
      <div>
        <ReactMarkdown source={COPY.EDIT_NOD_DATE_MODAL_DESCRIPTION} />
      </div>
      <DateSelector
        name="nodDate"
        errorMessage={futureDate ? COPY.EDIT_NOD_DATE_ERROR_ALERT_MESSAGE : null}
        label={COPY.EDIT_NOD_DATE_LABEL}
        strongLabel
        type="date"
        value={receiptDate}
        onChange={handleDateChange}
      />
    </Modal>
  );
};

EditNodDateModalContainer.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  nodDate: PropTypes.string.isRequired,
  appealId: PropTypes.string.isRequired
};

EditNodDateModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  nodDate: PropTypes.string.isRequired,
  appealId: PropTypes.string.isRequired
};

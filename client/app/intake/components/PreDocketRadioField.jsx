import React from 'react';
import RadioField from '../../components/RadioField';
import PropTypes from 'prop-types';

const radioOptions = [
  {
    value: 'true',
    displayText: 'Yes'
  },
  {
    value: 'false',
    displayText: 'No'
  }
];

export default class PreDocketRadioField extends React.PureComponent {
  render = () => {
    const {
      value,
      onChange,
      register
    } = this.props;

    return (
      <div
        className="cf-is-predocket-needed"
        style={{ height: '4em', marginTop: '20px' }}
      >
        <RadioField
          name="is-predocket-needed"
          label={
            <span>
              <b>Is pre-docketing needed for this issue?</b>
            </span>
          }
          options={radioOptions}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          value={value}
          inputRef={register}
        />
      </div>
    );
  }
}

PreDocketRadioField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  register: PropTypes.func
};

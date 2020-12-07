import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
      {label && (
        <FormInputLabelContainer value={value}>{label}</FormInputLabelContainer>
      )}
    </GroupContainer>
  );
};

export default FormInput;

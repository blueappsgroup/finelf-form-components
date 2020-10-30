import _pt from "prop-types";
import React, { useContext } from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { formStatuses } from '../../consts/form';
import { FormContext } from '../../utils';
const StyledText = styled.span`
  display: ${props => props.show ? 'block' : 'none'};
  color: ${props => props.isError ? props.theme.errorStatusTextColor : props.theme.successStatusTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`;

const FormStatusText = ({
  successText,
  errorText
}) => {
  const {
    errorFromApi
  } = useContext(FormContext);
  const {
    status,
    dirty
  } = useFormikContext();
  const isError = status === formStatuses.error || errorFromApi === true;
  const showStatusText = status === formStatuses.submited && !dirty || isError;
  return /*#__PURE__*/React.createElement(StyledText, {
    show: showStatusText,
    isError: isError
  }, isError ? errorText : successText);
};

FormStatusText.propTypes = {
  successText: _pt.string.isRequired,
  errorText: _pt.string.isRequired
};
export default FormStatusText;
//# sourceMappingURL=index.js.map
import _pt from "prop-types";
import React, { useContext } from 'react';
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
    errorFromApi,
    formStatus
  } = useContext(FormContext);
  const isError = formStatus === formStatuses.error || formStatus === formStatuses.agrrementsError || errorFromApi === true;
  const showStatusText = formStatus === formStatuses.submited || isError;
  const showAgreementsError = formStatus === formStatuses.agrrementsError;
  return /*#__PURE__*/React.createElement(StyledText, {
    show: showStatusText,
    isError: isError
  }, !isError && successText, !showAgreementsError && isError && errorText, showAgreementsError && formStatuses.agrrementsError);
};

FormStatusText.propTypes = {
  successText: _pt.string.isRequired,
  errorText: _pt.string.isRequired
};
export default FormStatusText;
//# sourceMappingURL=index.js.map
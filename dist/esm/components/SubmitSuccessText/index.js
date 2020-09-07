import _pt from "prop-types";
import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
const StyledText = styled.span`
  display: ${props => props.show ? 'block' : 'none'};
  color: ${props => props.theme.successTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`;

const SubmitSuccessText = ({
  text
}) => {
  const {
    status,
    dirty
  } = useFormikContext();
  return /*#__PURE__*/React.createElement(StyledText, {
    show: status === 'submited' && !dirty
  }, text);
};

SubmitSuccessText.propTypes = {
  text: _pt.string.isRequired
};
export default SubmitSuccessText;
//# sourceMappingURL=index.js.map
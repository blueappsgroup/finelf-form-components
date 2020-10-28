import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
const StyledInput = styled.input`
  display: none;
`;

const TransactionId = () => /*#__PURE__*/React.createElement(Field, {
  name: "transaction_id",
  component: StyledInput
});

export default TransactionId;
//# sourceMappingURL=index.js.map
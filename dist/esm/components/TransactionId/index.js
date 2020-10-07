import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
const StyledInput = styled.input`
  display: none;
`;

const TrasactionId = () => /*#__PURE__*/React.createElement(Field, {
  name: "trasaction_id",
  component: StyledInput
});

export default TrasactionId;
//# sourceMappingURL=index.js.map
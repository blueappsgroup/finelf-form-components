function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { ThemeProvider } from '../../consts/theme';
import { device } from '../../consts/sizes';
import RedirectPage from '../RedirectPage';
import TransactionId from '../TransactionId';
import { FormContext, getFormValuesFromCache, resetFormValueCache, handleSendDataToApi } from '../../utils';
import { formStatuses } from '../../consts/form';
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-self: center;
  margin: 0 10px;
  background: ${props => props.theme.formBgColor};
  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 20px 15px;
  border-radius: 6px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08);

  @media ${device.tablet} {
    padding: 20px 30px;
    margin: 0 auto;
  }
`;

const FormWrapper = ({
  children,
  onSubmit,
  customTheme,
  id,
  stepsLength,
  stepsTitles,
  hasRedirect,
  redirectUrl,
  timeToRedirect,
  redirectHeaderText,
  logoImg,
  redirectMainImg,
  redirectBgImg,
  sendDataToApi,
  apiUrl,
  transactionName
}) => {
  const trasationIdValue = transactionName && new URLSearchParams(window.location.search).get(transactionName);
  const [initialValues, setInitialValues] = useState(_objectSpread(_objectSpread({}, getFormValuesFromCache(id)), {}, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    trasaction_id: trasationIdValue
  }));
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = async (values, props) => {
    if (onSubmit) {
      onSubmit(values, props);
    }

    try {
      if (sendDataToApi && apiUrl) {
        await handleSendDataToApi(values, apiUrl, id);
      }

      props.resetForm();
      props.setStatus(formStatuses.submited);
    } catch (e) {
      console.log(e);
      props.setStatus(formStatuses.error);
    }
  };

  const handleReset = () => {
    resetFormValueCache(id); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    setInitialValues({});
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const nextStep = () => setCurrentStep(currentStep + 1);

  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      id,
      apiUrl,
      stepsLength,
      currentStep,
      stepsTitleList: stepsTitles,
      nextStep,
      prevStep
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    customTheme: _objectSpread({}, customTheme)
  }, /*#__PURE__*/React.createElement(Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: handleSubmit,
    onReset: handleReset
  }, props => hasRedirect && props.status === formStatuses.submited && /*#__PURE__*/React.createElement(RedirectPage, {
    redirectUrl: redirectUrl,
    backgroundImage: redirectBgImg,
    logoImg: logoImg,
    headerText: redirectHeaderText,
    timeToRedirect: timeToRedirect,
    mainImg: redirectMainImg
  }) || /*#__PURE__*/React.createElement(StyledForm, {
    id: id
  }, /*#__PURE__*/React.createElement(TransactionId, null), children))));
};

export default FormWrapper;
//# sourceMappingURL=index.js.map
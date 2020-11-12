function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { ThemeProvider } from '../../consts/theme';
import RedirectPage from '../RedirectPage';
import { FormContext, getFormValuesFromCache, resetFormValueCache, handleSendDataToApi, getFieldsValuesFromUrl } from '../../utils';
import { formStatuses } from '../../consts/form';
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.formMaxWidth};
  justify-self: center;
  background: ${props => props.theme.formBgColor};
  font-family: ${props => props.theme.fontFamily};
  border-radius: 6px;
  box-shadow: ${props => props.theme.formBoxShadow};
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
  transactionName,
  propertyNamesFromUrl,
  dataWithUserAgent
}) => {
  const trasationIdValue = transactionName && new URLSearchParams(window.location.search).get(transactionName);
  const intialValuesFromUrl = useMemo(() => propertyNamesFromUrl && propertyNamesFromUrl.length > 0 && getFieldsValuesFromUrl(propertyNamesFromUrl) || {}, [propertyNamesFromUrl]);
  const [redirectUrlPath, setRedirectUrlPath] = useState(redirectUrl);
  const [initialValues, setInitialValues] = useState(_objectSpread(_objectSpread(_objectSpread({}, intialValuesFromUrl), getFormValuesFromCache(id)), {}, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    trasaction_id: trasationIdValue
  }));
  const [currentStep, setCurrentStep] = useState(0);
  const [fieldsForSkip, setFieldsForSkip] = useState([]);
  const [errorFromApi, setErrorFromApi] = useState(false);
  const shouldRedirect = !errorFromApi && hasRedirect;

  const addFieldForSkip = key => setFieldsForSkip([...fieldsForSkip, key]);

  const handleSubmit = async (values, props) => {
    if (onSubmit) {
      onSubmit(values, props);
    }

    try {
      if (sendDataToApi && apiUrl) {
        const response = await handleSendDataToApi(values, apiUrl, id, fieldsForSkip, dataWithUserAgent);
        const {
          redirectUrl: urlFromApi,
          status: statusFromApi
        } = await response.json();

        if (statusFromApi === false) {
          setErrorFromApi(true);
          return;
        }

        urlFromApi && setRedirectUrlPath(urlFromApi);
      }

      props.resetForm();
      props.setStatus(formStatuses.submited);
    } catch (e) {
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
      prevStep,
      fieldsForSkip,
      addFieldForSkip,
      errorFromApi
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    customTheme: _objectSpread({}, customTheme)
  }, /*#__PURE__*/React.createElement(Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: handleSubmit,
    onReset: handleReset
  }, props => shouldRedirect && props.status === formStatuses.submited && /*#__PURE__*/React.createElement(RedirectPage, {
    redirectUrl: redirectUrlPath,
    backgroundImage: redirectBgImg,
    logoImg: logoImg,
    headerText: redirectHeaderText,
    timeToRedirect: timeToRedirect,
    mainImg: redirectMainImg
  }) || /*#__PURE__*/React.createElement(StyledForm, {
    id: id
  }, children))));
};

export default FormWrapper;
//# sourceMappingURL=index.js.map
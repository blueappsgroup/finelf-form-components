(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "styled-components", "../../consts/theme", "../RedirectPage", "../../utils", "../../consts/form", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("styled-components"), require("../../consts/theme"), require("../RedirectPage"), require("../../utils"), require("../../consts/form"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.styledComponents, global.theme, global.RedirectPage, global.utils, global.form, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _styledComponents, _theme, _RedirectPage, _utils, _form, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StyledForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _RedirectPage2 = _interopRequireDefault(_RedirectPage);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const StyledForm = exports.StyledForm = (0, _styledComponents2.default)(_formik.Form)`
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
    dataWithUserAgent,
    sumitButtonText = 'Wyślij'
  }) => {
    const trasationIdValue = transactionName && new URLSearchParams(window.location.search).get(transactionName);
    const intialValuesFromUrl = (0, _react.useMemo)(() => propertyNamesFromUrl && propertyNamesFromUrl.length > 0 && (0, _utils.getFieldsValuesFromUrl)(propertyNamesFromUrl) || {}, [propertyNamesFromUrl]);
    const [redirectUrlPath, setRedirectUrlPath] = (0, _react.useState)(redirectUrl);
    const [initialValues, setInitialValues] = (0, _react.useState)(_objectSpread(_objectSpread(_objectSpread({}, intialValuesFromUrl), (0, _utils.getFormValuesFromCache)(id)), {}, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      trasaction_id: trasationIdValue
    }));
    const [currentStep, setCurrentStep] = (0, _react.useState)(0);
    const [fieldsForSkip, setFieldsForSkip] = (0, _react.useState)([]);
    const [errorFromApi, setErrorFromApi] = (0, _react.useState)(false);
    const [formStatus, setFormStatus] = (0, _react.useState)();
    const shouldRedirect = !errorFromApi && hasRedirect;
    const showForm = formStatus !== _form.formStatuses.submited || !shouldRedirect;

    const addFieldForSkip = key => setFieldsForSkip([...fieldsForSkip, key]);

    const handleReset = () => {
      (0, _utils.resetFormValueCache)(id); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      setInitialValues(_objectSpread(_objectSpread({}, intialValuesFromUrl), {}, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        trasaction_id: trasationIdValue
      }));
    };

    const handleSubmit = async (_, props) => {
      const valuesForSubmit = _objectSpread(_objectSpread({}, initialValues), (0, _utils.getFormValuesFromCache)(id));

      if (onSubmit) {
        onSubmit(valuesForSubmit, props);
      }

      try {
        if (sendDataToApi && apiUrl) {
          const response = await (0, _utils.handleSendDataToApi)(valuesForSubmit, apiUrl, id, fieldsForSkip, dataWithUserAgent);
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

        handleReset();
        setFormStatus(_form.formStatuses.submited);
      } catch (e) {
        setFormStatus(_form.formStatuses.error);
      }
    };

    const prevStep = () => setCurrentStep(currentStep - 1);

    const nextStep = () => setCurrentStep(currentStep + 1);

    return /*#__PURE__*/_react2.default.createElement(_utils.FormContext.Provider, {
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
        errorFromApi,
        initialValues,
        setInitialValues,
        handleSubmit,
        formStatus,
        setFormStatus
      }
    }, /*#__PURE__*/_react2.default.createElement(_theme.ThemeProvider, {
      customTheme: _objectSpread({}, customTheme)
    }, shouldRedirect && formStatus === _form.formStatuses.submited && /*#__PURE__*/_react2.default.createElement(_RedirectPage2.default, {
      redirectUrl: redirectUrlPath,
      backgroundImage: redirectBgImg,
      logoImg: logoImg,
      headerText: redirectHeaderText,
      timeToRedirect: timeToRedirect,
      mainImg: redirectMainImg
    }), !stepsLength && showForm && /*#__PURE__*/_react2.default.createElement(_formik.Formik, {
      validateOnMount: true,
      enableReinitialize: true,
      initialValues: initialValues,
      onSubmit: handleSubmit,
      render: ({
        isValid
      }) => /*#__PURE__*/_react2.default.createElement(StyledForm, {
        id: id
      }, children, formStatus !== _form.formStatuses.agrrementsError && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
        disabled: !isValid,
        text: sumitButtonText,
        type: "submit"
      }))
    }), stepsLength && showForm && children));
  };

  exports.default = FormWrapper;
});
//# sourceMappingURL=index.js.map
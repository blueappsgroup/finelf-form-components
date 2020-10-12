(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "styled-components", "../../consts/theme", "../../consts/sizes", "../RedirectPage", "../TransactionId", "../../utils", "../../consts/form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("styled-components"), require("../../consts/theme"), require("../../consts/sizes"), require("../RedirectPage"), require("../TransactionId"), require("../../utils"), require("../../consts/form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.styledComponents, global.theme, global.sizes, global.RedirectPage, global.TransactionId, global.utils, global.form);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _styledComponents, _theme, _sizes, _RedirectPage, _TransactionId, _utils, _form) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _RedirectPage2 = _interopRequireDefault(_RedirectPage);

  var _TransactionId2 = _interopRequireDefault(_TransactionId);

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

  const StyledForm = (0, _styledComponents2.default)(_formik.Form)`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.formMaxWidth};
  justify-self: center;
  margin: 0 10px;
  background: ${props => props.theme.formBgColor};
  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 20px 15px;
  border-radius: 6px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08);

  @media ${_sizes.device.tablet} {
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
    transactionName,
    propertyNamesFromUrl
  }) => {
    const trasationIdValue = transactionName && new URLSearchParams(window.location.search).get(transactionName);
    const intialValuesFromUrl = (0, _react.useMemo)(() => propertyNamesFromUrl && propertyNamesFromUrl.length > 0 && (0, _utils.getFieldsValuesFromUrl)(propertyNamesFromUrl) || {}, [propertyNamesFromUrl]);
    const [initialValues, setInitialValues] = (0, _react.useState)(_objectSpread(_objectSpread(_objectSpread({}, intialValuesFromUrl), (0, _utils.getFormValuesFromCache)(id)), {}, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      trasaction_id: trasationIdValue
    }));
    const [currentStep, setCurrentStep] = (0, _react.useState)(0);
    const [fieldsForSkip, setFieldsForSkip] = (0, _react.useState)([]);

    const addFieldForSkip = key => setFieldsForSkip([...fieldsForSkip, key]);

    const handleSubmit = async (values, props) => {
      if (onSubmit) {
        onSubmit(values, props);
      }

      try {
        if (sendDataToApi && apiUrl) {
          await (0, _utils.handleSendDataToApi)(values, apiUrl, id, fieldsForSkip);
        }

        props.resetForm();
        props.setStatus(_form.formStatuses.submited);
      } catch (e) {
        console.log(e);
        props.setStatus(_form.formStatuses.error);
      }
    };

    const handleReset = () => {
      (0, _utils.resetFormValueCache)(id); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      setInitialValues({});
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
        addFieldForSkip
      }
    }, /*#__PURE__*/_react2.default.createElement(_theme.ThemeProvider, {
      customTheme: _objectSpread({}, customTheme)
    }, /*#__PURE__*/_react2.default.createElement(_formik.Formik, {
      enableReinitialize: true,
      initialValues: initialValues,
      onSubmit: handleSubmit,
      onReset: handleReset
    }, props => hasRedirect && props.status === _form.formStatuses.submited && /*#__PURE__*/_react2.default.createElement(_RedirectPage2.default, {
      redirectUrl: redirectUrl,
      backgroundImage: redirectBgImg,
      logoImg: logoImg,
      headerText: redirectHeaderText,
      timeToRedirect: timeToRedirect,
      mainImg: redirectMainImg
    }) || /*#__PURE__*/_react2.default.createElement(StyledForm, {
      id: id
    }, /*#__PURE__*/_react2.default.createElement(_TransactionId2.default, null), children))));
  };

  exports.default = FormWrapper;
});
//# sourceMappingURL=index.js.map
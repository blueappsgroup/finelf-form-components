(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "styled-components", "../../consts/sizes", "../../consts/theme", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("styled-components"), require("../../consts/sizes"), require("../../consts/theme"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.styledComponents, global.sizes, global.theme, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _styledComponents, _sizes, _theme, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

  @media ${_sizes.device.tablet} {
    padding: 20px 30px;
    margin: 0 auto;
  }
`;

  const FormWrapper = ({
    children,
    onSubmit,
    customTheme,
    id
  }) => {
    const [initialValues, setInitialValues] = (0, _react.useState)((0, _utils.getFormValuesFromCache)(id));

    const handleSubmit = (values, props) => {
      if (onSubmit) {
        onSubmit(values, props);
      }

      props.resetForm();
      props.setStatus('submited');
    };

    const handleReset = () => {
      (0, _utils.resetFormValueCache)(id);
      setInitialValues({});
    };

    return /*#__PURE__*/_react2.default.createElement(_utils.FormContext.Provider, {
      value: {
        id
      }
    }, /*#__PURE__*/_react2.default.createElement(_styledComponents.ThemeProvider, {
      theme: _objectSpread(_objectSpread({}, _theme.theme), customTheme)
    }, /*#__PURE__*/_react2.default.createElement(_formik.Formik, {
      enableReinitialize: true,
      initialValues: initialValues,
      onSubmit: handleSubmit,
      onReset: handleReset
    }, /*#__PURE__*/_react2.default.createElement(StyledForm, {
      id: id
    }, children))));
  };

  exports.default = FormWrapper;
});
//# sourceMappingURL=index.js.map
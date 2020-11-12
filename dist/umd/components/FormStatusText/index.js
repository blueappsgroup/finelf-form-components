(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "formik", "styled-components", "../../consts/form", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("formik"), require("styled-components"), require("../../consts/form"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.formik, global.styledComponents, global.form, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _formik, _styledComponents, _form, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const StyledText = _styledComponents2.default.span`
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
    } = (0, _react.useContext)(_utils.FormContext);
    const {
      status,
      dirty
    } = (0, _formik.useFormikContext)();
    const isError = status === _form.formStatuses.error || errorFromApi === true;
    const showStatusText = status === _form.formStatuses.submited && !dirty || isError;
    return /*#__PURE__*/_react2.default.createElement(StyledText, {
      show: showStatusText,
      isError: isError
    }, isError ? errorText : successText);
  };

  FormStatusText.propTypes = {
    successText: _propTypes2.default.string.isRequired,
    errorText: _propTypes2.default.string.isRequired
  };
  exports.default = FormStatusText;
});
//# sourceMappingURL=index.js.map
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "../../consts/form", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("../../consts/form"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.form, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _form, _utils) {
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
      errorFromApi,
      formStatus
    } = (0, _react.useContext)(_utils.FormContext);
    const isError = formStatus === _form.formStatuses.error || formStatus === _form.formStatuses.agrrementsError || errorFromApi === true;
    const showStatusText = formStatus === _form.formStatuses.submited || isError;
    const showAgreementsError = formStatus === _form.formStatuses.agrrementsError;
    return /*#__PURE__*/_react2.default.createElement(StyledText, {
      show: showStatusText,
      isError: isError
    }, !isError && successText, !showAgreementsError && isError && errorText, showAgreementsError && _form.formStatuses.agrrementsError);
  };

  FormStatusText.propTypes = {
    successText: _propTypes2.default.string.isRequired,
    errorText: _propTypes2.default.string.isRequired
  };
  exports.default = FormStatusText;
});
//# sourceMappingURL=index.js.map
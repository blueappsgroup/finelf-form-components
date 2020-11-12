(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.styledComponents);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _styledComponents) {
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

  const StyledInput = _styledComponents2.default.input`
  display: none;
`;

  const TransactionId = () => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    name: "transaction_id",
    component: StyledInput
  });

  exports.default = TransactionId;
});
//# sourceMappingURL=index.js.map
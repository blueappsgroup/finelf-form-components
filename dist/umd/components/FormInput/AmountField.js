(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "./base"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("./base"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.base);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _base) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const AmountField = ({
    id,
    label = 'Kwota pożyczki',
    name,
    required = false,
    showError,
    showMinMax = true
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    showMinMax: showMinMax,
    id: id,
    name: name,
    component: _base.BaseRangeField,
    label: label,
    type: "text",
    min: 300,
    max: 10000,
    step: 100,
    value: 2000,
    suffix: 'PLN',
    unit: 'zł'
  });

  AmountField.defaultProps = {
    name: 'amount'
  };
  exports.default = AmountField;
});
//# sourceMappingURL=AmountField.js.map
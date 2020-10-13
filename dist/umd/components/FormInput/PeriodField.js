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

  const PeriodField = ({
    id,
    label = 'Okres spłaty',
    name,
    required = false,
    showError = true,
    showMinMax = true,
    min = 3,
    max = 60,
    step = 1,
    value = 12,
    suffix = 'Dni',
    unit = 'Dni'
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    showMinMax: showMinMax,
    id: id,
    name: name,
    component: _base.BaseRangeField,
    label: label,
    type: "text",
    min: min,
    max: max,
    step: step,
    value: value,
    suffix: suffix,
    unit: unit
  });

  PeriodField.defaultProps = {
    name: 'application_period'
  };
  exports.default = PeriodField;
});
//# sourceMappingURL=PeriodField.js.map
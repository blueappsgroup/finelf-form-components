(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "formik", "react", "./base"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("formik"), require("react"), require("./base"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formik, global.react, global.base);
    global.undefined = mod.exports;
  }
})(this, function (exports, _formik, _react, _base) {
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

  /* eslint-disable @typescript-eslint/camelcase */
  const options = {
    bills: 'rachunki',
    other_loans: 'inne pożyczki',
    vacation: 'wakacje',
    education: 'edukacja',
    car: 'samochód',
    medical_expenses: 'wydatki zdrowotne',
    renovation: 'renowacja',
    electronics: 'elektronika',
    furniture: 'meble',
    other: 'inne',
    investment: 'inwestycja',
    tax_payment: 'spłata podatków'
  };

  const LoanReasonField = ({
    id,
    label,
    name = 'loan_reason',
    required = false,
    showError
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options
  });

  exports.default = LoanReasonField;
});
//# sourceMappingURL=LoanReasonField.js.map
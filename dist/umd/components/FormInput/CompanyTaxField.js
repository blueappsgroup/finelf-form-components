(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./base", "./validate", "formik"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./base"), require("./validate"), require("formik"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.base, global.validate, global.formik);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _base, _validate, _formik) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _base2 = _interopRequireDefault(_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const CompanyTaxField = ({
    id,
    label = 'NIP firmy',
    placeholder = 'NIP firmy',
    name = 'company_tax_id',
    required = false,
    validate = _validate.validateCompanyTax,
    showError = true
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    id: id,
    label: label,
    placeholder: placeholder,
    component: _base2.default,
    required: required,
    showError: showError,
    name: name,
    validate: validate(required)
  });

  CompanyTaxField.defaultProps = {
    name: 'company_tax_id'
  };
  exports.default = CompanyTaxField;
});
//# sourceMappingURL=CompanyTaxField.js.map
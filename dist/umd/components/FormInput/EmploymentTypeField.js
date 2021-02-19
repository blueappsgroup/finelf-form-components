(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "./base", "./validate", "./CompanyTaxField", "./CompanyNameField"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("./base"), require("./validate"), require("./CompanyTaxField"), require("./CompanyNameField"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.base, global.validate, global.CompanyTaxField, global.CompanyNameField);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _base, _validate, _CompanyTaxField, _CompanyNameField) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _CompanyTaxField2 = _interopRequireDefault(_CompanyTaxField);

  var _CompanyNameField2 = _interopRequireDefault(_CompanyNameField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* eslint-disable @typescript-eslint/camelcase */
  const options = {
    fixed: 'umowa o pracę na czas nieokreślony',
    temporary: 'umowa o pracę na czas określony',
    self_employed: 'samozatrudnienie',
    fixed_partial: 'umowa o pracę na czas nieokreślony (niepełny etat)',
    government: 'stanowisko rządowe',
    unemployed: 'bezrobotny',
    pension: 'emeryt/rencista',
    agriculture: 'gospodarstwo rolne',
    student: 'student',
    housewife: 'gospodyni domowa',
    other: 'inne',
    service_contract: 'umowa zlecenie / umowa o dzieło'
  };
  const conditionValueListForCompanyNameField = ['fixed', 'temporary', 'fixed_partial', 'government', 'agriculture', 'service_contract'];

  const EmploymentTypeField = ({
    id,
    label,
    name = 'employment_type',
    required = false,
    validate,
    showError = true
  }) => {
    const {
      values,
      validateForm
    } = (0, _formik.useFormikContext)();
    const fieldValue = values[name];
    (0, _react.useEffect)(() => {
      validateForm();
    }, [fieldValue, validateForm]);
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_formik.Field, {
      required: required,
      showError: showError,
      id: id,
      name: name,
      component: _base.BaseSelectField,
      label: label,
      type: "select",
      options: options,
      validate: validate && validate(required) || (0, _validate.validateSelect)(required, options)
    }), name && values[name] === 'self_employed' && /*#__PURE__*/_react2.default.createElement(_CompanyTaxField2.default, {
      required: true,
      name: "company_tax_id"
    }), name && conditionValueListForCompanyNameField.includes(values[name]) && /*#__PURE__*/_react2.default.createElement(_CompanyNameField2.default, {
      required: true,
      name: "company_name"
    }));
  };

  EmploymentTypeField.defaultProps = {
    name: 'employment_type'
  };
  exports.default = EmploymentTypeField;
});
//# sourceMappingURL=EmploymentTypeField.js.map
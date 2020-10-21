(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./base", "./validate", "./CustomFieldWithCondition"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./base"), require("./validate"), require("./CustomFieldWithCondition"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.base, global.validate, global.CustomFieldWithCondition);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _base, _validate, _CustomFieldWithCondition) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _base2 = _interopRequireDefault(_base);

  var _CustomFieldWithCondition2 = _interopRequireDefault(_CustomFieldWithCondition);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const CompanyNameField = ({
    id,
    label = 'Nazwa pracodawcy',
    placeholder = 'Nazwa pracodawcy',
    name = 'company_name',
    required = false,
    validate = _validate.validateText,
    showError = true,
    requiredCondition,
    visibleCondition = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      employment_type: ['fixed', 'temporary', 'fixed_partial', 'government', 'agriculture', 'service_contract']
    }
  }) => /*#__PURE__*/_react2.default.createElement(_CustomFieldWithCondition2.default, {
    id: id,
    label: label,
    placeholder: placeholder,
    component: _base2.default,
    required: required,
    showError: showError,
    name: name,
    validate: validate,
    requiredCondition: requiredCondition,
    visibleCondition: visibleCondition
  });

  CompanyNameField.defaultProps = {
    name: 'company_name'
  };
  exports.default = CompanyNameField;
});
//# sourceMappingURL=CompanyNameField.js.map
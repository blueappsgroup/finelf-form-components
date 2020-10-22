(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "./base", "./validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("./base"), require("./validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.base, global.validate);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _base, _validate) {
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

  const BirthDateField = ({
    id,
    label,
    placeholder = 'Data urodzenia',
    name,
    required = false,
    showError = true,
    dateFormat
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    component: _base.BaseDateField,
    name: name,
    label: label,
    placeholder: placeholder,
    validate: (0, _validate.validateDate)(required),
    dateFormat: dateFormat
  });

  BirthDateField.defaultProps = {
    name: 'date_of_birth'
  };
  exports.default = BirthDateField;
});
//# sourceMappingURL=BirthDateField.js.map
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

  var _base2 = _interopRequireDefault(_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ZipCodeField = ({
    id,
    label = 'Kod pocztowy',
    placeholder = 'Kod pocztowy',
    name,
    required = false,
    validate = _validate.validateZipCode,
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

  ZipCodeField.defaultProps = {
    name: 'text_zip'
  };
  exports.default = ZipCodeField;
});
//# sourceMappingURL=ZipCodeField.js.map
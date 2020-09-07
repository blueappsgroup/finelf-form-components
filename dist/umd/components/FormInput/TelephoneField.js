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

  const TelephoneField = ({
    id,
    label,
    placeholder = 'Telefon',
    errorMsg = 'Nie poprawny numer telefonu',
    name = 'telepone',
    required = false
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _base2.default,
    label: label,
    placeholder: placeholder,
    type: "tel",
    validate: (0, _validate.validateTelNumber)(errorMsg, required)
  });

  exports.default = TelephoneField;
});
//# sourceMappingURL=TelephoneField.js.map
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "formik", "react", "./base", "./validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("formik"), require("react"), require("./base"), require("./validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formik, global.react, global.base, global.validate);
    global.undefined = mod.exports;
  }
})(this, function (exports, _formik, _react, _base, _validate) {
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

  const CityNameField = ({
    id,
    label = 'Miasto',
    placeholder,
    name,
    required = false,
    validate = _validate.validateCityName,
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

  CityNameField.defaultProps = {
    name: 'text_city'
  };
  exports.default = CityNameField;
});
//# sourceMappingURL=CityNameField.js.map
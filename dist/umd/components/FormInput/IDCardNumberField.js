(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./TextField", "./validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./TextField"), require("./validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.TextField, global.validate);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _TextField, _validate) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const IDCardNumberField = ({
    id,
    label = 'Numer dowodu osobistego',
    placeholder = 'Numer dowodu osobistego',
    name = 'id_card_number',
    required = true,
    validate = _validate.validateIDCardNumber,
    showError = true
  }) => /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    id: id,
    label: label,
    placeholder: placeholder,
    required: required,
    showError: showError,
    name: name,
    validate: validate
  });

  exports.default = IDCardNumberField;
});
//# sourceMappingURL=IDCardNumberField.js.map
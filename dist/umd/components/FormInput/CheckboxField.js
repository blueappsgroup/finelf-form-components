(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "./CheckBox", "./validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("./CheckBox"), require("./validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.CheckBox, global.validate);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _CheckBox, _validate) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _CheckBox2 = _interopRequireDefault(_CheckBox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const CheckboxFormField = ({
    id = 'textField',
    label,
    name = 'text field',
    required = false,
    onChange,
    children
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _CheckBox2.default,
    label: label,
    type: "checkbox",
    validate: (0, _validate.validateCheckbox)(required),
    onChange: onChange,
    childrenBody: children
  });

  exports.default = CheckboxFormField;
});
//# sourceMappingURL=CheckboxField.js.map
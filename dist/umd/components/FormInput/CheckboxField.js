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
    name = 'checkbox_field',
    required = false,
    onChange,
    children,
    HTMLcontent,
    skipFieldForApi,
    disableCollapse,
    hasReadMore,
    showMoreText = '(więcej)',
    showLessText = '(zwiń)'
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _CheckBox2.default,
    label: label,
    type: "checkbox",
    validate: (0, _validate.validateCheckbox)(required),
    onChange: onChange,
    childrenBody: children,
    HTMLcontent: HTMLcontent,
    skipFieldForApi: skipFieldForApi,
    disableCollapse: disableCollapse,
    hasReadMore: hasReadMore,
    showMoreText: showMoreText,
    showLessText: showLessText
  });

  CheckboxFormField.defaultProps = {
    name: 'checkbox_field'
  };
  exports.default = CheckboxFormField;
});
//# sourceMappingURL=CheckboxField.js.map
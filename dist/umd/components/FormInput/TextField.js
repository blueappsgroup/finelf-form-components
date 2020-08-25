(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "./base"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("./base"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.base);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _base) {
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

  const TextField = ({
    id,
    label,
    placeholder = 'Text',
    name = 'text field',
    required = false,
    validate
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _base2.default,
    label: label,
    placeholder: placeholder,
    type: "text",
    validate: validate
  });

  exports.default = TextField;
});
//# sourceMappingURL=TextField.js.map
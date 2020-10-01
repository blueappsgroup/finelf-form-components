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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* eslint-disable @typescript-eslint/camelcase */
  const options = {
    unmarried: 'panna/kawaler',
    married: 'mężatka/żonaty',
    divorced: 'rozwiedziona/rozwiedziony',
    widower: 'wdowa/wdowiec',
    with_parents: 'z rodzicami'
  };

  const MaritalStatusField = ({
    id,
    label,
    name = 'marital_status',
    required = false,
    showError
  }) => /*#__PURE__*/_react2.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options
  });

  MaritalStatusField.defaultProps = {
    name: 'amount_of_children'
  };
  exports.default = MaritalStatusField;
});
//# sourceMappingURL=MaritalStatusField.js.map
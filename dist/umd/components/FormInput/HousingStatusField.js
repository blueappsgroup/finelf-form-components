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
    propety: 'mieszkanie własne',
    with_parent: 'mieszkanie rodziców',
    rental: 'mieszkanie wynajmowane',
    room: 'pokój'
  };

  const HousingStatusField = ({
    id,
    label,
    name,
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

  HousingStatusField.defaultProps = {
    name: 'housing_status'
  };
  exports.default = HousingStatusField;
});
//# sourceMappingURL=HousingStatusField.js.map
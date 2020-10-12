(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "formik", "react", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("formik"), require("react"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.formik, global.react, global._);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _formik, _react, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const OptionalGroup = ({
    name,
    label,
    children
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {
      values
    } = (0, _formik.useFormikContext)();
    const groupVisible = !!values[name];
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_.CheckboxField, {
      skipFieldForApi: true,
      id: name,
      name: name,
      label: label
    }), groupVisible && /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, children));
  };

  OptionalGroup.propTypes = {
    name: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  };
  exports.default = OptionalGroup;
});
//# sourceMappingURL=index.js.map
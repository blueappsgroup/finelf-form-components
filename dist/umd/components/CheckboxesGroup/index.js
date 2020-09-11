(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "formik", "../FormInput/CheckboxField"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("formik"), require("../FormInput/CheckboxField"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formik, global.CheckboxField);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _formik, _CheckboxField) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const CheckboxesGroup = ({
    name,
    children
  }) => {
    const {
      setValues
    } = (0, _formik.useFormikContext)();
    const hasManyCheckboxes = Array.isArray(children);
    const checkboxesNames = hasManyCheckboxes ? children.map(item => item.props.name) : [children.props.name];

    const handleOnChange = ({
      target: {
        value
      }
    }) => {
      const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
        acc[`${item}`] = !!value;
        return acc;
      }, {});
      setValues({
        [name]: fieldsToUpdate
      });
    };

    return /*#__PURE__*/_react2.default.createElement(_formik.FieldArray, {
      name: name,
      render: arrayHelpers => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, {
        id: `${name}.selectAll`,
        name: `${name}.selectAll`,
        label: "Select all",
        onChange: handleOnChange
      }), children && !hasManyCheckboxes && /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, _extends({}, children.props, {
        name: `${name}.${children.props.name}`
      })), children && hasManyCheckboxes && children.map(item => /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, _extends({}, item.props, {
        key: item.props.name,
        name: `${name}.${item.props.name}`
      }))))
    });
  };

  exports.default = CheckboxesGroup;
});
//# sourceMappingURL=index.js.map
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "formik"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("formik"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.formik);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _formik) {
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

  const CustomFieldWithCondition = props => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {
      values,
      setFieldError
    } = (0, _formik.useFormikContext)();
    const [required, setRequired] = (0, _react.useState)(props.required || false);
    (0, _react.useEffect)(() => {
      if (!props.required && props.requiredCondition) {
        let isRequired = false;
        Object.keys(props.requiredCondition).some(key => {
          if (props.requiredCondition && props.requiredCondition[key].includes(values[key])) {
            isRequired = true;
            return true;
          }

          return false;
        });

        if (required !== isRequired) {
          setRequired(isRequired);
        }
      }
    }, [values, props.required, props.requiredCondition, required, props.name, setFieldError]);
    return /*#__PURE__*/_react2.default.createElement(_formik.Field, _extends({}, props, {
      required: required,
      validate: props.validate(required)
    }));
  };

  CustomFieldWithCondition.propTypes = {
    requiredCondition: _propTypes2.default.objectOf(_propTypes2.default.any)
  };
  exports.default = CustomFieldWithCondition;
});
//# sourceMappingURL=CustomFieldWithCondition.js.map
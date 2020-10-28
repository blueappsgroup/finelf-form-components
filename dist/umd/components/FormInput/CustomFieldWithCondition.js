(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "formik", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("formik"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.formik, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _formik, _utils) {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const CustomFieldWithCondition = props => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {
      values,
      errors,
      setErrors,
      setValues,
      setFieldTouched
    } = (0, _formik.useFormikContext)();
    const {
      id
    } = (0, _react.useContext)(_utils.FormContext);
    const [required, setRequired] = (0, _react.useState)(props.required || false);
    const [visible, setVisible] = (0, _react.useState)(props.visibleCondition && false || true);
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
    }, [values, props.required, props.requiredCondition, required, props.name]);
    (0, _react.useEffect)(() => {
      if (props.visibleCondition) {
        let isVisible = false;
        Object.keys(props.visibleCondition).some(key => {
          if (props.visibleCondition && props.visibleCondition[key].includes(values[key])) {
            isVisible = true;
            return true;
          }

          return false;
        });

        if (!isVisible && isVisible !== visible) {
          setValues(_objectSpread(_objectSpread({}, values), {}, {
            [props.name]: undefined
          }), false);
          setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            [props.name]: undefined
          }));
          (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, {
            [props.name]: undefined
          }), id);
          setVisible(isVisible);
        }

        if (isVisible && isVisible !== visible) {
          setVisible(isVisible);
        }
      }
    }, [values, setValues, props.visibleCondition, props.name, visible, errors, setErrors, id, required, setFieldTouched]);
    return /*#__PURE__*/_react2.default.createElement(_formik.Field, _extends({}, props, {
      required: required && visible,
      validate: props.validate(required && visible),
      visible: visible
    }));
  };

  CustomFieldWithCondition.propTypes = {
    requiredCondition: _propTypes2.default.objectOf(_propTypes2.default.any),
    visibleCondition: _propTypes2.default.objectOf(_propTypes2.default.any)
  };
  exports.default = CustomFieldWithCondition;
});
//# sourceMappingURL=CustomFieldWithCondition.js.map
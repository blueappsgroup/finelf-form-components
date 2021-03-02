(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "formik", "../", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("formik"), require("../"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.formik, global._, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _formik, _, _utils) {
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

  const OptionalGroup = ({
    name,
    label,
    children,
    hideChecked
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {
      values,
      setValues,
      validateForm
    } = (0, _formik.useFormikContext)();
    const {
      id
    } = (0, _react.useContext)(_utils.FormContext);
    const hasManyItems = Array.isArray(children);
    const itemsNames = (0, _react.useMemo)(() => hasManyItems ? children && children.map(item => item.props.name) : [children.props.name], [hasManyItems, children]);
    const itemsForResetValues = (0, _react.useMemo)(() => itemsNames.reduce((acc, item) => {
      acc[item] = undefined;
      return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {}), [itemsNames]);
    const groupVisible = hideChecked && !values[name] || !hideChecked && values[name];
    (0, _react.useEffect)(() => {
      if (!groupVisible) {
        const newValues = _objectSpread(_objectSpread({}, values), itemsForResetValues);

        setValues(newValues, false);
        (0, _utils.setFormValuesToCache)(newValues, id);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [groupVisible, itemsForResetValues, setValues, values[name]]);
    (0, _react.useEffect)(() => {
      validateForm(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values[name]]);
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_.CheckboxField, {
      disableCollapse: true,
      skipFieldForApi: true,
      id: name,
      name: name,
      label: label
    }), groupVisible && /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, children));
  };

  OptionalGroup.propTypes = {
    name: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired,
    groupType: _propTypes2.default.string,
    hideChecked: _propTypes2.default.bool
  };
  OptionalGroup.defaultProps = {
    groupType: 'optionalGroup'
  };
  exports.default = OptionalGroup;
});
//# sourceMappingURL=index.js.map
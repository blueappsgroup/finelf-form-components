(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "formik", "../FormInput/CheckboxField"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("formik"), require("../FormInput/CheckboxField"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.formik, global.CheckboxField);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _formik, _CheckboxField) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

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
  /* eslint-disable @typescript-eslint/no-explicit-any */


  const CheckboxesGroup = ({
    name,
    children
  }) => {
    const {
      values,
      setValues
    } = (0, _formik.useFormikContext)();
    const hasManyCheckboxes = Array.isArray(children);
    const checkboxesNames = (0, _react.useMemo)(() => hasManyCheckboxes ? children && children.map(item => item.props.name) : [children.props.name], [hasManyCheckboxes, children]);

    const handleOnChange = e => {
      const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
        acc[item] = e.target.value === 'true' ? false : true;
        return acc;
      }, {});
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        [name]: fieldsToUpdate
      }));
    };

    return /*#__PURE__*/_react2.default.createElement(_formik.FieldArray, {
      name: name,
      render: () => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, {
        id: `${name}.selectAll`,
        name: `${name}.selectAll`,
        label: "Zaznacz wszystkie zgody",
        onChange: handleOnChange
      }), children && !hasManyCheckboxes && /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, _extends({}, children.props, {
        name: `${name}.${children.props.name}`
      })), children && hasManyCheckboxes && children.map(item => /*#__PURE__*/_react2.default.createElement(_CheckboxField2.default, _extends({}, item.props, {
        key: item.props.name,
        name: `${name}.${item.props.name}`
      }))))
    });
  };

  CheckboxesGroup.propTypes = {
    name: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.any.isRequired
  };
  exports.default = CheckboxesGroup;
});
//# sourceMappingURL=index.js.map
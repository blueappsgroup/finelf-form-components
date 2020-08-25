(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../components/Button", "./button.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../components/Button"), require("./button.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.Button, global.button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Button = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * Primary UI component for user interaction
   */
  const Button = exports.Button = _ref => {
    let {
      primary = false,
      size = 'medium',
      backgroundColor,
      label
    } = _ref,
        props = _objectWithoutProperties(_ref, ["primary", "size", "backgroundColor", "label"]);

    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("button", _extends({
      type: "button",
      className: ['storybook-button', `storybook-button--${size}`, mode].join(' '),
      style: {
        backgroundColor
      }
    }, props), label), /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      text: "Sdasdas"
    }));
  };

  Button.propTypes = {
    primary: _propTypes2.default.bool,
    backgroundColor: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func
  };
});
//# sourceMappingURL=Button.js.map
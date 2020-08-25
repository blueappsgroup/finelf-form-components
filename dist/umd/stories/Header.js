(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./Button", "./header.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./Button"), require("./header.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.Button, global.header);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Header = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Header = exports.Header = ({
    user,
    onLogin,
    onLogout,
    onCreateAccount
  }) => /*#__PURE__*/_react2.default.createElement("header", null, /*#__PURE__*/_react2.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react2.default.createElement("div", null, /*#__PURE__*/_react2.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react2.default.createElement("path", {
    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
    fill: "#FFF"
  }), /*#__PURE__*/_react2.default.createElement("path", {
    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
    fill: "#555AB9"
  }), /*#__PURE__*/_react2.default.createElement("path", {
    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
    fill: "#91BAF8"
  }))), /*#__PURE__*/_react2.default.createElement("h1", null, "Acme")), /*#__PURE__*/_react2.default.createElement("div", null, user ? /*#__PURE__*/_react2.default.createElement(_Button.Button, {
    size: "small",
    onClick: onLogout,
    label: "Log out"
  }) : /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_Button.Button, {
    size: "small",
    onClick: onLogin,
    label: "Log in"
  }), /*#__PURE__*/_react2.default.createElement(_Button.Button, {
    primary: true,
    size: "small",
    onClick: onCreateAccount,
    label: "Sign up"
  })))));

  Header.propTypes = {
    user: _propTypes2.default.object,
    onLogin: _propTypes2.default.func.isRequired,
    onLogout: _propTypes2.default.func.isRequired,
    onCreateAccount: _propTypes2.default.func.isRequired
  };
});
//# sourceMappingURL=Header.js.map
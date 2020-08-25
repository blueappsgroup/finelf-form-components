(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Header"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Header"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Header);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _Header) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoggedOut = exports.LoggedIn = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    title: 'Example/Header',
    component: _Header.Header
  };

  const Template = args => /*#__PURE__*/_react2.default.createElement(_Header.Header, args);

  const LoggedIn = exports.LoggedIn = Template.bind({});
  LoggedIn.args = {
    user: {}
  };
  const LoggedOut = exports.LoggedOut = Template.bind({});
  LoggedOut.args = {};
});
//# sourceMappingURL=Header.stories.js.map
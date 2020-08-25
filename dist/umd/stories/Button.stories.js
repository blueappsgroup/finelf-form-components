(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Small = exports.Large = exports.Secondary = exports.Primary = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    title: 'Example/Button',
    component: _Button.Button,
    argTypes: {
      backgroundColor: {
        control: 'color'
      }
    }
  };

  const Template = args => /*#__PURE__*/_react2.default.createElement(_Button.Button, args);

  const Primary = exports.Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Button'
  };
  const Secondary = exports.Secondary = Template.bind({});
  Secondary.args = {
    label: 'Button'
  };
  const Large = exports.Large = Template.bind({});
  Large.args = {
    size: 'large',
    label: 'Button'
  };
  const Small = exports.Small = Template.bind({});
  Small.args = {
    size: 'small',
    label: 'Button'
  };
});
//# sourceMappingURL=Button.stories.js.map
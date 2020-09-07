(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global._);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Subheader = exports.Defualt = undefined;

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  exports.default = {
    title: 'Header',
    component: _.Header
  };

  const Template = args => /*#__PURE__*/React.createElement(_.Header, args);

  const Defualt = exports.Defualt = Template.bind({});
  Defualt.args = {
    text: 'Text'
  };
  const Subheader = exports.Subheader = Template.bind({});
  Subheader.args = {
    text: 'Subheader',
    type: 'subheader'
  };
});
//# sourceMappingURL=Header.stories.js.map
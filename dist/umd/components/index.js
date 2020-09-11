(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FormInput", "./Header", "./Button", "./Form", "./CheckboxesGroup", "./SubmitSuccessText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FormInput"), require("./Header"), require("./Button"), require("./Form"), require("./CheckboxesGroup"), require("./SubmitSuccessText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FormInput, global.Header, global.Button, global.Form, global.CheckboxesGroup, global.SubmitSuccessText);
    global.undefined = mod.exports;
  }
})(this, function (exports, _FormInput, _Header, _Button, _Form, _CheckboxesGroup, _SubmitSuccessText) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_FormInput).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _FormInput[key];
      }
    });
  });
  Object.defineProperty(exports, "Header", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Header).default;
    }
  });
  Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Button).default;
    }
  });
  Object.defineProperty(exports, "Form", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Form).default;
    }
  });
  Object.defineProperty(exports, "CheckboxesGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CheckboxesGroup).default;
    }
  });
  Object.defineProperty(exports, "SubmitSuccessText", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SubmitSuccessText).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map
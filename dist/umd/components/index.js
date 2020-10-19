(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FormInput", "./Header", "./Button", "./Form", "./CheckboxesGroup", "./FormStatusText", "./Step", "./RedirectPage", "./TransactionId", "./Agreements", "./Image", "./OptionalGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FormInput"), require("./Header"), require("./Button"), require("./Form"), require("./CheckboxesGroup"), require("./FormStatusText"), require("./Step"), require("./RedirectPage"), require("./TransactionId"), require("./Agreements"), require("./Image"), require("./OptionalGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FormInput, global.Header, global.Button, global.Form, global.CheckboxesGroup, global.FormStatusText, global.Step, global.RedirectPage, global.TransactionId, global.Agreements, global.Image, global.OptionalGroup);
    global.undefined = mod.exports;
  }
})(this, function (exports, _FormInput, _Header, _Button, _Form, _CheckboxesGroup, _FormStatusText, _Step, _RedirectPage, _TransactionId, _Agreements, _Image, _OptionalGroup) {
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
  Object.defineProperty(exports, "FormStatusText", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FormStatusText).default;
    }
  });
  Object.defineProperty(exports, "Step", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Step).default;
    }
  });
  Object.defineProperty(exports, "RedirectPage", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_RedirectPage).default;
    }
  });
  Object.defineProperty(exports, "TrasactionId", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TransactionId).default;
    }
  });
  Object.defineProperty(exports, "Agreements", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Agreements).default;
    }
  });
  Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Image).default;
    }
  });
  Object.defineProperty(exports, "OptionalGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionalGroup).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map
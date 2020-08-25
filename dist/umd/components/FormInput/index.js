(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./EmailField", "./TextField", "./TelephoneField", "./CheckboxField", "./base"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./EmailField"), require("./TextField"), require("./TelephoneField"), require("./CheckboxField"), require("./base"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.EmailField, global.TextField, global.TelephoneField, global.CheckboxField, global.base);
    global.undefined = mod.exports;
  }
})(this, function (exports, _EmailField, _TextField, _TelephoneField, _CheckboxField, _base) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "EmailField", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EmailField).default;
    }
  });
  Object.defineProperty(exports, "TextField", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextField).default;
    }
  });
  Object.defineProperty(exports, "TelephoneField", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TelephoneField).default;
    }
  });
  Object.defineProperty(exports, "CheckboxField", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CheckboxField).default;
    }
  });
  Object.defineProperty(exports, "Row", {
    enumerable: true,
    get: function () {
      return _base.Row;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const formStatuses = exports.formStatuses = {
    submited: 'submited',
    error: 'error',
    agrrementsError: 'Błąd serwera! Spróbuj ponowanie później'
  };
});
//# sourceMappingURL=form.js.map
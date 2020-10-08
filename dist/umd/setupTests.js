(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/jest-dom/extend-expect"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/jest-dom/extend-expect"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.extendExpect);
    global.undefined = mod.exports;
  }
})(this, function () {
  "use strict";

  // jest-dom adds custom jest matchers for asserting on DOM nodes.
  // allows you to do things like:
  // expect(element).toHaveTextContent(/react/i)
  // learn more: https://github.com/testing-library/jest-dom
  beforeEach(() => {
    global.window.sessionStorage.clear();
  });
});
//# sourceMappingURL=setupTests.js.map
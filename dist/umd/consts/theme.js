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
  const colors = exports.colors = {
    mainGrey: 'rgba(0, 0, 0, 0.7)',
    ligthGrey: '#ecebed',
    mediumGrey: '#7C7878',
    darkGrey: '#0f0f0f',
    errorRed: '#FF0000',
    lightRed: '#e2070e',
    mediumRed: '#f20f0f',
    white: '#FFF',
    black: '#000'
  };
  const theme = exports.theme = {
    formBgColor: colors.white,
    inputTextColor: colors.mainGrey,
    inputPlaceHolderColor: colors.mainGrey,
    inputErrorColor: colors.errorRed,
    inputBorderColor: colors.ligthGrey,
    inputBgColor: colors.white,
    checkboxLabelArrowColor: colors.mediumGrey,
    checkboxBgColor: colors.white,
    checkboxBorderColor: colors.black,
    checkboxBorderErrorColor: colors.errorRed,
    checkboxLabelTextColor: colors.darkGrey,
    checkboxMarkColor: colors.lightRed,
    headerTextColor: colors.black,
    headerBorderColor: colors.errorRed,
    subheaderBorderColor: colors.black,
    buttonTextColor: colors.white,
    buttonBgColor: colors.mediumRed,
    successTextColor: colors.black
  };
});
//# sourceMappingURL=theme.js.map

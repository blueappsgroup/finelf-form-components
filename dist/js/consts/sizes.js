"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.device = exports.size = void 0;
var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
exports.size = size;
var device = {
  mobileS: "(min-width: ".concat(size.mobileS, ")"),
  mobileM: "(min-width: ".concat(size.mobileM, ")"),
  mobileL: "(min-width: ".concat(size.mobileL, ")"),
  tablet: "(min-width: ".concat(size.tablet, ")"),
  laptop: "(min-width: ".concat(size.laptop, ")"),
  laptopL: "(min-width: ".concat(size.laptopL, ")"),
  desktop: "(min-width: ".concat(size.desktop, ")"),
  desktopL: "(min-width: ".concat(size.desktop, ")")
};
exports.device = device;
//# sourceMappingURL=sizes.js.map
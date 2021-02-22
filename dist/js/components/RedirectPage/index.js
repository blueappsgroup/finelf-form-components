"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  text-align: center;\n  ", "\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.backgroundImage && "background-image: url(".concat(props.backgroundImage, ");");
});

var Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  margin: 0 auto;\n"])));

var StyledHeader = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 45px;\n  font-weight: 900;\n  line-height: 64px;\n  margin: 0px 0px 45px 0px;\n  color: ", ";\n"])), function (props) {
  return props.theme.redirectPageHeaderTextColor;
});

var RedirectText = _styledComponents.default.h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 35px;\n  font-weight: 700;\n  line-height: 50px;\n  margin: 0px;\n  color: ", ";\n"])), function (props) {
  return props.theme.redirectPageRedirectTextColor;
});

var CounterText = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (props) {
  return props.theme.redirectPageCounterTextColor;
});

var StyledLogo = _styledComponents.default.img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 90px auto 45px;\n"])));

var StyledMainImg = _styledComponents.default.img(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 45px auto 0px;\n"])));

var RedirectPage = function RedirectPage(_ref) {
  var _ref$headerText = _ref.headerText,
      headerText = _ref$headerText === void 0 ? 'Dziękujemy za przesłanie wniosku! Szukamy dla Ciebie idealnej oferty.' : _ref$headerText,
      backgroundImage = _ref.backgroundImage,
      logoImg = _ref.logoImg,
      mainImg = _ref.mainImg,
      _ref$timeToRedirect = _ref.timeToRedirect,
      timeToRedirect = _ref$timeToRedirect === void 0 ? 3 : _ref$timeToRedirect,
      redirectUrl = _ref.redirectUrl;

  var _useState = (0, _react.useState)(timeToRedirect),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  var decraseCounter = (0, _react.useCallback)(function () {
    setTimeout( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setTimeout(function () {
      return setCounter(function (counter) {
        return counter - 1;
      });
    }, 1000));
  }, [setCounter]);
  (0, _react.useLayoutEffect)(function () {
    if (counter > 0) {
      decraseCounter();
      return;
    }

    redirectUrl && window.location.replace(redirectUrl);
  }, [counter, decraseCounter, redirectUrl]);
  return /*#__PURE__*/_react.default.createElement(PageWrapper, {
    backgroundImage: backgroundImage
  }, /*#__PURE__*/_react.default.createElement(Wrapper, null, logoImg && /*#__PURE__*/_react.default.createElement(StyledLogo, {
    src: logoImg
  }), /*#__PURE__*/_react.default.createElement(StyledHeader, null, headerText), /*#__PURE__*/_react.default.createElement(RedirectText, null, "Zostaniesz przekierowany za ", /*#__PURE__*/_react.default.createElement(CounterText, null, counter, "s")), mainImg && /*#__PURE__*/_react.default.createElement(StyledMainImg, {
    src: mainImg
  })));
};

var _default = RedirectPage;
exports.default = _default;
//# sourceMappingURL=index.js.map
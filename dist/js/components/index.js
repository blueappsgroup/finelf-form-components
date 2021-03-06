"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Header: true,
  Button: true,
  CheckboxesGroup: true,
  FormStatusText: true,
  Step: true,
  RedirectPage: true,
  Agreements: true,
  Image: true,
  OptionalGroup: true,
  Hr: true,
  Form: true
};
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "CheckboxesGroup", {
  enumerable: true,
  get: function get() {
    return _CheckboxesGroup.default;
  }
});
Object.defineProperty(exports, "FormStatusText", {
  enumerable: true,
  get: function get() {
    return _FormStatusText.default;
  }
});
Object.defineProperty(exports, "Step", {
  enumerable: true,
  get: function get() {
    return _Step.default;
  }
});
Object.defineProperty(exports, "RedirectPage", {
  enumerable: true,
  get: function get() {
    return _RedirectPage.default;
  }
});
Object.defineProperty(exports, "Agreements", {
  enumerable: true,
  get: function get() {
    return _Agreements.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "OptionalGroup", {
  enumerable: true,
  get: function get() {
    return _OptionalGroup.default;
  }
});
Object.defineProperty(exports, "Hr", {
  enumerable: true,
  get: function get() {
    return _Hr.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form.default;
  }
});

var _FormInput = require("./FormInput");

Object.keys(_FormInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormInput[key];
    }
  });
});

var _Header = _interopRequireDefault(require("./Header"));

var _Button = _interopRequireDefault(require("./Button"));

var _CheckboxesGroup = _interopRequireDefault(require("./CheckboxesGroup"));

var _FormStatusText = _interopRequireDefault(require("./FormStatusText"));

var _Step = _interopRequireDefault(require("./Step"));

var _RedirectPage = _interopRequireDefault(require("./RedirectPage"));

var _Agreements = _interopRequireDefault(require("./Agreements"));

var _Image = _interopRequireDefault(require("./Image"));

var _OptionalGroup = _interopRequireDefault(require("./OptionalGroup"));

var _Hr = _interopRequireDefault(require("./Hr"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map
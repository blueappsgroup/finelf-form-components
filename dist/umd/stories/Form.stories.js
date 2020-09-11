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
  exports.Custom = exports.Defualt = undefined;

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values, props) => {
    console.log(props);
    console.log(values);
  };

  exports.default = {
    title: 'Form',
    component: _.Form
  };

  const Template = args => /*#__PURE__*/React.createElement(_.Form, args, /*#__PURE__*/React.createElement(_.Header, {
    text: "Test title"
  }), /*#__PURE__*/React.createElement(_.SubmitSuccessText, {
    text: "Dzi\u0119kujemy, twoje dane zosta\u0142y przes\u0142ane."
  }), /*#__PURE__*/React.createElement(_.TextField, {
    required: true,
    showError: true,
    placeholder: "Name",
    name: "firstName"
  }), /*#__PURE__*/React.createElement(_.TextField, {
    required: true,
    placeholder: "Surname",
    name: "lastName"
  }), /*#__PURE__*/React.createElement(_.TextField, {
    placeholder: "City",
    name: "city"
  }), /*#__PURE__*/React.createElement(_.Header, {
    text: "Test title",
    type: "subheader"
  }), /*#__PURE__*/React.createElement(_.CheckboxField, {
    name: "agreement1",
    label: "Test agreement text"
  }), /*#__PURE__*/React.createElement(_.CheckboxField, {
    name: "agreement2",
    label: "Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
  }), /*#__PURE__*/React.createElement(_.Button, {
    text: "Send"
  }));

  const Defualt = exports.Defualt = Template.bind({});
  Defualt.args = {
    id: 'testForm',
    onSubmit
  };
  const Custom = exports.Custom = Template.bind({});
  Custom.args = {
    id: 'testForm2',
    onSubmit,
    customTheme: {
      formBgColor: 'red'
    }
  };
});
//# sourceMappingURL=Form.stories.js.map
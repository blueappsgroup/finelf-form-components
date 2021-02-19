(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "formik", "../CheckboxesGroup", "../", "../../utils", "../FormInput/base", "../../consts/form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("formik"), require("../CheckboxesGroup"), require("../"), require("../../utils"), require("../FormInput/base"), require("../../consts/form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.formik, global.CheckboxesGroup, global._, global.utils, global.base, global.form);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _formik, _CheckboxesGroup, _, _utils, _base, _form) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _CheckboxesGroup2 = _interopRequireDefault(_CheckboxesGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const StyledErrorText = (0, _styledComponents2.default)(_base.StyledError)`
  position: static;
`;

  const Agreemnets = ({
    linksForReplace,
    name = 'agreements',
    requiredErorText = '* Zapoznanie się z treścią regulaminu serwisu oraz polityką prywatności jest wymagane.',
    hasReadMore
  }) => {
    const {
      id,
      apiUrl,
      setInitialValues,
      initialValues,
      setFormStatus
    } = (0, _react.useContext)(_utils.FormContext);
    const {
      errors,
      setErrors
    } = (0, _formik.useFormikContext)();
    const [agreements, setAgreements] = (0, _react.useState)([]);
    const [error, setError] = (0, _react.useState)(false);
    const replaceLinkInAgreements = (0, _react.useCallback)(agreements => {
      const replacedAgreements = agreements.map(item => {
        let newContent = item.content;

        if (linksForReplace) {
          Object.keys(linksForReplace).forEach(key => {
            const regxp = new RegExp(key, 'g');
            newContent = newContent.replace(regxp, linksForReplace[key]);
            return newContent;
          });
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          content: newContent
        });
      });
      return replacedAgreements;
    }, [linksForReplace]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const fetchAgreements = (0, _react.useCallback)(async () => {
      try {
        const response = await fetch(`${apiUrl}/forms/${id}/agreements`);
        const data = await response.json();
        let hasError = false;
        const dataForInitialize = data.reduce( // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc, item) => {
          acc.values[item.id] = false;

          if (item.required) {
            acc.required.push('required');

            if (!hasError && (!initialValues || !initialValues[name] || !initialValues[name][item.id])) {
              hasError = true;
            }
          } else {
            acc.required.push(null);
          }

          return acc;
        }, {
          values: {},
          required: []
        });
        setAgreements(linksForReplace && replaceLinkInAgreements(data) || data);
        setInitialValues && setInitialValues(_objectSpread({
          [name]: dataForInitialize.values
        }, initialValues));

        if (hasError) {
          setErrors(_objectSpread({
            [name]: dataForInitialize.required
          }, errors));
        }
      } catch (e) {
        setFormStatus && setFormStatus(_form.formStatuses.agrrementsError);
        console.log(e);
      }
    }, [apiUrl, errors, id, initialValues, linksForReplace, name, replaceLinkInAgreements, setErrors, setFormStatus, setInitialValues]);
    (0, _react.useLayoutEffect)(() => {
      if (agreements.length === 0) {
        fetchAgreements();
      }

      if (agreements.length > 0 && !error) {
        let hasRequired = false;
        agreements.some(agreement => {
          if (agreement.required) {
            hasRequired = true;
            return true;
          }

          return false;
        });

        if (hasRequired !== error) {
          setError(hasRequired);
        }
      }
    }, [agreements, error, fetchAgreements]);
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, Array.isArray(agreements) && agreements.length > 0 && /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_CheckboxesGroup2.default, {
      name: name
    }, agreements.map(item => /*#__PURE__*/_react2.default.createElement(_.CheckboxField, {
      key: item.id,
      name: `${item.id}`,
      HTMLcontent: item.content,
      required: item.required,
      hasReadMore: hasReadMore
    }))), error && /*#__PURE__*/_react2.default.createElement(StyledErrorText, null, requiredErorText)));
  };

  Agreemnets.propTypes = {
    linksForReplace: _propTypes2.default.objectOf(_propTypes2.default.string),
    name: _propTypes2.default.string,
    groupType: _propTypes2.default.string,
    requiredErorText: _propTypes2.default.string,
    hasReadMore: _propTypes2.default.bool
  };
  Agreemnets.defaultProps = {
    name: 'agreements',
    groupType: 'checkboxGroup'
  };
  exports.default = Agreemnets;
});
//# sourceMappingURL=index.js.map
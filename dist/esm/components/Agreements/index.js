import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import CheckboxesGroup from '../CheckboxesGroup';
import { CheckboxField } from '../';
import { FormContext } from '../../utils';
import { StyledError } from '../FormInput/base';
import { formStatuses } from '../../consts/form';
const StyledErrorText = styled(StyledError)`
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
  } = useContext(FormContext);
  const {
    errors,
    setErrors
  } = useFormikContext();
  const [agreements, setAgreements] = useState([]);
  const [error, setError] = useState(false);
  const replaceLinkInAgreements = useCallback(agreements => {
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

  const fetchAgreements = useCallback(async () => {
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
      setFormStatus && setFormStatus(formStatuses.agrrementsError);
      console.log(e);
    }
  }, [apiUrl, errors, id, initialValues, linksForReplace, name, replaceLinkInAgreements, setErrors, setFormStatus, setInitialValues]);
  useLayoutEffect(() => {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.isArray(agreements) && agreements.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxesGroup, {
    name: name
  }, agreements.map(item => /*#__PURE__*/React.createElement(CheckboxField, {
    key: item.id,
    name: `${item.id}`,
    HTMLcontent: item.content,
    required: item.required,
    hasReadMore: hasReadMore
  }))), error && /*#__PURE__*/React.createElement(StyledErrorText, null, requiredErorText)));
};

Agreemnets.propTypes = {
  linksForReplace: _pt.objectOf(_pt.string),
  name: _pt.string,
  groupType: _pt.string,
  requiredErorText: _pt.string,
  hasReadMore: _pt.bool
};
Agreemnets.defaultProps = {
  name: 'agreements',
  groupType: 'checkboxGroup'
};
export default Agreemnets;
//# sourceMappingURL=index.js.map
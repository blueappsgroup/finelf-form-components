import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import CheckboxesGroup from '../CheckboxesGroup';
import { CheckboxField } from '../';
import { FormContext } from '../../utils';

const Agreemnets = ({
  linksForReplace,
  name = 'agreements'
}) => {
  const {
    id,
    apiUrl
  } = useContext(FormContext);
  const [agreements, setAgreements] = useState([]);
  const replaceLinkInAgreements = useCallback(agreements => {
    const replacedAgreements = agreements.map(item => {
      let newContent = item.content;

      if (linksForReplace) {
        Object.keys(linksForReplace).forEach(key => newContent = newContent.replace(`${key}`, `${linksForReplace[key]}`));
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
      setAgreements(linksForReplace && replaceLinkInAgreements(data) || data);
    } catch (e) {
      console.log(e);
    }
  }, [linksForReplace, apiUrl, replaceLinkInAgreements, id]);
  useLayoutEffect(() => {
    if (agreements.length === 0) {
      fetchAgreements();
    }
  }, [agreements, fetchAgreements]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.isArray(agreements) && agreements.length > 0 && /*#__PURE__*/React.createElement(CheckboxesGroup, {
    name: name
  }, agreements.map(item => /*#__PURE__*/React.createElement(CheckboxField, {
    key: item.id,
    name: `${item.id}`,
    HTMLcontent: item.content,
    required: item.required
  }))));
};

Agreemnets.propTypes = {
  linksForReplace: _pt.objectOf(_pt.string),
  name: _pt.string,
  groupType: _pt.string
};
Agreemnets.defaultProps = {
  name: 'agreements',
  groupType: 'checkboxGroup'
};
export default Agreemnets;
//# sourceMappingURL=index.js.map
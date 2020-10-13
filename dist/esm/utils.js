function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
export const FormContext = /*#__PURE__*/React.createContext({});
export const setFormValuesToCache = (values, formId) => {
  formId && window.sessionStorage.setItem(`form-${formId}`, JSON.stringify(values));
};
export const getFormValuesFromCache = id => id && JSON.parse(window.sessionStorage.getItem(`form-${id}`)) || {};
export const resetFormValueCache = id => window.sessionStorage.setItem(`form-${id}`, '{}');
export const encodeData = data => {
  return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};
export const sendDataToAwsSQS = (values, queueUrl) => fetch(queueUrl || 'https://sqs.eu-central-1.amazonaws.com/031738021372/finelf-users-queue', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: encodeData({
    Action: 'SendMessage',
    MessageBody: JSON.stringify(values)
  })
});
export const handleSendDataToApi = (values, apiUrl, formId, fieldsForSkip) => {
  const {
    agreements
  } = values,
        rest = _objectWithoutProperties(values, ["agreements"]);

  const filteredValues = Object.keys(rest).reduce((acc, key) => {
    if (!fieldsForSkip.includes(key)) {
      acc[key] = rest[key];
    }

    return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const mappedAgreements = Object.keys(agreements).reduce((acc, key) => {
    if (key !== 'selectAll' && agreements[key]) {
      acc.push(key);
    }

    return acc;
  }, []);
  return fetch(`${apiUrl}/forms/${formId}/data`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formName: formId,
      data: filteredValues,
      agreements: mappedAgreements
    })
  });
};
export const getFieldsValuesFromUrl = paramsList => paramsList.reduce((acc, item) => {
  const itemValue = new URLSearchParams(window.location.search).get(item);

  if (itemValue !== null) {
    acc[item] = itemValue;
  }

  return acc;
}, {});
//# sourceMappingURL=utils.js.map
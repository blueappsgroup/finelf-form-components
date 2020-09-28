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
//# sourceMappingURL=utils.js.map
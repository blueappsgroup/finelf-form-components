import React from 'react';
export const FormContext = /*#__PURE__*/React.createContext({});
export const setFormValuesToCache = (values, formId) => {
  formId && window.sessionStorage.setItem(`form-${formId}`, JSON.stringify(values));
};
export const getFormValuesFromCache = id => id && JSON.parse(window.sessionStorage.getItem(`form-${id}`)) || {};
export const resetFormValueCache = id => window.sessionStorage.setItem(`form-${id}`, '{}');
//# sourceMappingURL=utils.js.map
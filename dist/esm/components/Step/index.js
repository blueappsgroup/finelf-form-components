import _pt from "prop-types";
import React, { useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import Button from '../Button';
import StepHeader from './StepHeader';
import { FormContext } from '../../utils';
import { device } from '../../consts/sizes';
const Wrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;
// prettier-ignore
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  & button {
    flex-grow: 1;
  }

  @media ${device.mobileL} {
    flex-direction: row;

    & button {
      &:first-of-type {
        margin-right: ${props => props.isFirstStep ? '0px' : '15px'};
      }

      &:last-child {
        margin-left: ${props => props.isFirstStep ? '0px' : '15px'};
      }
    }
  }

  @media ${device.tablet} {
    & button {
      &:first-of-type {
        margin-right: ${props => props.isFirstStep ? '0px' : '30px'};
      }

      &:last-child {
        margin-left: ${props => props.isFirstStep ? '0px' : '30px'};
      }
    }
  }
`;
const StepHeaderWrapper = styled.div`
  display: flex;
`;

const Step = ({
  children,
  stepIndex
}) => {
  const {
    currentStep = 0,
    stepsLength = 1,
    stepsTitleList,
    prevStep,
    nextStep
  } = useContext(FormContext); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const {
    values,
    errors
  } = useFormikContext();
  const mappedFields = useMemo(() => (Array.isArray(children) ? children : [children]).reduce((acc, item) => {
    if (item.props.name && !item.props.children) {
      acc[item.props.name] = true;
    }

    if (item.props.name && item.props.required && !item.props.visibleCondition) {
      acc.requiredFields[item.props.name] = true;
    }

    if (item.props && item.props.name === 'agreements') {
      acc.requiredFields[item.props.name] = true;
    }

    if (item.props.children) {
      const mappedChildrens = Array.isArray(item.props.children) ? item.props.children : [item.props.children]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      mappedChildrens.forEach(child => {
        if (child.props.name && child.props.required && !child.props.visibleCondition) {
          if (item.props.type === 'checkboxGroup') {
            !acc.requiredFields[item.props.name] && (acc.requiredFields[item.props.name] = {});
            acc.requiredFields[item.props.name][child.props.name] = true;
            return;
          }

          acc.requiredFields[child.props.name] = true;
        }

        if (child.props.name) {
          acc[child.props.name] = true;
        }
      });
    }

    return acc;
  }, {
    requiredFields: {}
  }), [children]);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(JSON.stringify(mappedFields) !== JSON.stringify({}));
  const lastStepIndex = stepsLength ? stepsLength - 1 : 0;
  useEffect(() => {
    let hasError;
    Object.keys(mappedFields.requiredFields).some(key => {
      if (!values[key] || values[key] === '' || errors[key]) {
        hasError = true;
        return true;
      }

      if (key === 'agreements' && errors[key]) {
        hasError = true;
        return true;
      }

      return false;
    });

    if (!hasError) {
      Object.keys(mappedFields).some(key => {
        if (errors[key]) {
          hasError = true;
          return true;
        }

        return false;
      });
    }

    if (hasError) {
      setNextButtonDisabled(true);
    }

    if (!hasError) {
      setNextButtonDisabled(false);
    }
  }, [values, errors, mappedFields, children]);
  return /*#__PURE__*/React.createElement(Wrapper, {
    visible: stepIndex === currentStep
  }, /*#__PURE__*/React.createElement(StepHeaderWrapper, null, currentStep !== 0 && /*#__PURE__*/React.createElement(StepHeader, null, stepsTitleList && stepsTitleList[currentStep - 1]), stepIndex === currentStep && /*#__PURE__*/React.createElement(StepHeader, {
    activeStep: true
  }, stepsTitleList && stepsTitleList[currentStep]), currentStep === 0 && stepsLength > 1 && /*#__PURE__*/React.createElement(StepHeader, null, stepsTitleList && stepsTitleList[currentStep + 1])), stepIndex === currentStep && children, /*#__PURE__*/React.createElement(ButtonsWrapper, {
    isFirstStep: currentStep === 0
  }, currentStep !== 0 && /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    text: "Cofnij",
    onClick: prevStep
  }), currentStep !== lastStepIndex && /*#__PURE__*/React.createElement(Button, {
    disabled: nextButtonDisabled,
    type: "button",
    text: "Dalej",
    onClick: nextStep
  }), currentStep === lastStepIndex && /*#__PURE__*/React.createElement(Button, {
    disabled: nextButtonDisabled,
    type: "submit",
    text: "Wy\u015Blij"
  })));
};

Step.propTypes = {
  stepIndex: _pt.number.isRequired,
  children: _pt.any.isRequired
};
export default Step;
//# sourceMappingURL=index.js.map
import _pt from "prop-types";
import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from '../Button';
import StepHeader from './StepHeader';
import { FormContext, setFormValuesToCache } from '../../utils';
import { device } from '../../consts/sizes';
import { StyledForm } from '../Form';
import { formStatuses } from '../../consts/form';
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
  stepIndex,
  onStepComplete
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapperRef = useRef(null);
  const {
    id,
    currentStep = 0,
    stepsLength = 1,
    stepsTitleList,
    prevStep,
    nextStep,
    initialValues,
    handleSubmit,
    formStatus
  } = useContext(FormContext);
  const lastStepIndex = stepsLength ? stepsLength - 1 : 0;
  const hideSubmitButton = formStatus === formStatuses.agrrementsError;

  const handleStepSubmit = ({
    values
  }) => {
    if (currentStep === lastStepIndex) {
      return handleSubmit && handleSubmit();
    }

    setFormValuesToCache(values, id);
    onStepComplete && onStepComplete();
    nextStep && nextStep();
  };

  useEffect(() => {
    if (stepIndex === currentStep) {
      wrapperRef.current !== null && window.scrollTo(0, wrapperRef.current.offsetTop);
    }
  }, [currentStep, stepIndex, formStatus]);
  return stepIndex === currentStep && /*#__PURE__*/React.createElement(Formik, {
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: initialValues // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    onSubmit: handleStepSubmit,
    render: ({
      isValid
    }) => {
      return /*#__PURE__*/React.createElement(StyledForm, {
        id: stepIndex.toString()
      }, /*#__PURE__*/React.createElement(Wrapper, {
        ref: wrapperRef,
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
      }), currentStep !== lastStepIndex && !hideSubmitButton && /*#__PURE__*/React.createElement(Button, {
        form: stepIndex.toString(),
        disabled: !isValid,
        type: "submit",
        text: "Dalej"
      }), currentStep === lastStepIndex && !hideSubmitButton && /*#__PURE__*/React.createElement(Button, {
        disabled: !isValid,
        type: "submit",
        text: "Wy\u015Blij"
      }))));
    }
  }) || /*#__PURE__*/React.createElement(React.Fragment, null);
};

Step.propTypes = {
  stepIndex: _pt.number.isRequired,
  children: _pt.any.isRequired,
  onStepComplete: _pt.func
};
export default Step;
//# sourceMappingURL=index.js.map
import React, { FC, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

import Button from '../Button'
import StepHeader from './StepHeader'
import { FormContext, setFormValuesToCache, getFormValuesFromCache } from '../../utils'
import { device } from '../../consts/sizes'
import { StyledForm } from '../Form'
import { FormValuesType } from '../../types'
import { formStatuses } from '../../consts/form'

const Wrapper = styled.div<{ visible: boolean }>`
  display: ${(props): string => (props.visible ? 'block' : 'none')};
`

type ButtonWrapperTypes = { isFirstStep: boolean }

// prettier-ignore
const ButtonsWrapper = styled.div<ButtonWrapperTypes>`
  display: flex;
  flex-direction: column;
  
  & button {
    flex-grow: 1;
  }

  @media ${device.mobileL} {
    flex-direction: row;

    & button {
      &:first-of-type {
        margin-right: ${(props: ButtonWrapperTypes): string => props.isFirstStep ? '0px' : '15px'};
      }

      &:last-child {
        margin-left: ${(props: ButtonWrapperTypes): string => props.isFirstStep ? '0px' : '15px'};
      }
    }
  }

  @media ${device.tablet} {
    & button {
      &:first-of-type {
        margin-right: ${(props: ButtonWrapperTypes): string => props.isFirstStep ? '0px' : '30px'};
      }

      &:last-child {
        margin-left: ${(props: ButtonWrapperTypes): string => props.isFirstStep ? '0px' : '30px'};
      }
    }
  }
`

const StepHeaderWrapper = styled.div`
  display: flex;
`

type Props = {
  stepIndex: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  onStepComplete?: () => void
}

const Step: FC<Props> = ({ children, stepIndex, onStepComplete }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapperRef = useRef<any>(null)
  const {
    id,
    currentStep = 0,
    stepsLength = 1,
    stepsTitleList,
    prevStep,
    nextStep,
    initialValues,
    setInitialValues,
    handleSubmit,
    formStatus,
  } = useContext(FormContext)

  const lastStepIndex = stepsLength ? stepsLength - 1 : 0
  const hideSubmitButton = formStatus === formStatuses.agrrementsError
  const handleStepSubmit = ({ values }: FormValuesType): void => {
    if (currentStep === lastStepIndex) {
      return handleSubmit && handleSubmit()
    }
    setFormValuesToCache(values, id)
    setInitialValues && setInitialValues(getFormValuesFromCache(id))
    onStepComplete && onStepComplete()
    nextStep && nextStep()
  }

  useEffect(() => {
    if (stepIndex === currentStep) {
      wrapperRef.current !== null &&
        window.scrollTo(0, wrapperRef.current.offsetTop)
    }
  }, [currentStep, stepIndex, formStatus])

  return (
    (stepIndex === currentStep && (
      <Formik
        validateOnMount
        enableReinitialize
        initialValues={initialValues}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={handleStepSubmit as any}
        render={({ isValid }): React.ReactElement => {
          return (
            <StyledForm id={stepIndex.toString()}>
              <Wrapper ref={wrapperRef} visible={stepIndex === currentStep}>
                <StepHeaderWrapper>
                  {currentStep !== 0 && (
                    <StepHeader>
                      {stepsTitleList && stepsTitleList[currentStep - 1]}
                    </StepHeader>
                  )}
                  {stepIndex === currentStep && (
                    <StepHeader activeStep>
                      {stepsTitleList && stepsTitleList[currentStep]}
                    </StepHeader>
                  )}
                  {currentStep === 0 && stepsLength > 1 && (
                    <StepHeader>
                      {stepsTitleList && stepsTitleList[currentStep + 1]}
                    </StepHeader>
                  )}
                </StepHeaderWrapper>
                {stepIndex === currentStep && children}
                <ButtonsWrapper isFirstStep={currentStep === 0}>
                  {currentStep !== 0 && (
                    <Button
                      type="button"
                      variant="secondary"
                      text="Cofnij"
                      onClick={prevStep}
                    />
                  )}
                  {currentStep !== lastStepIndex && !hideSubmitButton && (
                    <Button
                      form={stepIndex.toString()}
                      disabled={!isValid}
                      type="submit"
                      text="Dalej"
                    />
                  )}
                  {currentStep === lastStepIndex && !hideSubmitButton && (
                    <Button disabled={!isValid} type="submit" text="Wyślij" />
                  )}
                </ButtonsWrapper>
              </Wrapper>
            </StyledForm>
          )
        }}
      />
    )) || <></>
  )
}

export default Step

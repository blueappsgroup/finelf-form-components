import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

import Button from '../Button'
import StepHeader from './StepHeader'
import { FormContext } from '../../utils'
import { device } from '../../consts/sizes'

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
}

const Step: FC<Props> = ({ children, stepIndex }) => {
  const {
    currentStep = 0,
    stepsLength = 1,
    stepsTitleList,
    prevStep,
    nextStep,
  } = useContext(FormContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, errors } = useFormikContext<any>()
  const mappedFields = useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).reduce((acc, item) => {
        if (item.props.name && item.props.required) {
          acc[item.props.name] = true
        }
        if (item.props.children) {
          const mappedChildrens = Array.isArray(item.props.children)
            ? item.props.children
            : [item.props.children]

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          mappedChildrens.forEach((child: any) => {
            if (child.props.name && child.props.required) {
              if (item.props.name) {
                acc[item.props.name][child.props.name] = true
                return
              }

              acc[child.props.name] = true
            }
          })
        }

        return acc
      }, {}),
    [children]
  )
  const [nextButtonDisabled, setNextButtonDisabled] = useState(
    JSON.stringify(mappedFields) !== JSON.stringify({})
  )
  const lastStepIndex = stepsLength ? stepsLength - 1 : 0

  useEffect(() => {
    let hasError

    Object.keys(mappedFields).some((key: string) => {
      if (!values[key] || values[key] === '' || errors[key]) {
        hasError = true
        return true
      }

      return false
    })

    if (hasError) {
      setNextButtonDisabled(true)
    }

    if (!hasError) {
      setNextButtonDisabled(false)
    }
  }, [values, errors, mappedFields])

  return (
    <Wrapper visible={stepIndex === currentStep}>
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
      {children}
      <ButtonsWrapper isFirstStep={currentStep === 0}>
        {currentStep !== 0 && (
          <Button
            type="button"
            variant="secondary"
            text="Cofnij"
            onClick={prevStep}
          />
        )}
        {currentStep !== lastStepIndex && (
          <Button
            disabled={nextButtonDisabled}
            type="button"
            text="Dalej"
            onClick={nextStep}
          />
        )}
        {currentStep === lastStepIndex && (
          <Button disabled={nextButtonDisabled} type="submit" text="Wyślij" />
        )}
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Step

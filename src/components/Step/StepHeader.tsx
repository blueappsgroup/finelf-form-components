import styled from 'styled-components'
import { device } from '../../consts/sizes'

type StepHeaderProps = {
  activeStep?: boolean
  theme: {
    stepHeaderActiveColor: string
    stepHeaderInActiveColor: string
    stepHeaderActiveBorderColor: string
    stepHeaderInActiveBorderColor: string
  }
}

const StepHeader = styled.h3<StepHeaderProps>`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 11px;
  letter-spacing: 0px;
  font-weight: ${(props: StepHeaderProps): number =>
    props.activeStep ? 800 : 400};
  color: ${(props: StepHeaderProps): string =>
    props.activeStep
      ? props.theme.stepHeaderActiveColor
      : props.theme.stepHeaderInActiveColor};
  border-bottom: ${(props: StepHeaderProps): string =>
    props.activeStep
      ? `4px solid ${props.theme.stepHeaderActiveBorderColor}`
      : `2px solid ${props.theme.stepHeaderInActiveBorderColor}`};
  margin: 0px 0px 30px;
  padding-bottom: 10px;

  &:first-of-type {
    margin-right: 15px;
  }

  &:last-child {
    margin-left: 15px;
  }

  @media ${device.mobileL} {
    font-size: 22px;
    margin: 0px 0px 40px;

    &:first-of-type {
      margin-right: 15px;
    }

    &:last-child {
      margin-left: 15px;
    }
  }

  @media ${device.tablet} {
    &:first-of-type {
      margin-right: 30px;
    }

    &:last-child {
      margin-left: 30px;
    }
  }
`

export default StepHeader

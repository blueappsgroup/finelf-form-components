import React, { useContext } from 'react'
import styled from 'styled-components'
import { formStatuses } from '../../consts/form'
import { FormContext } from '../../utils'

type StyledProps = {
  theme: {
    successTextColor: string
    errorStatusTextColor: string
    successStatusTextColor: string
  }
  show: boolean
  isError: boolean
}

const StyledText = styled.span<{ show: boolean; isError: boolean }>`
  display: ${(props: StyledProps): string => (props.show ? 'block' : 'none')};
  color: ${(props: StyledProps): string =>
    props.isError
      ? props.theme.errorStatusTextColor
      : props.theme.successStatusTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`
type Props = {
  successText: string
  errorText: string
}

const FormStatusText: React.FC<Props> = ({ successText, errorText }) => {
  const { errorFromApi, formStatus } = useContext(FormContext)
  const isError =
    formStatus === formStatuses.error ||
    formStatus === formStatuses.agrrementsError ||
    errorFromApi === true

  const showStatusText = formStatus === formStatuses.submited || isError
  const showAgreementsError = formStatus === formStatuses.agrrementsError
  return (
    <StyledText show={showStatusText} isError={isError}>
      {!isError && successText}
      {!showAgreementsError && isError && errorText}
      {showAgreementsError && formStatuses.agrrementsError}
    </StyledText>
  )
}

export default FormStatusText

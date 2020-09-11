/* eslint-disable indent */
import React, {
  ReactElement,
  useState,
  useLayoutEffect,
  useRef,
  useContext,
  ChangeEvent,
} from 'react'
import { FormikErrors } from 'formik'
import styled from 'styled-components'

import { FieldWrapProps } from '../../types'
import { FormContext, setFormValuesToCache } from '../../utils'

type StyledProps = {
  collapsed?: boolean
  hasCollapse?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FormikErrors<any>
  checked?: boolean
  theme: { [k: string]: string }
}

const StyledRow = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
  height: ${(props: StyledProps): string =>
    props.collapsed ? 'auto' : '20px'};
  overflow: ${(props: StyledProps): string =>
    props.collapsed ? 'none' : 'hidden'};
`

const StyledArrow = styled.span<StyledProps>`
  display: ${(props: StyledProps): string =>
    props.hasCollapse ? 'flex' : 'none'};
  position: absolute;
  right: 5px;
  top: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props: StyledProps): string =>
    props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px'};
  border-color: ${(props: StyledProps): string =>
    props.collapsed
      ? `transparent transparent ${props.theme.checkboxLabelArrowColor} transparent`
      : `${props.theme.checkboxLabelArrowColor} transparent transparent transparent`};
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${(props: StyledProps): string => props.theme.checkboxMarkColor};
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props): string => props.theme.checkboxBgColor};
  border-radius: 3px;
  border: 1px solid;
  border-color: ${(props: StyledProps): string =>
    props.error
      ? props.theme.checkboxBorderErrorColor
      : props.theme.checkboxBorderColor};
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props: StyledProps): string =>
      props.checked ? 'visible' : 'hidden'};
  }
`

const StyledText = styled.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${(props: StyledProps): string => props.theme.checkboxLabelTextColor};
  padding-left: 10px;
  padding-right: 25px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Checkbox = ({ checked, error, ...props }: any): ReactElement => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} error={error}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = styled.label<any>`
  display: flex;
`

export const CheckboxBase: (props: FieldWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values },
  ...props
}) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const [hasCollapse, setHasCollapse] = useState(false)
  const { id } = useContext(FormContext)

  const handleOnMouseOut = (): void => {
    setFormValuesToCache(values, id)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    props.onChange && props.onChange(e)
    field.onChange && field.onChange(e)
    setFormValuesToCache(values, id)
  }

  const onCollapseClick = (): void => setCollapsed(!collapsed)

  useLayoutEffect(() => {
    if (targetRef.current && targetRef.current.offsetHeight > 22) {
      setHasCollapse(true)
    }
  }, [targetRef])

  return (
    <StyledRow hasCollapse={hasCollapse} collapsed={collapsed}>
      <Wrapper ref={targetRef} onMouseOut={handleOnMouseOut}>
        <Checkbox
          {...field}
          {...props}
          onChange={handleOnChange}
          checked={field.value}
          value={field.value || false}
          error={
            (touched[field.name] && errors[field.name]) as  // eslint-disable-next-line @typescript-eslint/no-explicit-any
              | FormikErrors<any>
              | undefined
          }
        />
        <StyledText>{props.label}</StyledText>
      </Wrapper>
      <StyledArrow
        hasCollapse={hasCollapse}
        collapsed={collapsed}
        onClick={onCollapseClick}
      />
    </StyledRow>
  )
}

export default CheckboxBase

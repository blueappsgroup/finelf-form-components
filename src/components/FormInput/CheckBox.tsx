/* eslint-disable indent */
import React, {
  ReactElement,
  useState,
  useLayoutEffect,
  useRef,
  useContext,
  ChangeEvent,
  useEffect,
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
  required?: boolean
}

const StyledRow = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
  height: ${(props: StyledProps): string =>
    props.collapsed
      ? 'auto'
      : 'calc(18px + 2*' + props.theme.checkboxBorderWidth + ')'};
  overflow: ${(props: StyledProps): string =>
    props.collapsed ? 'none' : 'hidden'};

  a {
    color: ${(props: StyledProps): string => props.theme.checkboxLinkColor};
  }
`

const StyledArrow = styled.span<StyledProps>`
  display: ${(props: StyledProps): string =>
    props.hasCollapse ? 'flex' : 'none'};
  position: absolute;
  right: 5px;
  top: calc(
    5px + 2 * ${(props: StyledProps): string => props.theme.checkboxBorderWidth}
  );
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props: StyledProps): string =>
    props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px'};
  border-color: ${(props: StyledProps): string =>
    props.collapsed
      ? `transparent transparent ${props.theme.checkboxLabelArrowColor} transparent`
      : `${props.theme.checkboxLabelArrowColor} transparent transparent transparent`};

  &:hover {
    cursor: pointer;
  }
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
  position: relative;
  width: 18px;
  height: 18px;
  background: ${(props): string =>
    props.checked
      ? props.theme.checkboxCheckedBgColor
      : props.theme.checkboxBgColor};
  border-radius: 3px;
  border: ${(props): string => props.theme.checkboxBorderWidth} solid;
  border-color: ${(props: StyledProps): string =>
    props.error
      ? props.theme.checkboxBorderErrorColor
      : props.theme.checkboxBorderColor};
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props: StyledProps): string =>
      props.checked ? 'visible' : 'hidden'};
  }

  &::after {
    display: ${(props: StyledProps): string =>
      props.required ? 'block' : 'none'};
    position: absolute;
    content: '*';
    top: 0px;
    right: -13px;
    font-size: 15px;
    color: ${(props: StyledProps): string =>
      props.theme.checkboxBorderErrorColor};
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledText = styled.span<any>`
  display: inline;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props: StyledProps): string =>
    props.theme.checkboxLabelFontSize};
  line-height: calc(
    16px + 2 *
      ${(props: StyledProps): string => props.theme.checkboxBorderWidth}
  );
  color: ${(props: StyledProps): string => props.theme.checkboxLabelTextColor};
  padding-left: 15px;
  padding-right: 25px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Checkbox = ({ checked, error, ...props }: any): ReactElement => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} error={error} required={props.required}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = styled.label<any>`
  display: flex;
  line-height: 18px;

  &:hover {
    cursor: pointer;
  }
`

export const CheckboxBase: (props: FieldWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values },
  ...props
}) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const [hasCollapse, setHasCollapse] = useState(false)
  const { id, addFieldForSkip } = useContext(FormContext)
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
    if (
      targetRef.current &&
      targetRef.current.offsetHeight > 22 &&
      !props.disableCollapse
    ) {
      setHasCollapse(true)
    }
  }, [props.disableCollapse, targetRef])

  useEffect(() => {
    props.skipFieldForApi && addFieldForSkip && addFieldForSkip(field.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledRow
      hasCollapse={hasCollapse && !props.disableCollapse}
      collapsed={collapsed || props.disableCollapse}
    >
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
        {props.label && <StyledText>{props.label}</StyledText>}
        {props.HTMLcontent && (
          <StyledText dangerouslySetInnerHTML={{ __html: props.HTMLcontent }} />
        )}
        {props.childrenBody && <StyledText>{props.childrenBody}</StyledText>}
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

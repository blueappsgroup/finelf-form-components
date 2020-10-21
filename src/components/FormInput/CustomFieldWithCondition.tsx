import React, { FC, useEffect, useState } from 'react'
import { Field, useFormikContext } from 'formik'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requiredCondition?: { [key: string]: any }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visibleCondition?: { [key: string]: any }
}
const CustomFieldWithCondition: FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, errors, setErrors, setFieldValue } = useFormikContext<any>()
  const [required, setRequired] = useState(props.required || false)
  const [visible, setVisible] = useState<boolean>(
    (props.visibleCondition && false) || true
  )

  useEffect(() => {
    if (!props.required && props.requiredCondition) {
      let isRequired = false

      Object.keys(props.requiredCondition).some((key) => {
        if (
          props.requiredCondition &&
          props.requiredCondition[key].includes(values[key])
        ) {
          isRequired = true
          return true
        }

        return false
      })

      if (required !== isRequired) {
        setRequired(isRequired)
      }
    }
  }, [values, props.required, props.requiredCondition, required, props.name])

  useEffect(() => {
    if (props.visibleCondition) {
      let isVisible = false

      Object.keys(props.visibleCondition).some((key) => {
        if (
          props.visibleCondition &&
          props.visibleCondition[key].includes(values[key])
        ) {
          isVisible = true

          return true
        }

        return false
      })

      if (!isVisible && isVisible !== visible) {
        setErrors({ ...errors, [props.name]: undefined })
        console.log('dd')
        setFieldValue(props.name, '', false)
        setVisible(isVisible)
      }

      if (isVisible && isVisible !== visible) {
        setVisible(isVisible)
      }
    }
  }, [
    values,
    setFieldValue,
    props.visibleCondition,
    props.name,
    visible,
    errors,
    setErrors,
  ])

  return (
    <Field
      {...props}
      required={required}
      validate={props.validate(required)}
      visible={visible}
    />
  )
}

export default CustomFieldWithCondition

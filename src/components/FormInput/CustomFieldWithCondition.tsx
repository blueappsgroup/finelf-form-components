import React, { FC, useContext, useEffect, useState } from 'react'
import { Field, useFormikContext } from 'formik'
import { FormContext, setFormValuesToCache } from '../../utils'

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
  const { values, errors, setErrors, setValues } = useFormikContext<any>()
  const { id } = useContext(FormContext)
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
        setValues({ ...values, [props.name]: undefined }, false)
        setErrors({ ...errors, [props.name]: undefined })
        setFormValuesToCache({ ...values, [props.name]: undefined }, id)
        setVisible(isVisible)
      }

      if (isVisible && isVisible !== visible) {
        setVisible(isVisible)
      }
    }
  }, [
    values,
    setValues,
    props.visibleCondition,
    props.name,
    visible,
    errors,
    setErrors,
    id,
  ])

  return (
    <Field
      {...props}
      required={required && visible}
      validate={props.validate(required && visible)}
      visible={visible}
    />
  )
}

export default CustomFieldWithCondition

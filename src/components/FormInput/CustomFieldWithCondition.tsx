import React, { FC, useEffect, useState } from 'react'
import { Field, useFormikContext } from 'formik'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requiredCondition?: { [key: string]: any }
}
const CustomFieldWithCondition: FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, setFieldError } = useFormikContext<any>()
  const [required, setRequired] = useState(props.required || false)

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
  }, [
    values,
    props.required,
    props.requiredCondition,
    required,
    props.name,
    setFieldError,
  ])

  return (
    <Field {...props} required={required} validate={props.validate(required)} />
  )
}

export default CustomFieldWithCondition

import React from 'react'
import { FieldArray, useFormikContext } from 'formik'

import CheckboxField from '../FormInput/CheckboxField'

const CheckboxesGroup = ({ name, children }) => {
  const { setValues } = useFormikContext()
  const hasManyCheckboxes = Array.isArray(children)
  const checkboxesNames = hasManyCheckboxes
    ? children.map((item) => item.props.name)
    : [children.props.name]

  const handleOnChange = ({ target: { value } }) => {
    const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
      acc[`${item}`] = !!value
      return acc
    }, {})

    setValues({ [name]: fieldsToUpdate })
  }

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <>
          <CheckboxField
            id={`${name}.selectAll`}
            name={`${name}.selectAll`}
            label="Select all"
            onChange={handleOnChange}
          />
          {children && !hasManyCheckboxes && (
            <CheckboxField
              {...children.props}
              name={`${name}.${children.props.name}`}
            />
          )}
          {children &&
            hasManyCheckboxes &&
            children.map((item) => (
              <CheckboxField
                {...item.props}
                key={item.props.name}
                name={`${name}.${item.props.name}`}
              />
            ))}
        </>
      )}
    />
  )
}

export default CheckboxesGroup

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, FC, ChangeEvent, useMemo } from 'react'
import { FieldArray, useFormikContext } from 'formik'

import CheckboxField from '../FormInput/CheckboxField'

type CheckboxesGroupTypes = {
  name: string
  children: any
}

const CheckboxesGroup: FC<CheckboxesGroupTypes> = ({ name, children }) => {
  const { values, setValues } = useFormikContext()
  const hasManyCheckboxes = Array.isArray(children)
  const checkboxesNames: string[] = useMemo(
    () =>
      hasManyCheckboxes
        ? children && children.map((item: any) => item.props.name)
        : [children.props.name],
    [hasManyCheckboxes, children]
  )

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
      acc[item] = e.target.value === 'true' ? false : true
      return acc
    }, {} as { [key: string]: boolean | undefined })

    setValues({ ...(values as any), [name]: fieldsToUpdate })
  }

  return (
    <FieldArray
      name={name}
      render={(): ReactElement => (
        <>
          <CheckboxField
            id={`${name}.selectAll`}
            name={`${name}.selectAll`}
            label="Zaznacz wszystkie zgody"
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
            children.map((item: any) => (
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

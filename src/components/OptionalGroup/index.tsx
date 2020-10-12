import { useFormikContext } from 'formik'
import React from 'react'
import { CheckboxField } from '../'

type Props = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  label: string
}

const OptionalGroup: React.FC<Props> = ({ name, label, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values } = useFormikContext<any>()
  const groupVisible = !!values[name]

  return (
    <>
      <CheckboxField skipFieldForApi id={name} name={name} label={label} />
      {groupVisible && <>{children}</>}
    </>
  )
}

export default OptionalGroup

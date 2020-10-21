import React, { useContext, useEffect, useMemo } from 'react'
import { useFormikContext } from 'formik'
import { CheckboxField } from '../'
import { FormContext, setFormValuesToCache } from '../../utils'

type Props = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  label: string
  groupType?: string
  hideChecked?: boolean
}

const OptionalGroup: React.FC<Props> = ({
  name,
  label,
  children,
  hideChecked,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, setValues } = useFormikContext<any>()
  const { id } = useContext(FormContext)
  const hasManyItems = Array.isArray(children)
  const itemsNames: string[] = useMemo(
    () =>
      hasManyItems
        ? children &&
          children.map((item: { props: { name: string } }) => item.props.name)
        : [children.props.name],
    [hasManyItems, children]
  )

  const itemsForResetValues = useMemo(
    () =>
      itemsNames.reduce((acc, item) => {
        acc[item] = undefined
        return acc
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, {} as { [key: string]: any }),
    [itemsNames]
  )
  const groupVisible =
    (hideChecked && !values[name]) || (!hideChecked && values[name])

  useEffect(() => {
    if (!groupVisible) {
      const newValues = { ...values, ...itemsForResetValues }
      setValues(newValues, false)
      setFormValuesToCache(newValues, id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupVisible, itemsForResetValues, setValues, values[name]])

  return (
    <>
      <CheckboxField
        disableCollapse
        skipFieldForApi
        id={name}
        name={name}
        label={label}
      />
      {groupVisible && <>{children}</>}
    </>
  )
}

OptionalGroup.defaultProps = {
  groupType: 'optionalGroup',
}

export default OptionalGroup

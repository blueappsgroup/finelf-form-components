import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

import CheckboxesGroup from '../CheckboxesGroup'
import { CheckboxField } from '../'
import { FormContext } from '../../utils'
import { StyledError } from '../FormInput/base'
import { formStatuses } from '../../consts/form'
type AgreementType = {
  id: string
  content: string
  required?: boolean
}

type AgreementsPropTypes = {
  linksForReplace?: { [key: string]: string }
  name?: string
  groupType?: string
  requiredErorText?: string
  hasReadMore?: boolean
}

const StyledErrorText = styled(StyledError)`
  position: static;
`

const Agreemnets: React.FC<AgreementsPropTypes> = ({
  linksForReplace,
  name = 'agreements',
  requiredErorText = '* Zapoznanie się z treścią regulaminu serwisu oraz polityką prywatności jest wymagane.',
  hasReadMore,
}) => {
  const {
    id,
    apiUrl,
    setInitialValues,
    initialValues,
    setFormStatus,
  } = useContext(FormContext)
  const { errors, setErrors } = useFormikContext()
  const [agreements, setAgreements] = useState<AgreementType[]>([])
  const [error, setError] = useState<boolean>(false)
  const replaceLinkInAgreements = useCallback(
    (agreements: AgreementType[]): AgreementType[] => {
      const replacedAgreements = agreements.map((item) => {
        let newContent = item.content
        if (linksForReplace) {
          Object.keys(linksForReplace).forEach((key) => {
            const regxp = new RegExp(key, 'g')
            newContent = newContent.replace(regxp, linksForReplace[key])

            return newContent
          })
        }

        return { ...item, content: newContent }
      })

      return replacedAgreements
    },
    [linksForReplace]
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchAgreements = useCallback(async (): Promise<any> => {
    try {
      const response = await fetch(`${apiUrl}/forms/${id}/agreements`)
      const data = await response.json()
      let hasError = false
      const dataForInitialize = data.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc: any, item: AgreementType) => {
          acc.values[item.id] = false
          if (item.required) {
            acc.required.push('required')
            if (
              !hasError &&
              (!initialValues ||
                !initialValues[name] ||
                !initialValues[name][item.id])
            ) {
              hasError = true
            }
          } else {
            acc.required.push(null)
          }
          return acc
        },
        { values: {}, required: [] }
      )
      setAgreements((linksForReplace && replaceLinkInAgreements(data)) || data)
      setInitialValues &&
        setInitialValues({ [name]: dataForInitialize.values, ...initialValues })
      if (hasError) {
        setErrors({ [name]: dataForInitialize.required, ...errors })
      }
    } catch (e) {
      setFormStatus && setFormStatus(formStatuses.agrrementsError)
      console.log(e)
    }
  }, [
    apiUrl,
    errors,
    id,
    initialValues,
    linksForReplace,
    name,
    replaceLinkInAgreements,
    setErrors,
    setFormStatus,
    setInitialValues,
  ])

  useLayoutEffect(() => {
    if (agreements.length === 0) {
      fetchAgreements()
    }

    if (agreements.length > 0 && !error) {
      let hasRequired = false
      agreements.some((agreement) => {
        if (agreement.required) {
          hasRequired = true
          return true
        }

        return false
      })

      if (hasRequired !== error) {
        setError(hasRequired)
      }
    }
  }, [agreements, error, fetchAgreements])

  return (
    <>
      {Array.isArray(agreements) && agreements.length > 0 && (
        <>
          <CheckboxesGroup name={name}>
            {agreements.map((item) => (
              <CheckboxField
                key={item.id}
                name={`${item.id}`}
                HTMLcontent={item.content}
                required={item.required}
                hasReadMore={hasReadMore}
              />
            ))}
          </CheckboxesGroup>
          {error && <StyledErrorText>{requiredErorText}</StyledErrorText>}
        </>
      )}
    </>
  )
}

Agreemnets.defaultProps = {
  name: 'agreements',
  groupType: 'checkboxGroup',
}

export default Agreemnets

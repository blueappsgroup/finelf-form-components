import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import CheckboxesGroup from '../CheckboxesGroup'
import { CheckboxField } from '../'
import { FormContext } from '../../utils'
import { StyledError } from '../FormInput/base'
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
}

const StyledErrorText = styled(StyledError)`
  position: static;
`

const Agreemnets: React.FC<AgreementsPropTypes> = ({
  linksForReplace,
  name = 'agreements',
  requiredErorText = '* Zapoznanie się z treścią regulaminu serwisu oraz polityką prywatności jest wymagane.',
}) => {
  const { id, apiUrl } = useContext(FormContext)
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
      setAgreements((linksForReplace && replaceLinkInAgreements(data)) || data)
    } catch (e) {
      console.log(e)
    }
  }, [linksForReplace, apiUrl, replaceLinkInAgreements, id])

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

import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

import CheckboxesGroup from '../CheckboxesGroup'
import { CheckboxField } from '../'
import { FormContext } from '../../utils'

type AgreementType = {
  id: string
  content: string
  required?: boolean
}

type AgreementsPropTypes = {
  linksForReplace?: { [key: string]: string }
  name?: string
}

const Agreemnets: React.FC<AgreementsPropTypes> = ({
  linksForReplace,
  name = 'agreements',
}) => {
  const { id, apiUrl } = useContext(FormContext)
  const [agreements, setAgreements] = useState<AgreementType[]>([])
  const replaceLinkInAgreements = useCallback(
    (agreements: AgreementType[]): AgreementType[] => {
      const replacedAgreements = agreements.map((item) => {
        let newContent = item.content
        if (linksForReplace) {
          Object.keys(linksForReplace).forEach(
            (key) =>
              (newContent = newContent.replace(
                `${key}`,
                `${linksForReplace[key]}`
              ))
          )
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
  }, [agreements, fetchAgreements])

  return (
    <>
      {Array.isArray(agreements) && agreements.length > 0 && (
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
      )}
    </>
  )
}

Agreemnets.defaultProps = {
  name: 'agreements',
}

export default Agreemnets

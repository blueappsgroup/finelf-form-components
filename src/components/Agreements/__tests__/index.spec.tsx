import * as React from 'react'
import { render, act } from '@testing-library/react'

import Form from '../../Form'
import Agreements from '../'

describe('<Agreements />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalRef: any = global
  const linksForReplace = {
    RULES_URL: 'https://kredyt-dla-zadluzonych.pl/regulamin',
    PRIVACY_POLICY_URL:
      'https://kredyt-dla-zadluzonych.pl/polityka-prywatnosci/',
  }
  globalRef.fetch = jest.fn(
    () =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              createdOn: '2020-10-05T07:28:31.436Z',
              modifiedOn: '2020-10-05T07:28:31.436Z',
              content:
                'Oświadczam, że zapoznałem/am się z <a href="RULES_URL" title="Regulamin serwisu ">Regulaminem Serwisu</a> oraz <a href="PRIVACY_POLICY_URL" title="Polityka prywatności">Polityką Prywatności</a>. Podane przez Ciebie dane przetwarzane będą w zakresie niezbędnym do realizacji określonego żądania zgodnie z art. 6 ust. 1 lit. b) RODO tj. do podjęcia działań przed zawarciem umowy, podejmowania działań w związku z jej wykonywaniem lub na podstawie art. 6 ust. 1 lit. f) RODO tj. w celu realizacji uzasadnionego interesu administratora. Szczegóły w Polityce Prywatności.',
              required: true,
            },
            {
              id: 2,
              createdOn: '2020-10-05T07:28:39.462Z',
              modifiedOn: '2020-10-05T07:28:39.462Z',
              content:
                'Wyrażam zgodę na otrzymywanie od Usługodawcy tj. Da Vinci Investment sp. z o.o. z siedzibą w Bydgoszczy przy ul. Krzysztofa Gotowskiego 6, 85-030 Bydgoszcz (numer KRS: 0000728065) na podane przeze mnie dane kontaktowe informacji handlowych i marketingu bezpośredniego za pomocą poczty elektronicznej, wiadomości sms/mms i połączeń telefonicznych w celu przedstawienia dedykowanych dla mnie ofert lub usług Usługodawcy. Zgoda obejmuje także profilowanie danych, które ma na celu dopasowanie oferty do moich oczekiwań. Wyrażenie zgody jest dobrowolne. Wiem, że mam prawo do cofnięcia zgody w dowolnym momencie. Przyjmuję do wiadomości, że wyrażenie powyższej zgody oznacza jednocześnie zgodę na przetwarzanie przez Usługodawcę moich danych osobowych w celu promocji oraz marketingu bezpośredniego własnych produktów i usług.',
              required: false,
            },
            {
              id: 3,
              createdOn: '2020-10-05T07:28:48.344Z',
              modifiedOn: '2020-10-05T07:28:48.344Z',
              content:
                'Wyrażam zgodę na otrzymywanie od partnerów serwisu SITE_NAME (wymienionych na stronie internetowej w linku: PARTNERS_URL) na podane przeze mnie dane kontaktowe informacji handlowych i marketingu bezpośredniego za pomocą poczty elektronicznej, wiadomości sms/mms i połączeń telefonicznych w celu przedstawienia przez nich dedykowanych dla mnie ofert lub usług, związanych z produktami pożyczkowymi. Zgoda obejmuje także profilowanie danych, które ma na celu dopasowanie oferty do moich oczekiwań. Wyrażenie zgody jest dobrowolne. Wiem, że mam prawo do cofnięcia zgody w dowolnym momencie. Przyjmuję do wiadomości, że wyrażenie powyższej zgody oznacza jednocześnie zgodę na przetwarzanie przez powyższych partnerów moich danych osobowych w celu promocji oraz marketingu bezpośredniego ich produktów i usług.',
              required: false,
            },
          ]),
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any

  beforeEach(() => {
    globalRef.fetch.mockClear()
  })
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = async ({
    formId = 'testForm',
    formProps,
    ...rest
  }) => {
    let wrapper

    await act(
      async () =>
        (wrapper = render(
          <Form id={formId} onSubmit={onSubmit} {...formProps}>
            <Agreements {...rest} />
          </Form>
        ))
    )

    return wrapper
  }

  it('matches snapshot', async () => {
    const { container } = await setupWrapper({})

    expect(container).toMatchSnapshot()
  })

  it('to has proper count of checkoxes', async () => {
    const { baseElement } = await setupWrapper({})
    const checkboxesCount = baseElement.querySelectorAll('input').length

    expect(checkboxesCount).toBe(4)
  })

  it('select all checkbox should select all checkboxes', async () => {
    let allCheckboxesSelected = true
    const { baseElement } = await setupWrapper({})
    const checkboxes = baseElement.querySelectorAll('input')

    await act(async () => {
      checkboxes[0].click()
    })

    checkboxes.forEach((checkbox) => {
      if (checkbox.value === 'false') {
        allCheckboxesSelected = false
      }
    })

    expect(allCheckboxesSelected).toBeTruthy()
  })

  it('unselect all checkbox should unselect all checkboxes', async () => {
    let allCheckboxesSelected = true
    const { baseElement } = await setupWrapper({})
    const checkboxes = baseElement.querySelectorAll('input')

    await act(async () => {
      checkboxes[0].click()
    })

    expect(allCheckboxesSelected).toBeTruthy()

    await act(async () => {
      checkboxes[0].click()
    })

    checkboxes.forEach((checkbox) => {
      if (checkbox.value === 'false') {
        allCheckboxesSelected = false
      }
    })

    expect(allCheckboxesSelected).toBeFalsy()
  })

  it('will agreements link replace', async () => {
    const { baseElement, getByText } = await setupWrapper({ linksForReplace })
    expect(getByText('Regulaminem Serwisu').closest('a')).toHaveAttribute(
      'href',
      linksForReplace.RULES_URL
    )
    expect(getByText('Polityką Prywatności').closest('a')).toHaveAttribute(
      'href',
      linksForReplace.PRIVACY_POLICY_URL
    )

    expect(baseElement).toMatchSnapshot()
  })
})

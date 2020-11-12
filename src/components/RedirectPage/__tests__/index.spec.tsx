import { render } from '@testing-library/react'
import * as React from 'react'
import RedirectPage from '../'

describe('<RedirectPage />', () => {
  it('matches snapshot', () => {
    const documentBody = render(<RedirectPage />)
    const { baseElement } = documentBody

    expect(baseElement).toMatchSnapshot()
  })

  it('matches snapshot with props', () => {
    const headerText = 'header text'
    const logoImg = 'logo.png'
    const mainImg = 'main.png'
    const documentBody = render(
      <RedirectPage
        headerText={headerText}
        logoImg={logoImg}
        mainImg={mainImg}
      />
    )
    const { baseElement } = documentBody

    expect(documentBody.getByText(headerText)).toBeTruthy()
    expect(
      documentBody.container.querySelector(`img[src="${logoImg}"]`)
    ).toBeTruthy()
    expect(
      documentBody.container.querySelector(`img[src="${mainImg}"]`)
    ).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })

  it('matches snapshot with redirect', () => {
    window.location.replace = jest.fn()
    const documentBody = render(
      <RedirectPage
        backgroundImage="test.png"
        headerText="thank you text"
        redirectUrl="http://example.com"
        timeToRedirect={0}
      />
    )
    const { baseElement } = documentBody

    expect(window.location.replace).toHaveBeenCalled()
    expect(baseElement).toMatchSnapshot()
  })
})

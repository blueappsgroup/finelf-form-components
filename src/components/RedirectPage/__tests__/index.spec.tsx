import { render } from '@testing-library/react'
import * as React from 'react'
import RedirectPage from '../'

describe('<RedirectPage />', () => {
  it('matches snapshot', () => {
    const documentBody = render(<RedirectPage headerText="thank you text" />)
    const { baseElement } = documentBody

    expect(documentBody.getByText('thank you text')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})

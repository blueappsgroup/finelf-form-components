import { render } from '@testing-library/react'
import * as React from 'react'
import Header from '../'

describe('<Header />', () => {
  it('main header matches snapshot', () => {
    const documentBody = render(<Header text="Header" />)
    const { baseElement } = documentBody

    expect(documentBody.getByText('Header')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })

  it('main header with border matches snapshot', () => {
    const documentBody = render(<Header text="Header" withBorder />)
    const { baseElement } = documentBody

    expect(documentBody.getByText('Header')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })

  it('subheader matches snapshot', () => {
    const documentBody = render(<Header text="Header" type="subheader" />)
    const { baseElement } = documentBody

    expect(documentBody.getByText('Header')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})

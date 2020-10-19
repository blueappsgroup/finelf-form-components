import { render } from '@testing-library/react'
import * as React from 'react'
import Hr from '../'

describe('<Hr />', () => {
  it('hr matches snapshot', () => {
    const documentBody = render(<Hr />)
    const { baseElement } = documentBody

    expect(baseElement).toMatchSnapshot()
  })
})

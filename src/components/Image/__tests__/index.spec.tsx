import { render } from '@testing-library/react'
import * as React from 'react'
import Image from '../'

describe('<Image />', () => {
  it('main header matches snapshot', () => {
    const documentBody = render(<Image src="" alt="image" hideOnMobile />)
    const { baseElement } = documentBody

    expect(baseElement).toMatchSnapshot()
  })
})

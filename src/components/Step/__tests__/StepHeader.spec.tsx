import * as React from 'react'
import { render } from '@testing-library/react'
import StepHeader from '../StepHeader'

describe('<StepHeader />', () => {
  it('matches snapshot', () => {
    const documentBody = render(<StepHeader />)
    const { baseElement } = documentBody
    expect(baseElement.querySelector('div')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})

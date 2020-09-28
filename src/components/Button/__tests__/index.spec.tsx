import * as React from 'react'
import { render } from '@testing-library/react'
import Button from '../'

describe('<Button />', () => {
  it('matches snapshot', () => {
    const documentBody = render(<Button text="Submit" />)
    const { baseElement } = documentBody
    expect(documentBody.getByText('Submit')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })

  it('handles onClick Event', () => {
    const handleClick = jest.fn()
    const documentBody = render(<Button text="Submit" onClick={handleClick} />)
    const buttonBody = documentBody.getByText('Submit')
    buttonBody.click()
    expect(handleClick).toBeCalledTimes(1)
  })
})

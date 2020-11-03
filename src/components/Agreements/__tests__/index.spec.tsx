import * as React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import Form from '../../Form'
import Agreemnets from '../index'

describe('base <Step />', () => {
  const onSubmit = jest.fn()
  // const setNextButtonDisabled = jest.fn()
  const stepsLength = 2
  const stepsTitles = ['1. Podstawowe dane', '2. Szczegółowe dane']
  const setupWrapper = ({
    formId = 'testForm',
    ...rest
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): any => {
    const wrapper = render(
      <Form
        id={formId}
        onSubmit={onSubmit}
        stepsLength={stepsLength}
        stepsTitles={stepsTitles}
      >
        <Agreemnets />
      </Form>
    )
    const { container } = wrapper
    const firstName = container.querySelector('[name="fName"]')

    return {
      firstName,
      ...wrapper,
    }
  }

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
      })
    )
  })

  it('matches snapshot', () => {
    const wrapper = setupWrapper({})

    expect(Agreemnets).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})

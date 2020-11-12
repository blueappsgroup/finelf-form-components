import * as React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import FirstNameField from '../../FormInput/FirstNameField'
import Form from '../../Form'
import LastNameField from '../../FormInput/LastNameField'
import Step from '../index'
import StepHeader from '../StepHeader'

describe('base <Step />', () => {
  const onSubmit = jest.fn()
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
        <Step stepIndex={0}>
          <FirstNameField name="fName" required />
        </Step>
        <Step stepIndex={1}>
          <LastNameField name="lName" required />
        </Step>
      </Form>
    )
    const { container } = wrapper
    const firstName = container.querySelector('[name="fName"]')

    return {
      firstName,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const wrapper = setupWrapper({})

    expect(StepHeader).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if required fields are not filled', () => {
    const wrapper = setupWrapper({})
    const { container } = wrapper
    const button = container.querySelector('button[disabled]')

    expect(button).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if fields are filled improperly', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.change(firstName, { target: { value: '123' } })
    })

    const button = container.querySelector('button[disabled]')

    expect(button).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('setNextButtonDisabled have been called after fill step fields', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.change(firstName, { target: { value: 'test' } })
    })

    expect(container.querySelector('button:not([disabled])')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})

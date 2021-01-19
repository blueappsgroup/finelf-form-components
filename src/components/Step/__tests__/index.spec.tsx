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
  window.scrollTo = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
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

  it('buttons disabled if required fields are not filled', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.focus(firstName, { target: { value: 'test' } })
      fireEvent.blur(firstName, { target: { value: '' } })
    })

    await act(async () => {
      fireEvent.blur(firstName, { target: { value: '' } })
    })

    expect(
      container.querySelector('form').querySelector('button')
    ).toHaveAttribute('disabled')
    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if fields are filled improperly', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.change(firstName, { target: { value: '123' } })
    })

    const button = container.querySelector('form').querySelector('button')

    expect(button).toHaveAttribute('disabled')
    expect(wrapper).toMatchSnapshot()
  })

  it('setNextButtonDisabled have been called after fill step fields', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.change(firstName, { target: { value: 'test' } })
    })

    expect(container.querySelector('form').querySelector('button')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('setNextButtonDisabled have been called after fill step fields', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper

    await act(async () => {
      fireEvent.change(firstName, { target: { value: 'test' } })
    })

    expect(container.querySelector('form').querySelector('button')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('it should through steps properly', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper
    let currentFormButton = container
      .querySelector('form')
      .querySelector('button')
    await act(async () => {
      fireEvent.change(firstName, { target: { value: 'test' } })
    })

    expect(currentFormButton.innerHTML).toEqual('Dalej')

    await act(async () => {
      currentFormButton.click()
    })

    const lastName = wrapper.container.querySelector('[name="lName"]')

    await act(async () => {
      fireEvent.change(lastName, { target: { value: 'test' } })
    })

    currentFormButton = container
      .querySelector('form')
      .querySelector('button[type=submit]')

    expect(currentFormButton.innerHTML).toEqual('Wyślij')

    expect(wrapper).toMatchSnapshot()
  })

  it('it should go next and back in steps properly', async () => {
    const wrapper = setupWrapper({})
    const { container, firstName } = wrapper
    let currentFormButton = container
      .querySelector('form')
      .querySelector('button')
    await act(async () => {
      fireEvent.change(firstName, { target: { value: 'test' } })
    })

    expect(currentFormButton.innerHTML).toEqual('Dalej')

    await act(async () => {
      currentFormButton.click()
    })

    currentFormButton = container.querySelector('form').querySelector('button')

    expect(currentFormButton.innerHTML).toEqual('Cofnij')

    await act(async () => {
      currentFormButton.click()
    })

    currentFormButton = container.querySelector('form').querySelector('button')

    expect(currentFormButton.innerHTML).toEqual('Dalej')

    expect(wrapper).toMatchSnapshot()
  })
})

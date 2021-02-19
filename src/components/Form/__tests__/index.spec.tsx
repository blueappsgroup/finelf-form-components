import * as React from 'react'
import { render, act, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FirstNameField from '../../FormInput/FirstNameField'
import Step from '../../Step'
import LastNameField from '../../FormInput/LastNameField'
import Form from '../index'

describe('base <Form />', () => {
  const onSubmit = jest.fn()
  const stepsLength = 2
  const stepsTitles = ['1. Podstawowe dane', '2. Szczegółowe dane']
  window.scrollTo = jest.fn()
  const setupWrapper = async ({
    formId = 'testForm',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => {
    let wrapper
    await act(
      async () =>
        (wrapper = render(
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
        ))
    )
    return wrapper
  }

  const setupSingleFormWrapper = async ({
    formId = 'testForm',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => {
    let wrapper
    await act(
      async () =>
        (wrapper = render(
          <Form id={formId} onSubmit={onSubmit}>
            <FirstNameField name="fName" required />
          </Form>
        ))
    )
    return wrapper
  }

  it('without matches snapshot', async () => {
    const wrapper = await setupSingleFormWrapper({})

    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if fields are filled improperly form without steps', async () => {
    const wrapper = await setupSingleFormWrapper({})

    userEvent.type(screen.getByRole('textbox'), '123')

    expect(screen.getByRole('button')).toBeDisabled()
    expect(wrapper).toMatchSnapshot()
  })

  it('buttons enabled fields are filled properly form without steps', async () => {
    await setupSingleFormWrapper({})

    userEvent.type(screen.getByRole('textbox'), 'John')

    await waitFor(() => {
      expect(screen.getByText('Wyślij')).not.toBeDisabled()
    })
  })

  it('multi step matches snapshot', async () => {
    const wrapper = await setupWrapper({})

    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if required fields are not filled', async () => {
    const wrapper = await setupWrapper({})

    expect(screen.getByRole('button')).toBeDisabled()
    expect(wrapper).toMatchSnapshot()
  })

  it('buttons disabled if fields are filled improperly', async () => {
    const wrapper = await setupWrapper({})

    userEvent.type(screen.getByRole('textbox'), '123')

    expect(screen.getByRole('button')).toBeDisabled()
    expect(wrapper).toMatchSnapshot()
  })

  it('it should through steps properly', async () => {
    await setupWrapper({})

    userEvent.type(screen.getByRole('textbox'), 'John')

    await waitFor(() => {
      expect(screen.getByText('Dalej')).not.toBeDisabled()
      userEvent.click(screen.getByText('Dalej'))
    })

    await waitFor(() => {
      expect(screen.getByText('Wyślij')).toBeTruthy()
    })
  })

  it('it should go next and back in steps properly', async () => {
    await setupWrapper({})

    userEvent.type(screen.getByRole('textbox'), 'John')

    await waitFor(() => {
      expect(screen.getByText('Dalej')).not.toBeDisabled()
      userEvent.click(screen.getByText('Dalej'))
    })

    await waitFor(() => {
      expect(screen.getByText('Cofnij')).toBeTruthy()
      userEvent.click(screen.getByText('Cofnij'))
    })

    await waitFor(() => {
      expect(screen.getByText('Dalej')).toBeTruthy()
    })
  })
})

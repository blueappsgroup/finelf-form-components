import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import CompanyNameField from '../CompanyNameField'
import { validateText } from '../validate'

describe('<CompanyNameField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'testId',
    inputName = 'company_name',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <CompanyNameField
          id={inputId}
          name={inputName}
          validate={validate}
          required={required}
          {...rest}
        />
      </Form>
    )
    const { container } = wrapper

    const input = container.querySelector(`[name="${inputName}"]`)

    return {
      input,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { input } = setupWrapper({})

    expect(input).toBeTruthy()
    expect(input).toMatchSnapshot()
  })

  it('matches snapshot with label', () => {
    const wrapper = setupWrapper({ label: 'CompanyName' })
    const { container } = wrapper

    expect(wrapper.getByText('CompanyName')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: 'Name' },
      })
    })

    expect(input.value).toBe('Name')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: 'Name' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'Name' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('Name')
    expect(input.value).toBe('Name')
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'CompanyName',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, {
        target: { value: 'Name' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'Name' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('input field with custom validation', async () => {
    const inputValue = '3232'

    const wrapper = setupWrapper({
      validate: validateText,
      showError: true,
    })

    const { input, container } = wrapper

    await act(async () => {
      fireEvent.change(input, { target: { value: inputValue } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: inputValue } })
    })

    expect(container).toMatchSnapshot()
    expect(wrapper.getByText('Podane dane są nieprawidłowe')).toBeTruthy()
  })
})

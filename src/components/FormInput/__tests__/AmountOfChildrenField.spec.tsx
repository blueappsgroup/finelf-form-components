import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import AmountOfChildrenField from '../AmountOfChildrenField'

describe('<AmountOfChildrenField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'amountOfChildrenField',
    inputName = 'name',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <AmountOfChildrenField
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
    const wrapper = setupWrapper({ label: 'Test' })
    const { container } = wrapper

    expect(wrapper.getByText('Test')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'Test',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, { target: { value: '0' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '0' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: '0' } })
    })

    expect(input.value).toBe('0')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: '0' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '0' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('0')
    expect(input.value).toBe('0')
  })

  it('input field with custom validation', async () => {
    const customValidate = () => (value: string): string => {
      if (value === 'test') {
        return 'Podana ilość jest nieprawidłowa'
      }
    }
    const wrapper = setupWrapper({
      validate: customValidate,
      showError: true,
    })
    const { input, container } = wrapper

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'test' } })
    })

    expect(container).toMatchSnapshot()
    expect(wrapper.getByText('Podana ilość jest nieprawidłowa')).toBeTruthy()
  })
})

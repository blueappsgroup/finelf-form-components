import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import ApartmentNumberField from '../ApartmentNumberField'
import { validateHouseNumber } from '../validate'

describe('<ApartmentNumberField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'testId',
    inputName = 'apartment_number',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <ApartmentNumberField
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
    const wrapper = setupWrapper({ label: 'ApartmentNumber' })
    const { container } = wrapper

    expect(wrapper.getByText('ApartmentNumber')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: 'ApartmentNumber' },
      })
    })

    expect(input.value).toBe('ApartmentNumber')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '12' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '12' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .apartment_number
    ).toBe('12')
    expect(input.value).toBe('12')
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'ApartmentNumber',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, {
        target: { value: '12' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '12' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('input field with custom validation', async () => {
    const inputValue = '12345678900'

    const wrapper = setupWrapper({
      validate: validateHouseNumber,
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
    expect(
      wrapper.getByText('Podany numer mieszkania jest nieprawidłowy')
    ).toBeTruthy()
  })
})

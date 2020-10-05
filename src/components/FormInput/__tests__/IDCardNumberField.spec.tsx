import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import IDCardNumberField from '../IDCardNumberField'
import { validateIDCardNumber } from '../validate'

describe('<IDCardNumberField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'testId',
    inputName = 'id_card_number',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <IDCardNumberField
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
    const wrapper = setupWrapper({ label: 'IDCard' })
    const { container } = wrapper

    expect(wrapper.getByText('IDCard')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '10124053093431531537409646' },
      })
    })

    expect(input.value).toBe('10124053093431531537409646')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '48800210439233148617383844' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '48800210439233148617383844' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('48800210439233148617383844')
    expect(input.value).toBe('48800210439233148617383844')
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'IDcard',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, {
        target: { value: '48800210439233148617383844' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '48800210439233148617383844' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('input field with custom validation', async () => {
    const inputValue = '48801213439233148617383842'

    const wrapper = setupWrapper({
      validate: validateIDCardNumber,
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
      wrapper.getByText('Podany numer dowodu jest nieprawidłowy')
    ).toBeTruthy()
  })
})

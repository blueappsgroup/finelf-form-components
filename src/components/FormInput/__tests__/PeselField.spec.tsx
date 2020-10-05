import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import PeselField from '../PeselField'
import { validatePesel } from '../validate'

describe('<PeselField/>', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'testId',
    inputName = 'id_code',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <PeselField
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
    const wrapper = setupWrapper({ label: 'Pesel' })
    const { container } = wrapper

    expect(wrapper.getByText('Pesel')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '22222222222' },
      })
    })

    expect(input.value).toBe('22222222222')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '22222222221' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '22222222221' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('22222222221')
    expect(input.value).toBe('22222222221')
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'Pesel',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, {
        target: { value: '22222222222' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '22222222222' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('input field with custom validation', async () => {
    const inputValue = '2312'

    const wrapper = setupWrapper({
      validate: validatePesel,
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
    expect(wrapper.getByText('Podany PESEL jest nieprawidłowy')).toBeTruthy()
  })
})

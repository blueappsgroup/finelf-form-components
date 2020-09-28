import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Field } from 'formik'

import Form from '../../Form'
import BaseField from '../base'
import { validateText } from '../validate'

describe('base <BaseField />', () => {
  const onSubmit = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
    inputId = 'baseField',
    inputName = 'baseField',
    required = false,
    component = BaseField,
    ...rest
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): any => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <Field
          id={inputId}
          name={inputName}
          component={component}
          validate={validateText(required)}
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
      fireEvent.focus(input, { target: { value: 'test' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'test' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
    })

    expect(input.value).toBe('test')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'test' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .baseField
    ).toBe('test')
    expect(input.value).toBe('test')
  })
})

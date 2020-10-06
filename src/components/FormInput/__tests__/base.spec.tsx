import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Field } from 'formik'

import Form from '../../Form'
import { BaseSelectField, BaseRangeField } from '../base'
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

describe('base <BaseSelectField />', () => {
  const onSubmit = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
    inputId = 'baseSelectField',
    inputName = 'baseSelectField',
    required = false,
    component = BaseSelectField,
    options = { test1: 'test1', test2: 'test2' },
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
          options={options}
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

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test1' } })
    })

    expect(input.value).toBe('test1')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test1' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'test1' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .baseField
    ).toBe('test')
    expect(input.value).toBe('test1')
  })
})

describe('base <BaseRangeField />', () => {
  const onSubmit = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
    inputId = 'baseRangeField',
    inputName = 'baseRangeField',
    required = false,
    component = BaseRangeField,
    min = 300,
    max = 10000,
    step = 100,
    value = 2000,
    suffix = 'PLN',
    unit = 'zł',
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
          min={min}
          max={max}
          step={step}
          value={value}
          suffix={suffix}
          unit={unit}
          {...rest}
        />
      </Form>
    )
    const { container } = wrapper

    const input = container.querySelector(`[name="${inputName}"]`)
    const slider = container.querySelector('.rangeslider')

    return {
      input,
      slider,
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

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: '400' } })
    })

    expect(input.value).toBe('400')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: '400' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '400' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .baseField
    ).toBe('test')
    expect(input.value).toBe('400')
  })
})

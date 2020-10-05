import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import CompanyTaxField from '../CompanyTaxField'
import { validateCompanyTax } from '../validate'

describe('<CompanyTaxField/>', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'testId',
    inputName = 'company_tax_id',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <CompanyTaxField
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
    const wrapper = setupWrapper({ label: 'Company Tax' })
    const { container } = wrapper

    expect(wrapper.getByText('Company Tax')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '9481678742' },
      })
    })

    expect(input.value).toBe('9481678742')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, {
        target: { value: '9481678742' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '9481678742' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .company_tax_id
    ).toBe('9481678742')
    expect(input.value).toBe('9481678742')
  })

  it('matches snapshot with error', async () => {
    const wrapper = setupWrapper({
      label: 'CompanyTax',
      showError: true,
      required: true,
      error: 'true',
    })
    const { container, input } = wrapper

    await act(async () => {
      fireEvent.focus(input, {
        target: { value: '9481678742' },
      })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: '9481678742' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('input field with custom validation', async () => {
    const inputValue = '948167873'

    const wrapper = setupWrapper({
      validate: validateCompanyTax,
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
    expect(wrapper.getByText('Podany NIP jest nieprawidłowy')).toBeTruthy()
  })
})

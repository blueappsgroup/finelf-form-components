import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import LoanReasonField from '../LoanReasonField'
import { isNotValidOption } from '../validateHelpers'

describe('<LoanReasonField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    selectId = 'loanReasonField',
    selectName = 'name',
    required = false,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <LoanReasonField
          id={selectId}
          name={selectName}
          required={required}
          {...rest}
        />
      </Form>
    )
    const { container } = wrapper

    const select = container.querySelector(`[name="${selectName}"]`)

    return {
      select,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { select } = setupWrapper({})

    expect(select).toBeTruthy()
    expect(select).toMatchSnapshot()
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
    const { container, select } = wrapper

    await act(async () => {
      fireEvent.focus(select, { target: { value: 'bills' } })
    })

    await act(async () => {
      fireEvent.blur(select, { target: { value: 'bills' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes select field', async () => {
    const { select } = setupWrapper({})

    await act(async () => {
      fireEvent.change(select, { target: { value: 'investment' } })
    })

    expect(select.value).toBe('investment')
  })

  it('select field onBlur save value to sessionStorage', async () => {
    const { select } = setupWrapper({})

    await act(async () => {
      fireEvent.change(select, { target: { value: 'investment' } })
    })

    await act(async () => {
      fireEvent.blur(select, { target: { value: 'investment' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('investment')
    expect(select.value).toBe('investment')
  })

  it('select field with custom validation', async () => {
    const customValidate = () => (value: string): string => {
      /* eslint-disable @typescript-eslint/camelcase */
      if (
        isNotValidOption(value, {
          bills: 'rachunki',
          other_loans: 'inne pożyczki',
          vacation: 'wakacje',
          education: 'edukacja',
          car: 'samochód',
          medical_expenses: 'wydatki zdrowotne',
          renovation: 'renowacja',
          electronics: 'elektronika',
          furniture: 'meble',
          other: 'inne',
          investment: 'inwestycja',
          tax_payment: 'spłata podatków',
        })
      ) {
        return 'Podane dane są nieprawidłowe'
      }
    }
    const wrapper = setupWrapper({
      validate: customValidate,
      showError: true,
    })
    const { select, container } = wrapper

    await act(async () => {
      fireEvent.change(select, { target: { value: 'test' } })
    })

    await act(async () => {
      fireEvent.blur(select, { target: { value: 'test' } })
    })

    expect(container).toMatchSnapshot()
    expect(wrapper.getByText('Podane dane są nieprawidłowe')).toBeTruthy()
  })
})

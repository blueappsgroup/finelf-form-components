import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import LoanReasonField from '../LoanReasonField'

describe('<LoanReasonField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'loanReasonField',
    inputName = 'name',
    required = false,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <LoanReasonField
          id={inputId}
          name={inputName}
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

  it('changes input field', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'investment' } })
    })

    expect(input.value).toBe('investment')
  })

  it('input field onBlur save value to sessionStorage', async () => {
    const { input } = setupWrapper({})

    await act(async () => {
      fireEvent.change(input, { target: { value: 'investment' } })
    })

    await act(async () => {
      fireEvent.blur(input, { target: { value: 'investment' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('investment')
    expect(input.value).toBe('investment')
  })
})

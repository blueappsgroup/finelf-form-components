import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import CheckboxField from '../CheckboxField'

describe('<CheckboxField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    checkboxId = 'checkboxField',
    checkboxName = 'checkbox_field',
    required = false,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <CheckboxField
          id={checkboxId}
          name={checkboxName}
          required={required}
          {...rest}
        />
      </Form>
    )
    const { container } = wrapper

    const checkbox = container.querySelector(`[name="${checkboxName}"]`)

    return {
      checkbox,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { checkbox } = setupWrapper({})

    expect(checkbox).toBeTruthy()
    expect(checkbox).toMatchSnapshot()
  })

  it('matches snapshot with label', () => {
    const wrapper = setupWrapper({ label: 'Test' })
    const { container } = wrapper

    expect(wrapper.getByText('Test')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes checkbox field', async () => {
    const { checkbox } = setupWrapper({})

    await act(async () => {
      fireEvent.click(checkbox)
    })

    expect(checkbox.checked).toBe(true)
  })

  it('checkbox field handleOnMouseOut save value to sessionStorage', async () => {
    const { checkbox } = setupWrapper({})

    await act(async () => {
      fireEvent.click(checkbox)
    })

    await act(async () => {
      fireEvent.mouseOut(checkbox)
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .checkbox_field
    ).toBe(true)
    expect(checkbox.checked).toBe(true)
  })
})

import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import BirthDateField from '../BirthDateField'

describe('<BirthDateField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    inputId = 'birthDateField',
    inputName = 'name',
    required = false,
    validate,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <BirthDateField
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
})

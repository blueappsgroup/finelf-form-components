import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import { FirstNameField, LastNameField } from '../../FormInput'
import { OptionalGroup } from '../../index'

describe('base <OptionalGroup />', () => {
  const onSubmit = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
    label = 'optional group test',
    name = 'optional_group',
    ...rest
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): any => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <OptionalGroup name={name} label={label}>
          <FirstNameField name="fName" />
          <LastNameField name="lName" />
        </OptionalGroup>
      </Form>
    )
    const { container } = wrapper

    const optionalGroup = container.querySelector(`[name="${name}"]`)

    return {
      optionalGroup,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { optionalGroup } = setupWrapper({})

    expect(optionalGroup).toBeTruthy()
    expect(optionalGroup).toMatchSnapshot()
  })
})

import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import { CheckboxField } from '../../FormInput'
import CheckboxesGroup from '../index'

describe('base <CheckboxesGroup />', () => {
  const onSubmit = jest.fn()
  const setupWrapper = ({
    formId = 'testForm',
    checkboxFieldLabel = 'test checkbox',
    checkboxesGroupName = 'checkboxes_group',
    checkboxesGroupFirstCheckboxName = 'checkbox1',
    checkboxesGroupSecondCheckboxName = 'checkbox2',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): any => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <CheckboxesGroup name={checkboxesGroupName}>
          <CheckboxField
            name={checkboxesGroupFirstCheckboxName}
            label={checkboxFieldLabel}
          />
          <CheckboxField
            name={checkboxesGroupSecondCheckboxName}
            label={checkboxFieldLabel}
          />
        </CheckboxesGroup>
      </Form>
    )
    const { container } = wrapper

    const checkboxesGroup = container.querySelector(
      `[name="${checkboxesGroupName}.selectAll"]`
    )

    return {
      checkboxesGroup,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { checkboxesGroup } = setupWrapper({})

    expect(checkboxesGroup).toBeTruthy()
    expect(checkboxesGroup).toMatchSnapshot()
  })

  it('CheckboxesGroup field handleOnChange save values to sessionStorage', async () => {
    const { checkboxesGroup } = setupWrapper({})

    await act(async () => {
      fireEvent.click(checkboxesGroup)
    })

    await act(async () => {
      fireEvent.mouseOut(checkboxesGroup)
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .checkboxes_group.selectAll
    ).toBe(true)
    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .checkboxes_group.checkbox1
    ).toBe(true)
    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm'))
        .checkboxes_group.checkbox2
    ).toBe(true)
    expect(checkboxesGroup.checked).toBe(true)
  })
})

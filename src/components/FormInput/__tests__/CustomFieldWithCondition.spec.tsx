import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import BaseField from '../base'
import CustomFieldWithCondition from '../CustomFieldWithCondition'
import EmploymentTypeField from '../EmploymentTypeField'
import { validateText } from '../validate'

describe('<CustomFieldWithCondition />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  /* eslint-disable @typescript-eslint/camelcase */

  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    fieldId = 'customFieldWithCondition',
    fieldName = 'customFieldWithCondition',
    required = false,
    showError = false,
    validate = validateText,
    requiredCondition,
    visibleCondition = { employment_type: ['self_employed'] },
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <EmploymentTypeField />
        <CustomFieldWithCondition
          id={fieldId}
          component={BaseField}
          required={required}
          showError={showError}
          name={fieldName}
          validate={validate}
          requiredCondition={requiredCondition}
          visibleCondition={visibleCondition}
          {...rest}
        />
      </Form>
    )
    const { container } = wrapper

    const field = container.querySelector(`[name="${fieldName}"]`)
    const employmentTypeField = container.querySelector(
      '[name="employment_type"]'
    )

    return {
      field,
      employmentTypeField,
      ...wrapper,
    }
  }

  it('matches snapshot', () => {
    const { field } = setupWrapper({
      visibleCondition: null,
    })

    expect(field).toBeTruthy()
    expect(field).toMatchSnapshot()
  })

  it('matches snapshot without visibleCondition met', () => {
    const { field } = setupWrapper({})

    expect(field).toBeFalsy()
    expect(field).toMatchSnapshot()
  })

  it('matches snapshot with visibleCondition met', async () => {
    const wrapper = setupWrapper({})
    const { employmentTypeField, container } = wrapper

    await act(async () => {
      fireEvent.change(employmentTypeField, {
        target: { value: 'self_employed' },
      })
    })

    await act(async () => {
      fireEvent.blur(employmentTypeField, {
        target: { value: 'self_employed' },
      })
    })

    expect(
      container.querySelector('[name="customFieldWithCondition"]')
    ).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot without requiredCondition met', () => {
    const { field } = setupWrapper({
      requiredCondition: { employment_type: ['self_employed'] },
    })

    expect(field).toBeFalsy()
    expect(field).toMatchSnapshot()
  })

  it('matches snapshot with requiredCondition met', async () => {
    const wrapper = setupWrapper({
      requiredCondition: { employment_type: ['self_employed'] },
    })
    const { employmentTypeField, container } = wrapper

    await act(async () => {
      fireEvent.change(employmentTypeField, {
        target: { value: 'self_employed' },
      })
    })

    await act(async () => {
      fireEvent.blur(employmentTypeField, {
        target: { value: 'self_employed' },
      })
    })

    expect(
      container.querySelector('[name="customFieldWithCondition"]')
    ).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

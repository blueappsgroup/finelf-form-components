import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import HousingStatusField from '../HousingStatusField'
import { isNotValidOption } from '../validateHelpers'

describe('<HousingStatusField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    selectId = 'housingStatusField',
    selectName = 'name',
    required = false,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <HousingStatusField
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
      fireEvent.focus(select, { target: { value: 'property' } })
    })

    await act(async () => {
      fireEvent.blur(select, { target: { value: 'property' } })
    })

    expect(wrapper.getByText('To pole jest wymagane')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('changes select field', async () => {
    const { select } = setupWrapper({})

    await act(async () => {
      fireEvent.change(select, { target: { value: 'property' } })
    })

    expect(select.value).toBe('property')
  })

  it('select field onBlur save value to sessionStorage', async () => {
    const { select } = setupWrapper({})

    await act(async () => {
      fireEvent.change(select, { target: { value: 'property' } })
    })

    await act(async () => {
      fireEvent.blur(select, { target: { value: 'property' } })
    })

    expect(
      JSON.parse(global.window.sessionStorage.getItem('form-testForm')).name
    ).toBe('property')
    expect(select.value).toBe('property')
  })

  it('select field with custom validation', async () => {
    const customValidate = () => (value: string): string => {
      /* eslint-disable @typescript-eslint/camelcase */
      if (
        isNotValidOption(value, {
          property: 'mieszkanie własne',
          with_parent: 'mieszkanie rodziców',
          rental: 'mieszkanie wynajmowane',
          room: 'pokój',
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

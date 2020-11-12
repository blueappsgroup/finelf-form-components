import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import Form from '../../Form'
import DatePickerCore from '../DatePickerCore'

describe('<DatePickerCore />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    name = 'date',
    placeholderText = 'dd/MM/yyyy',
    required = false,
    ...rest
  }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <DatePickerCore
          placeholderText={placeholderText}
          required={required}
          name={name}
        />
      </Form>
    )
    const { container } = wrapper

    const datePickerCore = container.querySelector(`[name="${name}"]`)

    return {
      datePickerCore,
      ...wrapper,
    }
  }

  it('matches snapshot DatePickerCore', () => {
    const { datePickerCore } = setupWrapper({})

    expect(datePickerCore).toBeTruthy()
    expect(datePickerCore).toMatchSnapshot()
  })

  it('DatePickerCore show CustomHeader onFocus', async () => {
    const wrapper = setupWrapper({})
    const { datePickerCore, container } = wrapper

    /* eslint-disable @typescript-eslint/no-empty-function */
    global.document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    })

    await act(async () => {
      fireEvent.focus(datePickerCore)
    })

    expect(container.querySelector('.react-datepicker__header')).toBeTruthy()
    expect(datePickerCore.readOnly).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('select boxes in DatePickerCore onChange', async () => {
    const { datePickerCore, container } = setupWrapper({})

    await act(async () => {
      fireEvent.focus(datePickerCore)
    })

    const select = container.querySelectorAll('select')
    const yearSelect = select[0]
    const yearSelectOption = yearSelect.querySelector('select option')
    const monthSelect = select[1]
    const monthSelectOption = monthSelect.querySelector('select option')

    await act(async () => {
      fireEvent.change(yearSelect, {
        target: { value: yearSelectOption.value },
      })
    })

    await act(async () => {
      fireEvent.change(monthSelect, {
        target: { value: monthSelectOption.value },
      })
    })

    expect(yearSelect.querySelector('option:checked').value).toBe(
      yearSelectOption.value
    )
    expect(monthSelect.querySelector('option:checked').value).toBe(
      monthSelectOption.value
    )
  })
})

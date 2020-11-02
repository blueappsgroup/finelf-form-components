import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { formStatuses } from '../../../consts/form'

import Form from '../../Form'
import FormStatusText from '../index'
describe('<BirthDateField />', () => {
  const onSubmit = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({ formId = 'testForm' }) => {
    const wrapper = render(
      <Form id={formId} onSubmit={onSubmit}>
        <FormStatusText
          successText="Dziękujemy, twoje dane zostały przesłane."
          errorText="Coś poszło nie tak spróbuj ponownie"
        />
      </Form>
    )

    const { container } = wrapper
    const form = container.querySelector(`#${formId}`)

    return {
      form,
      ...wrapper,
    }
  }

  it('matches snapshot', async () => {
    const wrapper = setupWrapper({})
    const { container, form } = wrapper

    await act(async () => {
      fireEvent.submit(form)
    })

    expect(container).toMatchSnapshot()
    expect(
      wrapper.getByText('Dziękujemy, twoje dane zostały przesłane.')
    ).toBeTruthy()
  })
})

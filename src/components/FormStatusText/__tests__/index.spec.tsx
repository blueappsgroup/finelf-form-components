import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { formStatuses } from '../../../consts/form'
import { FormValuesType } from '../../../types'

import Form from '../../Form'
import FormStatusText from '../index'
describe('<BirthDateField />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    formId = 'testForm',
    onSubmit = jest.fn(),
  }) => {
    const wrapper = render(
      <Form
        id={formId}
        onSubmit={onSubmit}
        apiUrl="http://localhost"
        sendDataToApi
      >
        <FormStatusText
          successText="Dziękujemy, twoje dane zostały przesłane"
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
    const { form } = wrapper

    await act(async () => {
      fireEvent.submit(form)
    })

    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper.getByText('Dziękujemy, twoje dane zostały przesłane')
    ).toBeTruthy()
  })

  it('matches snapshot error', async () => {
    const onSubmit = (values: FormValuesType, props: any) => {
      props.setStatus(formStatuses.error)
    }
    const wrapper = setupWrapper({ onSubmit })
    const { form } = wrapper

    await act(async () => {
      fireEvent.submit(form)
    })

    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper.getByText('Coś poszło nie tak spróbuj ponownie')
    ).toBeTruthy()
  })
})

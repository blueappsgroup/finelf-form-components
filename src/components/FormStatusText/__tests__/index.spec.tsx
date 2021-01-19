import * as React from 'react'
import { render } from '@testing-library/react'
import { FormContext } from '../../../utils'

import FormStatusText from '../'
import { formStatuses } from '../../../consts/form'

describe('<FormStatusText />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupWrapper: (config: any) => any = ({
    errorText = 'Error from api',
    successText = 'Submited',
    formStatus,
    errorFromApi,
  }) => {
    const wrapper = render(
      <FormContext.Provider
        value={
          {
            formStatus,
            errorFromApi,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
      >
        <FormStatusText errorText={errorText} successText={successText} />
      </FormContext.Provider>
    )

    return {
      ...wrapper,
    }
  }

  it('shows success messages when form status is submited', async () => {
    const { container, getByText } = setupWrapper({
      formStatus: formStatuses.submited,
    })

    expect(getByText('Submited')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('shows error messages when form status is error', async () => {
    const { container, getByText } = setupWrapper({
      formStatus: formStatuses.error,
    })

    expect(getByText('Error from api')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('shows error messages when agrrements not fetched', async () => {
    const { container, getByText } = setupWrapper({
      formStatus: formStatuses.agrrementsError,
    })

    expect(getByText(formStatuses.agrrementsError)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('shows custom success messages when form status is submited', async () => {
    const { container, getByText } = setupWrapper({
      successText: 'Thank u for submiting',
      formStatus: formStatuses.submited,
    })

    expect(getByText('Thank u for submiting')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('shows custom error messages when form status is error', async () => {
    const { container, getByText } = setupWrapper({
      formStatus: formStatuses.error,
      errorText: 'Some bad thing happens',
    })

    expect(getByText('Some bad thing happens')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

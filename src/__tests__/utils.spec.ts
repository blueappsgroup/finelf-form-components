import {
  setFormValuesToCache,
  getFormValuesFromCache,
  resetFormValueCache,
  getFieldsValuesFromUrl,
  handleSendDataToApi,
} from '../utils'

describe('utils', () => {
  const globalRef: any = global

  globalRef.fetch = jest.fn(
    () => Promise.resolve({})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any

  beforeEach(() => {
    globalRef.fetch.mockClear()
  })

  const formId = 'testForm'
  it('set values to cache properly', () => {
    setFormValuesToCache({ name: 'Test', fName: 'John' }, formId)
    expect(
      JSON.parse(global.window.sessionStorage.getItem(`form-${formId}`))
    ).toEqual({
      name: 'Test',
      fName: 'John',
    })
  })

  it('get values from cache properly', () => {
    setFormValuesToCache({ name: 'Test', fName: 'John' }, formId)
    expect(getFormValuesFromCache(formId)).toEqual({
      name: 'Test',
      fName: 'John',
    })
  })

  it('reset values in cache properly', () => {
    setFormValuesToCache({ name: 'Test', fName: 'John' }, formId)
    expect(getFormValuesFromCache(formId)).toEqual({
      name: 'Test',
      fName: 'John',
    })
    resetFormValueCache(formId)
    expect(getFormValuesFromCache(formId)).toEqual({})
  })

  it('get values from URL properly', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { search: '?test=testval&paramOther=test123' },
    })

    const valusesFromUrl = getFieldsValuesFromUrl(['test', 'paramOther'])
    expect(valusesFromUrl).toEqual({
      test: 'testval',
      paramOther: 'test123',
    })
  })

  it('should handleSendDataToApi correctly', async () => {
    const formId = 'testForm'
    const apiUrl = 'http://test.com'
    const values = { name: 'test' }
    await handleSendDataToApi(values, apiUrl, formId, ['id'])

    expect(globalRef.fetch).toHaveBeenCalledWith(
      `${apiUrl}/forms/${formId}/data`,
      {
        body: `{"formName":"${formId}","data":${JSON.stringify(values)}}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
  })

  it('should handleSendDataToApi with trimed values correctly', async () => {
    const formId = 'testForm'
    const apiUrl = 'http://test.com'
    const values = { name: ' test', fName: ' John ' }
    const mappedValues = { name: 'test', fName: 'John' }
    await handleSendDataToApi(values, apiUrl, formId, ['id'])

    expect(globalRef.fetch).toHaveBeenCalledWith(
      `${apiUrl}/forms/${formId}/data`,
      {
        body: `{"formName":"${formId}","data":${JSON.stringify(mappedValues)}}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
  })

  it('should handleSendDataToApi with skiped values correctly', async () => {
    const formId = 'testForm'
    const apiUrl = 'http://test.com'
    const values = { name: 'test', fName: 'John' }
    const mappedValues = { name: 'test' }
    await handleSendDataToApi(values, apiUrl, formId, ['fName'])

    expect(globalRef.fetch).toHaveBeenCalledWith(
      `${apiUrl}/forms/${formId}/data`,
      {
        body: `{"formName":"${formId}","data":${JSON.stringify(mappedValues)}}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
  })

  it('should handleSendDataToApi with agreements', async () => {
    const formId = 'testForm2'
    const apiUrl = 'http://test2.com'
    const values = {
      name: 'test2',
    }
    const agreements = { selectAll: true, '1': true, '2': false }
    const mappedAgreements = ['1']
    await handleSendDataToApi({ ...values, agreements }, apiUrl, formId, ['id'])

    expect(globalRef.fetch).toHaveBeenCalledWith(
      `${apiUrl}/forms/${formId}/data`,
      {
        body: `{"formName":"${formId}","data":${JSON.stringify(
          values
        )},"agreements":${JSON.stringify(mappedAgreements)}}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
  })

  it('should handleSendDataToApi with user agent', async () => {
    const formId = 'testForm2'
    const apiUrl = 'http://test2.com'
    const userAgent = window.navigator.userAgent || 'custom browser'
    const values = {
      name: 'test2',
    }

    const agreements = { selectAll: true, '1': true, '2': false }
    const mappedAgreements = ['1']
    await handleSendDataToApi(
      { ...values, agreements },
      apiUrl,
      formId,
      ['id'],
      true
    )
    console.log(window.navigator.userAgent)
    expect(globalRef.fetch).toHaveBeenCalledWith(
      `${apiUrl}/forms/${formId}/data`,
      {
        body: `{"formName":"${formId}","data":${JSON.stringify({
          ...values,
          // eslint-disable-next-line @typescript-eslint/camelcase
          user_agent: userAgent,
        })},"agreements":${JSON.stringify(mappedAgreements)}}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
  })
})

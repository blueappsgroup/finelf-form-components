import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header, TextField, FormStatusText, Form, Step, Row } from '../'
import { FormProps, FormValuesType } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (values: FormValuesType, props: any): void => {
  console.log(props)
  console.log(values)
}

export default {
  title: 'Steps',
  component: Step,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header text="Test title with steps" />
    <FormStatusText
      successText="Dziękujemy, twoje dane zostały przesłane."
      errorText="Coś poszło nie tak spróbuj ponownie"
    />
    <Step stepIndex={0}>
      <TextField required showError placeholder="Name1" name="firstName1" />
      <TextField required placeholder="Surname1" name="lastName" />
    </Step>
    <Step stepIndex={1}>
      <TextField required showError placeholder="Name2" name="firstName2" />
      <TextField placeholder="City" name="city" />
      <Row>
        <TextField required showError placeholder="Name4" name="firstName4" />
        <TextField placeholder="City2" name="city2" />
      </Row>
    </Step>
    <Step stepIndex={2}>
      <TextField required showError placeholder="Name5" name="firstName5" />
    </Step>
    <Step stepIndex={3}>
      <TextField required showError placeholder="Name3" name="firstName3" />
    </Step>
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'testFormWithSteps',
  onSubmit,
  stepsLength: 4,
  stepsTitles: ['1. Step', '2. Step', '3. Step', '4. Step'],
}

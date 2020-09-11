import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  Header,
  TextField,
  Button,
  CheckboxField,
  SubmitSuccessText,
  Form,
  CheckboxesGroup,
} from '../'
import { FormProps, FormValuesType } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (values: FormValuesType, props: any): void => {
  console.log(props)
  console.log(values)
}

export default {
  title: 'Form',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header text="Test title" />
    <SubmitSuccessText text="Dziękujemy, twoje dane zostały przesłane." />
    <TextField required showError placeholder="Name" name="firstName" />
    <TextField required placeholder="Surname" name="lastName" />
    <TextField placeholder="City" name="city" />
    <Header text="Test title" type="subheader" />
    <CheckboxField name="agreement1" label="Test agreement text" />
    <CheckboxField
      name="agreement2"
      label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
    />
    <Button text="Send" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'testForm',
  onSubmit,
}

export const Custom = Template.bind({})

Custom.args = {
  id: 'testForm2',
  onSubmit,
  customTheme: { formBgColor: 'red' },
}

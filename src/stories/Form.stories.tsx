import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  Header,
  TextField,
  Button,
  CheckboxField,
  FormStatusText,
  Form,
  CheckboxesGroup,
  Step,
  Row,
  Agreements,
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
    <Header withBorder text="Test title" />
    <FormStatusText
      successText="Dziękujemy, twoje dane zostały przesłane."
      errorText="Coś poszło nie tak spróbuj ponownie"
    />
    <TextField required showError placeholder="Name" name="firstName" />
    <TextField required placeholder="Surname" name="lastName" />
    <TextField placeholder="City" name="city" />
    <Header text="Test title" type="subheader" />
    <CheckboxField
      name="agreement13"
      label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      required
    />
    <CheckboxesGroup name="agreements2">
      <CheckboxField
        name="agreement1"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
        required
      />
      <CheckboxField
        name="agreement2"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      />
      <CheckboxField name="agreement3">
        <a href="https://www.czerwona-skarbonka.pl">Test link</a>
      </CheckboxField>
    </CheckboxesGroup>
    <Agreements />
    <Button type="submit" text="Send" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'testForm',
  onSubmit,
  transactionName: 'name',
  apiUrl: 'http://localhost:3000/api',
  sendDataToApi: true,
}

const TemplateSteps: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header text="Test title" />
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
      <Header text="Zgody" type="subheader" />
      <CheckboxesGroup name="agreements">
        <CheckboxField
          name="agreement1"
          label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
        />
        <CheckboxField
          name="agreement2"
          label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
        />
      </CheckboxesGroup>
    </Step>
  </Form>
)

export const WithSteps = TemplateSteps.bind({})

WithSteps.args = {
  id: 'testForm',
  onSubmit,
  stepsLength: 4,
  stepsTitles: ['1. Step', '2. Step', '3. Step', '4. Step'],
}

const TemplateWithRedirect: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header withBorder text="Test title" />
    <FormStatusText
      successText="Dziękujemy, twoje dane zostały przesłane."
      errorText="Coś poszło nie tak spróbuj ponownie"
    />
    <TextField required showError placeholder="Name" name="firstName" />
    <TextField required placeholder="Surname" name="lastName" />
    <TextField placeholder="City" name="city" />
    <Header text="Test title" type="subheader" />
    <CheckboxesGroup name="agreements">
      <CheckboxField
        name="agreement1"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      />
      <CheckboxField
        name="agreement2"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      />
      <CheckboxField name="agreement3">
        <a href="https://www.czerwona-skarbonka.pl/?source=adwords&keyword=czerwona%20skarbonka&campaign=1503102691&gclid=Cj0KCQjwnqH7BRDdARIsACTSAdtAOoF267kxfg1HdJciN3BsJibLmULBvK1_zufHDFNEZPuLsY7c-k4aAnJ1EALw_wcB">
          Test link
        </a>
      </CheckboxField>
    </CheckboxesGroup>
    <Button type="submit" text="Send" />
  </Form>
)

export const WithRedirect = TemplateWithRedirect.bind({})

WithRedirect.args = {
  id: 'testForm',
  onSubmit,
  hasRedirect: true,
  redirectUrl: 'https://www.czerwona-skarbonka.pl',
  timeToRedirect: 10,
  redirectHeaderText: 'Dziękujemy za hajs',
  logoImg:
    'https://www.czerwona-skarbonka.pl/wp-content/themes/czerwona-skarbonka/public/images/czerwona-skarbonka-logo.png',
}

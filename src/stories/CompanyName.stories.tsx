import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, CompanyNameField, EmploymentTypeField, Step } from '..'
import { FormProps, TextFieldWithConditonProps } from '../types'

export default {
  title: 'CompanyName',
  component: CompanyNameField,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <EmploymentTypeField />
    <CompanyNameField name="company_name" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'CompanyName',
}

const TemplateWithRelatedField: Story<TextFieldWithConditonProps> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form id="tessst" onSubmit={() => {}}>
    <EmploymentTypeField />
    <CompanyNameField {...args} />
  </Form>
)

export const WithRelated = TemplateWithRelatedField.bind({})

WithRelated.args = {
  name: 'company_name',
}

const TemplateWithCustomVisibleRelatedField: Story<TextFieldWithConditonProps> = (
  args
) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form id="tessst" onSubmit={() => {}} stepsLength={1} stepsTitles={['test']}>
    <Step stepIndex={0}>
      <EmploymentTypeField />
      <CompanyNameField {...args} />
    </Step>
  </Form>
)

export const WithCustomVisibleRelated = TemplateWithCustomVisibleRelatedField.bind(
  {}
)

WithCustomVisibleRelated.args = {
  name: 'company_name',
  required: true,
  visibleCondition: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    employment_type: ['fixed'],
  },
}

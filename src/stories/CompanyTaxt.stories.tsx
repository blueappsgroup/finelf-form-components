import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, CompanyTaxField, EmploymentTypeField } from '../'
import { FormProps } from '../types'

export default {
  title: 'CompanyTaxField',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <EmploymentTypeField />
    <CompanyTaxField
      required
      name="company_tax_id"
      visibleCondition={undefined}
    />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'CompanyTaxField',
}

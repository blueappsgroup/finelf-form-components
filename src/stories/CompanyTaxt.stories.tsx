import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, CompanyTaxField } from '../'
import { FormProps } from '../types'

export default {
  title: 'CompanyTaxField',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <CompanyTaxField />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'CompanyTaxField',
}

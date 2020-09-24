import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, CompanyNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'CompanyName',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <CompanyNameField />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'CompanyName',
}

import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { EmailField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'Email',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <EmailField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'Email',
}

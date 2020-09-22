import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { BirthDateField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'BirthDate',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <BirthDateField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'BirthDate',
}

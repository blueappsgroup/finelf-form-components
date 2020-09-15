import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { EmploymentTypeField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'EmploymentType',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <EmploymentTypeField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'EmploymentType',
}

import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { GenderField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'Gender',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <GenderField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'Gender',
}

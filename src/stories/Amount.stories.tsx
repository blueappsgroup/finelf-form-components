import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { AmountField, Form } from '../'
import { FormProps } from '../types'

const storyName = 'Amount'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <AmountField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

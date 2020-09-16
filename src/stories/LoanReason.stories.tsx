import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Form, LoanReasonField } from '../'
import { FormProps } from '../types'

const storyName = 'LoanReason'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <LoanReasonField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

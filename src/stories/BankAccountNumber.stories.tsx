import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, BankAccountNumberField } from '../'
import { FormProps } from '../types'

export default {
  title: 'BankAccountNumber',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <BankAccountNumberField />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'BankAccountNumber',
}

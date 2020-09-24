import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, IDCardNumberField } from '../'
import { FormProps } from '../types'

export default {
  title: 'IDCardNumber',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <IDCardNumberField name="id_card_number" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'IDCardNumber',
}

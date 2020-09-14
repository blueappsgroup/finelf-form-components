import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Form, TelephoneField } from '../'
import { FormProps } from '../types'

export default {
  title: 'Telephone',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <TelephoneField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'Telephone',
}

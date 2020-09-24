import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, LastNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'LastName',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <LastNameField name="last_name" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'LastName',
}

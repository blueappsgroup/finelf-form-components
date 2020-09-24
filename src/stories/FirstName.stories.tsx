import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, FirstNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'FirstName',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <FirstNameField />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'FirstName',
}

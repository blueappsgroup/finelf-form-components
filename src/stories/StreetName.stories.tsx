import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, StreetNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'StreetName',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <StreetNameField />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'StreetName',
}

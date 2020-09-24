import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, HouseNumberField } from '../'
import { FormProps } from '../types'

export default {
  title: 'HouseNumber',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <HouseNumberField name="house_number" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'HouseNumber',
}

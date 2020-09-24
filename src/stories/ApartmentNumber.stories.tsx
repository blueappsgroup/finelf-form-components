import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, ApartmentNumberField } from '../'
import { FormProps } from '../types'

export default {
  title: 'ApartmentNumber',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <ApartmentNumberField name="apartment_number" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'ApartmentNumber',
}

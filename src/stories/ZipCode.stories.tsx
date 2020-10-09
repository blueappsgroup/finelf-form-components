import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, ZipCodeField } from '../'
import { FormProps } from '../types'

export default {
  title: 'ZipCode',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <ZipCodeField name="text_zip" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'ZipCode',
}

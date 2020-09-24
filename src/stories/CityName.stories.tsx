import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, CityNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'CityName',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <CityNameField name="text_city" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'CityName',
}

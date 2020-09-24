import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, PeselField } from '../'
import { FormProps } from '../types'

export default {
  title: 'Pesel',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <PeselField name="id_code" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'Pesel',
}

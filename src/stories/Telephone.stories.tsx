import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Form, TelephoneField } from '../'
import { FormProps } from '../types'

const storyName = 'Telephone'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <TelephoneField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

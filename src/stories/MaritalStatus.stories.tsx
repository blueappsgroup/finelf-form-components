import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { MaritalStatusField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'MartialStatus',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <MaritalStatusField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'MartialStatus',
}

import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { AutoStatusField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'AutoStatus',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <AutoStatusField required showError label="Czy posiadasz auto?" />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'AutoStatus',
}

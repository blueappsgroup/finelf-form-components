import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { GenderField, Form } from '../'
import { FormProps } from '../types'

const storyName = 'Gender'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <GenderField required showError label="Płeć" />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

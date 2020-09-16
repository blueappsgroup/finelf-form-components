import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { MaritalStatusField, Form } from '../'
import { FormProps } from '../types'

const storyName = 'MartialStatus'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <MaritalStatusField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

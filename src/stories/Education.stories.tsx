import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { EducationField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'Education',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <EducationField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'Education',
}

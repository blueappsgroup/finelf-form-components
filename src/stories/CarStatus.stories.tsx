import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CarStatusField, Form } from '../'
import { FormProps } from '../types'

const storyName = 'CarStatus'

export default {
  title: storyName,
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <CarStatusField required showError label="Czy posiadasz auto?" />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: storyName,
}

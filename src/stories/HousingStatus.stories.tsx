import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { HousingStatusField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'HousingStatus',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <HousingStatusField required showError />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'HousingStatus',
}

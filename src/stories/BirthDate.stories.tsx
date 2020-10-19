import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { BirthDateField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'BirthDate',
  component: BirthDateField,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <BirthDateField
      required
      showError
      label="Data urodzenia"
      placeholder="DD/MM/YYYY"
    />
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'BirthDate',
}

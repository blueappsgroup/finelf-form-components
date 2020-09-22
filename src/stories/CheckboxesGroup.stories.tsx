import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CheckboxesGroup, CheckboxField, Form } from '../'
import { FormProps } from '../types'

export default {
  title: 'CheckboxesGroup',
  component: CheckboxesGroup,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <CheckboxesGroup name="agreemnets">
      <CheckboxField
        name="agreement1"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      />
      <CheckboxField
        name="agreement2"
        label="Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
      />
    </CheckboxesGroup>
  </Form>
)

export const Default = Template.bind({})

Default.args = {
  id: 'CheckboxesGroupForm',
}

import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Form, OptionalGroup, FirstNameField, LastNameField } from '../'
import { FormProps } from '../types'

export default {
  title: 'Optional Group',
  component: OptionalGroup,
} as Meta

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <OptionalGroup name="nameGroup" label="Additional name">
      <FirstNameField name="fName" />
      <LastNameField name="lName" />
    </OptionalGroup>
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'testFormWithOptional',
}

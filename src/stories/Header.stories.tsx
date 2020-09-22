import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Header, Form } from '../'
import { HeaderProps } from '../types'
import { ThemeProvider } from '../consts/theme'

export default {
  title: 'Header',
  component: Header,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story): any => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

const Template: Story<HeaderProps> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form id="testForm" onSubmit={(): void => {}}>
    <Header {...args} />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  text: 'Text',
}

export const Subheader = Template.bind({})

Subheader.args = {
  text: 'Subheader',
  type: 'subheader',
  withBorder: true,
}

export const WithBorder = Template.bind({})

WithBorder.args = {
  text: 'Title',
  withBorder: true,
}

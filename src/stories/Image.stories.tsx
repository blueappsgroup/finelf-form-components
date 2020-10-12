import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Image, Form } from '../'
import { ImageProps } from '../types'
import { ThemeProvider } from '../consts/theme'

export default {
  title: 'Image',
  component: Image,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story): any => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

const Template: Story<ImageProps> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form id="testForm" onSubmit={(): void => {}}>
    <Image {...args} />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  hideOnMobile: true,
  src: '',
  alt: 'obrazek',
}

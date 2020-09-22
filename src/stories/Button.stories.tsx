import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button } from '../'
import { ButtonProps } from '../types'
import { ThemeProvider } from '../consts/theme'

export default {
  title: 'Button',
  component: Button,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story): any => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Defualt = Template.bind({})

Defualt.args = {
  text: 'Text',
}

export const Secondary = Template.bind({})

Secondary.args = {
  text: 'Text',
  variant: 'secondary',
}

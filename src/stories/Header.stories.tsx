import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { Header } from '../'
import { HeaderProps } from '../types'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Defualt = Template.bind({})

Defualt.args = {
  text: 'Text',
}

export const Subheader = Template.bind({})

Subheader.args = {
  text: 'Subheader',
  type: 'subheader',
}

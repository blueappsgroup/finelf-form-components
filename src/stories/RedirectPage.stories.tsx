import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { RedirectPage } from '..'
import { RedirectPagePropsTypes } from '../types'
import { ThemeProvider } from '../consts/theme'

export default {
  title: 'Redirect Page',
  component: RedirectPage,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story): any => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

const Template: Story<RedirectPagePropsTypes> = (args) => (
  <RedirectPage {...args} />
)

export const Defualt = Template.bind({})

Defualt.args = {
  headerText: 'Dziękujemy za wypełnienie formularza',
  backgroundImage:
    'https://www.childserve.org/wp-content/uploads/2017/02/test-background-Pattern-01.png',
  mainImg:
    'http://offgridtestcenter.nl/wp-content/uploads/2019/10/main-img.png',
  logoImg:
    'https://www.czerwona-skarbonka.pl/wp-content/themes/czerwona-skarbonka/public/images/czerwona-skarbonka-logo.png',
  timeToRedirect: 10,
  redirectUrl: 'https://www.czerwona-skarbonka.pl/',
}

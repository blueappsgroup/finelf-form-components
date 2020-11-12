import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header, Button, Form } from '../'
import { FormProps, FormValuesType } from '../types'
import Agreemnets from '../components/Agreements'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (values: FormValuesType, props: any): void => {
  console.log(props)
  console.log(values)
}

export default {
  title: 'Agreements',
  component: Agreemnets,
} as Meta

const linksForReplace = {
  RULES_URL: 'https://kredyt-dla-zadluzonych.pl/regulamin',
  PRIVACY_POLICY_URL: 'https://kredyt-dla-zadluzonych.pl/polityka-prywatnosci/',
  PARTNERS_URL:
    'https://kredyt-dla-zadluzonych.pl/lista-firm-z-ktorymi-wspolpracujemy/',
  SITE_NAME: 'Kredyt dla Zadłużonych',
}

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header withBorder text="Test title" />
    <Header text="Test title" type="subheader" />
    <Agreemnets linksForReplace={linksForReplace} />
    <Button type="submit" text="Send" />
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'zwrot-prowizji-bankowej',
  onSubmit,
  transactionName: 'name',
  apiUrl: 'http://localhost:3000/api',
  sendDataToApi: true,
  propertyNamesFromUrl: ['firstName'],
  hasRedirect: true,
  dataWithUserAgent: true,
}

const TemplateWithReadMore: Story<FormProps> = (args) => (
  <Form {...args}>
    <Header withBorder text="Test title" />
    <Header text="Test title" type="subheader" />
    <Agreemnets hasReadMore linksForReplace={linksForReplace} />
    <Button type="submit" text="Send" />
  </Form>
)

export const WithReadMore = TemplateWithReadMore.bind({})

WithReadMore.args = {
  id: 'kdz',
  onSubmit,
  transactionName: 'name',
  apiUrl: 'http://localhost:3000/api',
  sendDataToApi: true,
  propertyNamesFromUrl: ['firstName'],
  hasRedirect: true,
  dataWithUserAgent: true,
}

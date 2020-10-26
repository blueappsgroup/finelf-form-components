import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  Header,
  FormStatusText,
  Form,
  Step,
  Row,
  Agreements,
  OptionalGroup,
} from '../'
import { FormProps } from '../types'
import {
  BirthDateField,
  CompanyNameField,
  EmailField,
  EmploymentTypeField,
  FirstNameField,
  GenderField,
  Hr,
  IDCardNumberField,
  LastNameField,
  PeriodField,
  PeselField,
  RowWithFixedColumn,
  TelephoneField,
  Image,
  TrasactionId,
  AmountField,
  MaritalStatusField,
  EducationField,
  ZipCodeField,
  CityNameField,
  StreetNameField,
  HouseNumberField,
  ApartmentNumberField,
  CompanyTaxField,
  IncomeField,
  BankAccountNumberField,
  AmountOfChildrenField,
  HousingStatusField,
  LoanReasonField,
  CarStatusField,
  OtherLoanAmountField,
} from '../components'

export default {
  title: 'FormKdz',
  component: Form,
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
    <RowWithFixedColumn>
      <Image
        src="/banner.png"
        alt="Kredyt dla Zadłużonych"
        text="Pieniądze nawet w 15 minut"
        hideOnMobile
      />
      <div>
        <Image src="/kdz.png" alt="Kredyt dla Zadłużonych" disableShadow />
        <Header text="Wypełnij wniosek" />
        <FormStatusText
          successText="Dziękujemy, twoje dane zostały przesłane."
          errorText="Coś poszło nie tak spróbuj ponownie"
        />
        <TrasactionId />
        <Step stepIndex={0}>
          <Header text="Parametry Pożyczki [ WYMAGANE ]" type="subheader" />
          <Row>
            <AmountField
              id="amount"
              name="amount"
              label="Wnioskowana Kwota"
              required
              showError
              min={100}
              max={5000}
            />
            <PeriodField
              id="period"
              name="period"
              label="Okres spłaty"
              required
              showError
              min={91}
              max={120}
              value={100}
            />
          </Row>
          <Hr />
          <Header text="Dane osobowe [ WYMAGANE ]" type="subheader" />
          <Row>
            <FirstNameField
              id="first_name"
              name="first_name"
              label="Imię"
              required
              showError
            />
            <LastNameField
              id="last_name"
              name="last_name"
              label="Nazwisko"
              required
              showError
            />
          </Row>
          <Row>
            <BirthDateField
              id="birth_date"
              name="birth_date"
              label="Data urodzenia"
              required
              showError
            />
            <GenderField
              id="gender"
              name="gender"
              label="Płeć"
              required
              showError
            />
          </Row>
          <Hr />
          <Header text="Dane kontaktowe" type="subheader" />
          <Row>
            <EmailField
              id="email"
              name="email"
              label="Adres e-mail"
              required
              showError
              icon="/email.png"
            />
            <TelephoneField
              id="telephone"
              name="telephone"
              label="Telefon komórkowy"
              required
              showError
            />
          </Row>
          <Agreements linksForReplace={linksForReplace} />
        </Step>
        <Step stepIndex={1}>
          <Header text="Dane identyfikacyjne [ WYMAGANE ]" type="subheader" />
          <Row>
            <PeselField
              id="pesel"
              name="pesel"
              label="PESEL"
              required
              showError
            />
            <IDCardNumberField
              id="id_card_number"
              name="id_card_number"
              label="Numer i seria dowodu"
              required
              showError
            />
          </Row>
          <Row>
            <MaritalStatusField
              id="marital_status"
              name="marital_status"
              label="Stan cywilny"
              required
              showError
            />
            <EducationField
              id="education"
              name="education"
              label="Wykształcenie"
              required
              showError
            />
          </Row>
          <Header text="Adres Zamieszkania [ WYMAGANE ]" type="subheader" />
          <Row>
            <ZipCodeField
              id="text_zip"
              name="text_zip"
              label="Kod pocztowy"
              required
              showError
            />
            <CityNameField
              id="text_city"
              name="text_city"
              label="Miejscowość"
              required
              showError
            />
          </Row>
          <Row>
            <StreetNameField
              id="street"
              name="street"
              label="Ulica"
              required
              showError
            />
            <Row>
              <HouseNumberField
                id="house_number"
                name="house_number"
                label="Numer domu"
                required
                showError
              />
              <ApartmentNumberField
                id="apartment_number"
                name="apartment_number"
                label="Numer mieszkania"
                required
                showError
              />
            </Row>
          </Row>
          <Hr />
          <Header
            text="Informacja o Statusie Zawodowym [ WYMAGANE ]"
            type="subheader"
          />
          <Row>
            <EmploymentTypeField
              id="employment_type"
              name="employment_type"
              label="Status zawodowy"
              required
              showError
            />
          </Row>
          <Row>
            <CompanyNameField
              id="company_name"
              name="company_name"
              label="Nazwa pracodawcy"
              required
              showError
            />
            <CompanyTaxField
              id="company_tax_id"
              name="company_tax_id"
              required
              showError
            />
            <IncomeField
              id="income"
              name="income"
              label="Wynagrodzenie miesięczne"
              required
              showError
              suffix="PLN"
            />
          </Row>
          <Row>
            <BankAccountNumberField
              id="bank_account_number"
              name="bank_account_number"
              label="Numer konta bankowego, na który wpływa twoje wynagrodzenie"
              required
              showError
            />
          </Row>
          <Hr />
          <OptionalGroup
            name="the_same_correspondence_address"
            label="Mój adres korespondencyjny jest taki sam jak adres zamieszkania"
            hideChecked
          >
            <Header text="Adres Korespondencyjny" type="subheader" />
            <Row>
              <ZipCodeField
                id="correspondence_text_zip"
                name="correspondence_text_zip"
                label="Kod pocztowy"
                required
                showError
              />
              <CityNameField
                id="correspondence_text_city"
                name="correspondence_text_city"
                label="Miejscowość"
                required
                showError
              />
            </Row>
            <Row>
              <StreetNameField
                id="correspondence_street"
                name="correspondence_street"
                label="Ulica"
                required
                showError
              />
              <Row>
                <HouseNumberField
                  id="correspondence_house_number"
                  name="correspondence_house_number"
                  label="Numer domu"
                  required
                  showError
                />
                <ApartmentNumberField
                  id="correspondence_apartment_number"
                  name="correspondence_apartment_number"
                  label="Numer mieszkania"
                  required
                  showError
                />
              </Row>
            </Row>
          </OptionalGroup>
          <Hr />
          <OptionalGroup
            name="additional_data"
            label="Chce zwiększyć szansę na pożyczkę i podać informacje dodatkowe"
          >
            <Row>
              <AmountOfChildrenField
                id="amount_of_children"
                name="amount_of_children"
                label="Liczba osób na utrzymaniu"
                required
                showError
              />
              <HousingStatusField
                id="housing_status"
                name="housing_status"
                label="Status mieszkaniowy"
                required
                showError
              />
            </Row>
            <Row>
              <LoanReasonField
                id="loan_reason"
                name="loan_reason"
                label="Jaki jest cel pożyczki?"
                required
                showError
              />
              <CarStatusField
                id="car_status"
                name="car_status"
                label="Czy posiadasz samochód?"
                required
                showError
              />
            </Row>
            <Row>
              <OtherLoanAmountField
                id="other_loans_amount"
                name="other_loans_amount"
                label="Kwota obecnych zobowiązań finansowych"
                required
                showError
              />
            </Row>
          </OptionalGroup>
        </Step>
      </div>
    </RowWithFixedColumn>
  </Form>
)

export const Defualt = Template.bind({})

Defualt.args = {
  id: 'kdz',
  apiUrl: 'https://api-v2.finelf.com/api',
  sendDataToApi: true,
  stepsLength: 2,
  stepsTitles: ['1. Podstawowe dane', '2. Szczegółowe dane'],
  customTheme: {
    fontFamily: '"Montserrat", sans-serif',
    formBoxShadow: 'none',
    formMaxWidth: '100%',
    inputHeight: '65px',
    inputFontSize: '20px',
    inputFontWeight: 'bold',
    inputTextColor: '#48505D',
    inputErrorTextAlign: 'right',
    inputErrorFontSize: '13px',
    inputErrorBottom: '-16px',
    inputPlaceHolderColor: 'rgba(72, 80, 93, 0.27)',
    inputBorderColor: '#E0E7FF',
    inputBgColor: 'rgba(224, 231, 255, 0.33)',
    labelFontSize: ' 18px',
    sliderHeight: '6px',
    sliderInputHeight: '55px',
    sliderInputTextAlign: 'center',
    styledSelectFontSize: '20px',
    styledRowFlexWrap: 'wrap',
    styledRowLabelPadding: '12px 5px 12px 0',
    styledRowLabelFontColor: '#8C98A9',
    styledSelectTextColor: '#48505D',
    styledSelectPlaceHolderColor: 'rgba(72, 80, 93, 0.27)',
    styledSpanFontSize: '13px',
    styledSelectFontWeight: 'bold',
    styledSpanFontColor: '#8C98A9',
    styledSelectBgColor: 'rgba(224, 231, 255, 0.33)',
    styledSelectBorderColor: '#E0E7FF',
    headerBorderColor: '#3CDB80',
    headerTextColor: '#2E384D',
    headerFontSize: '45px',
    headerFontWeight: '700',
    headerLineHeight: '52px',
    subheaderFontSize: '16px',
    subheaderTextColor: '#42474E',
    buttonBgColor: '#3CDB80',
    buttonBorderColor: '#3CDB80',
    stepHeaderActiveColor: '#3CDB80',
    stepHeaderActiveBorderColor: '#3CDB80',
    stepHeaderInActiveBorderColor: 'rgba(208, 233, 250, 0.32)',
    buttonSecondaryTextColor: '#3CDB80',
    buttonSecondaryBorderColor: '#3CDB80',
    redirectPageCounterTextColor: '#3CDB80',
    sliderBgColor: 'rgba(0, 0, 0, 0.1)',
    sliderFillBgColor: '#3CDB80',
    sliderHandleWidth: '24px',
    sliderHandleHeight: '24px',
    sliderHandleBorderStyle: 'none',
    sliderHandleBoxShadow: '0px 3px 6px rgba(198, 198, 198, 0.8)',
    styledInputSuffixBgColor: '#3CDB80',
    checkboxLabelFontSize: '18px',
    checkboxLabelTextColor: '#48505D',
    checkboxLinkColor: '#3CDB80',
    checkboxBorderColor: '#3CDB80',
    checkboxBorderWidth: '4px',
    checkboxBorderErrorColor: '#3CDB80',
    checkboxMarkColor: '#FFFFFF',
    checkboxCheckedBgColor: '#3CDB80',
    marginBetweenRowChildren: '30px',
    hrColor: 'rgba(112, 112, 112, 0.12)',
    imageContainerPadding: '0px 30px 30px 0px',
    imageBoxShadow: '0px 3px 33px 0px rgba(0,0,0,0.15)',
    styledInputSuffixFontSize: '20px',
    imageContainerTextTopPosition: '200px',
    imageContainerTextFontWeight: '900',
  },
}

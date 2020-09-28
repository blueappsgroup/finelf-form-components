import React, { FC, ReactElement } from 'react'
import { ThemeProvider as MainThemeProvider } from 'styled-components'
import { CustomThemeType } from '../types'

export const colors = {
  mainGrey: 'rgba(0, 0, 0, 0.7)',
  ligthGrey: '#ecebed',
  grey: '#B9BABD',
  mediumGrey: '#7C7878',
  darkGrey: '#0f0f0f',
  errorRed: '#FF0000',
  lightRed: '#e2070e',
  mediumRed: '#f20f0f',
  white: '#FFF',
  black: '#000',
}

export const theme = {
  formBgColor: colors.white,
  inputHeight: '63px',
  inputTextColor: colors.mainGrey,
  inputPlaceHolderColor: colors.mainGrey,
  inputErrorColor: colors.errorRed,
  inputErrorTextAlign: 'left',
  inputBorderColor: colors.ligthGrey,
  inputBorderWidth: '1px',
  inputBorderStyle: 'solid',
  inputBorderRadius: '6px',
  inputBgColor: colors.white,
  inputBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
  inputFontSize: '14px',
  inputFontWeight: '500',
  inputFontStyle: 'normal',
  inputLineHeight: '24px',
  inputPadding: '0 20px',
  styledRowFlexWrap: 'no-wrap',
  styledRowLabelPadding: '10px',
  styledSelectVerticalPadding: '0px',
  styledSelectHorizontalPadding: '20px',
  styledSpanFontSize: '16px',
  styledSpanFontWeight: 'bold',
  styledRowMarginBottom: '12px',
  checkboxLabelArrowColor: colors.mediumGrey,
  checkboxBgColor: colors.white,
  checkboxBorderColor: colors.black,
  checkboxBorderErrorColor: colors.errorRed,
  checkboxLabelTextColor: colors.darkGrey,
  checkboxMarkColor: colors.lightRed,
  headerTextColor: colors.black,
  headerBorderColor: colors.errorRed,
  subheaderBorderColor: colors.black,
  buttonTextColor: colors.white,
  buttonBgColor: colors.mediumRed,
  buttonBorderColor: colors.mediumRed,
  successTextColor: colors.black,
  stepHeaderActiveColor: colors.mediumRed,
  stepHeaderInActiveColor: colors.grey,
  stepHeaderActiveBorderColor: colors.mediumRed,
  stepHeaderInActiveBorderColor: colors.grey,
  buttonSecondaryTextColor: colors.mediumRed,
  buttonSecondaryBgColor: colors.white,
  buttonSecondaryBorderColor: colors.mediumRed,
  redirectPageHeaderTextColor: colors.black,
  redirectPageRedirectTextColor: colors.black,
  redirectPageCounterTextColor: colors.mediumRed,
  successStatusTextColor: colors.black,
  errorStatusTextColor: colors.errorRed,
  sliderHeight: '12px',
  sliderBorderRadius: '10px',
  sliderBgColor: colors.mainGrey,
  sliderFillBgColor: colors.mediumRed,
  sliderHandleBgColor: colors.white,
  sliderHandleBorderColor: colors.mainGrey,
  sliderHandleBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
  sliderHandleBorderWidth: '1px',
  sliderHandleBorderStyle: 'solid',
  sliderHandleBorderRadius: '50%',
  sliderHandleWidth: '24px',
  sliderHandleHeight: '24px',
  sliderHandleAfterWidth: '7px',
  sliderHandleAfterHeight: '7px',
  sliderHandleAfterBorderRadius: '50%',
  styledInputSuffixBgColor: colors.mediumRed,
  styledInputSuffixTextColor: colors.white,
  styledInputSuffixFontSize: '14px',
  styledInputSuffixFontWeight: 'bold',
  styledInputSuffixBorderRadius: '5px',
  styledInputSuffixVerticalPadding: '0px',
  styledInputSuffixHorizontalPadding: '15px',
  styledInputPrefixPadding: '0 15px',
}

type ThemeProviderPops = {
  children: ReactElement | ReactElement[]
  customTheme?: CustomThemeType
}

export const ThemeProvider: FC<ThemeProviderPops> = ({
  children,
  customTheme,
}) => (
  <MainThemeProvider theme={{ ...theme, ...customTheme }}>
    {children}
  </MainThemeProvider>
)

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
  inputTextColor: colors.mainGrey,
  inputPlaceHolderColor: colors.mainGrey,
  inputErrorColor: colors.errorRed,
  inputBorderColor: colors.ligthGrey,
  inputBgColor: colors.white,
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
  sucessStatusTextColor: colors.black,
  errorStatusTextColor: colors.errorRed,
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

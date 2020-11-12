import { FC, ReactElement } from 'react';
import { CustomThemeType } from '../types';
export declare const colors: {
    mainGrey: string;
    ligthGrey: string;
    grey: string;
    mediumGrey: string;
    darkGrey: string;
    errorRed: string;
    lightRed: string;
    mediumRed: string;
    white: string;
    black: string;
};
export declare const theme: {
    fontFamily: string;
    formBoxShadow: string;
    formMaxWidth: string;
    styledContainerMobilePadding: string;
    styledContainerPadding: string;
    formBgColor: string;
    inputTextColor: string;
    inputPlaceHolderColor: string;
    inputErrorColor: string;
    inputErrorTextAlign: string;
    inputErrorFontSize: string;
    inputErrorBottom: string;
    inputBorderColor: string;
    inputBorderWidth: string;
    inputBorderStyle: string;
    inputBorderRadius: string;
    inputBgColor: string;
    inputBoxShadow: string;
    inputFontSize: string;
    datePickerFontSize: string;
    inputFontWeight: string;
    inputFontStyle: string;
    inputLineHeight: string;
    inputTextAlign: string;
    inputPadding: string;
    labelFontSize: string;
    styledRowFlexWrap: string;
    styledRowLabelPadding: string;
    styledRowLabelFontColor: string;
    styledSelectTextColor: string;
    styledSelectPlaceHolderColor: string;
    styledSelectArrowColor: string;
    styledSelectArrowRightPosition: string;
    styledSelectErrorColor: string;
    styledSelectErrorTextAlign: string;
    styledSelectBorderColor: string;
    styledSelectBorderWidth: string;
    styledSelectBorderStyle: string;
    styledSelectBorderRadius: string;
    styledSelectBgColor: string;
    styledSelectBoxShadow: string;
    styledSelectFontSize: string;
    styledSelectFontWeight: string;
    styledSelectFontStyle: string;
    styledSelectLineHeight: string;
    styledSelectPadding: string;
    styledSpanFontColor: string;
    styledSpanFontWeight: string;
    styledRowMarginBottom: string;
    checkboxLabelArrowColor: string;
    checkboxBgColor: string;
    checkboxCheckedBgColor: string;
    checkboxBorderColor: string;
    checkboxBorderWidth: string;
    checkboxLabelFontSize: string;
    checkboxLinkColor: string;
    checkboxBorderErrorColor: string;
    checkboxLabelTextColor: string;
    checkboxMarkColor: string;
    headerTextColor: string;
    headerBorderColor: string;
    headerFontWeight: string;
    headerFontSize: string;
    headerLineHeight: string;
    headerMargin: string;
    subheaderBorderColor: string;
    subheaderFontSize: string;
    subheaderLineHeight: string;
    subheaderMargin: string;
    buttonTextColor: string;
    buttonBgColor: string;
    buttonBorderColor: string;
    successTextColor: string;
    stepHeaderActiveColor: string;
    stepHeaderInActiveColor: string;
    stepHeaderActiveBorderColor: string;
    stepHeaderInActiveBorderColor: string;
    buttonSecondaryTextColor: string;
    buttonSecondaryBgColor: string;
    buttonSecondaryBorderColor: string;
    redirectPageHeaderTextColor: string;
    redirectPageRedirectTextColor: string;
    redirectPageCounterTextColor: string;
    successStatusTextColor: string;
    errorStatusTextColor: string;
    sliderHeight: string;
    sliderInputTextAlign: string;
    sliderBorderRadius: string;
    sliderBgColor: string;
    sliderFillBgColor: string;
    sliderHandleBgColor: string;
    sliderHandleBorderColor: string;
    sliderHandleBoxShadow: string;
    sliderHandleBorderWidth: string;
    sliderHandleBorderStyle: string;
    sliderHandleBorderRadius: string;
    sliderHandleWidth: string;
    sliderHandleHeight: string;
    sliderHandleAfterBgColor: string;
    sliderHandleAfterWidth: string;
    sliderHandleAfterHeight: string;
    sliderHandleAfterBorderRadius: string;
    styledInputSuffixBgColor: string;
    styledInputSuffixTextColor: string;
    styledInputSuffixFontSize: string;
    styledInputSuffixFontWeight: string;
    styledInputSuffixBorderRadius: string;
    styledInputPrefixPadding: string;
    marginBetweenRowChildren: string;
    hrColor: string;
    hrSize: string;
    imageContainerPadding: string;
    imageContainerTextTopPosition: string;
    imageContainerTextFontSize: string;
    imageContainerTextFontWeight: string;
    imageBoxShadow: string;
    inputIconLeft: string;
    inputWithIconPadding: string;
};
declare type ThemeProviderPops = {
    children: ReactElement | ReactElement[];
    customTheme?: CustomThemeType;
};
export declare const ThemeProvider: FC<ThemeProviderPops>;
export {};

import { ReactElement, ReactNode } from 'react';
import { FieldProps } from 'formik';
export declare type FormValuesType = any;
export declare type CheckboxFieldProps = {
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
    onChange?: Function;
    children?: ReactElement | ReactElement[];
    HTMLcontent?: string;
    skipFieldForApi?: boolean;
    disableCollapse?: boolean;
    hasReadMore?: boolean;
    showMoreText?: string;
    showLessText?: string;
};
export declare type FieldWrapProps = FieldProps & {
    label?: string;
    showError?: boolean;
    onChange?: Function;
    placeholder?: string;
    required?: boolean;
    children?: ReactElement | ReactElement[];
    childrenBody?: ReactElement | ReactElement[];
    type?: string;
    suffix?: string;
    prefix?: string;
    HTMLcontent?: string;
    skipFieldForApi?: boolean;
    icon?: object;
    disableCollapse?: boolean;
    visible?: boolean;
    hasReadMore?: boolean;
    showMoreText?: string;
    showLessText?: string;
};
export declare type FieldDateWrapProps = FieldProps & {
    label?: string;
    showError?: boolean;
    onChange?: Function;
    placeholder?: string;
    required?: boolean;
    children?: ReactElement | ReactElement[];
    childrenBody?: ReactElement | ReactElement[];
    type?: string;
    suffix?: string;
    prefix?: string;
    dateFormat?: string;
    openToDate?: Date;
};
export declare type SelectFieldOptions = {
    [key: string]: string;
};
export declare type SelectFieldWrapProps = FieldProps & {
    label?: string;
    showError?: boolean;
    onChange?: Function;
    placeholder?: string;
    required?: boolean;
    options: SelectFieldOptions;
};
export declare type RangeFieldWrapProps = FieldProps & {
    label?: string;
    showError?: boolean;
    showMinMax?: boolean;
    onChange?: Function;
    placeholder?: string;
    required?: boolean;
    type?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    suffix?: string;
    unit?: string;
};
export declare type SelectFieldProps = {
    id?: string;
    label?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    validate?: Function;
    showError?: boolean;
};
export interface TextFieldProps {
    id?: string;
    label?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    validate?: Function;
    showError?: boolean;
}
export interface TextFieldWithConditonProps extends TextFieldProps {
    requiredCondition?: {
        [key: string]: string[];
    };
    visibleCondition?: {
        [key: string]: any;
    };
}
export declare type RangeFieldProps = {
    id?: string;
    label?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    showMinMax?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    suffix?: string;
    unit?: string;
};
export declare type EmailFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    icon?: object;
};
export declare type AmountOfChildrenFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
};
export declare type IncomeFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    suffix?: string;
};
export declare type BirthDateFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    dateFormat?: string;
    openToDate?: Date;
};
export declare type TelephoneFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    validate?: Function;
};
export declare type OtherLoanAmountFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    validate?: Function;
};
export declare type CustomThemeType = {
    fontFamily?: string;
    formBoxShadow?: string;
    formMaxWidth?: string;
    formPaddingMobile?: string;
    formPadding?: string;
    formBgColor?: string;
    styledContainerMobilePadding?: string;
    styledContainerPadding?: string;
    inputHeight?: string;
    inputTextColor?: string;
    inputPlaceHolderColor?: string;
    inputErrorColor?: string;
    inputErrorTextAlign?: string;
    inputErrorFontSize?: string;
    inputErrorBottom?: string;
    inputBorderColor?: string;
    inputBorderWidth?: string;
    inputBorderStyle?: string;
    inputBorderRadius?: string;
    inputBgColor?: string;
    inputBoxShadow?: string;
    inputFontSize?: string;
    inputFontWeight?: string;
    inputFontStyle?: string;
    inputLineHeight?: string;
    inputPadding?: string;
    styledRowFlexWrap?: string;
    styledRowLabelPadding?: string;
    styledSelectHeight?: string;
    styledSelectTextColor?: string;
    styledSelectPlaceHolderColor?: string;
    styledSelectErrorColor?: string;
    styledSelectErrorTextAlign?: string;
    styledSelectBorderColor?: string;
    styledSelectBorderWidth?: string;
    styledSelectBorderStyle?: string;
    styledSelectBorderRadius?: string;
    styledSelectBgColor?: string;
    styledSelectBoxShadow?: string;
    styledSelectFontSize?: string;
    styledSelectFontWeight?: string;
    styledSelectFontStyle?: string;
    styledSelectLineHeight?: string;
    styledSelectVerticalPadding?: string;
    styledSelectHorizontalPadding?: string;
    styledSpanFontSize?: string;
    styledSpanFontWeight?: string;
    styledRowMarginBottom?: string;
    checkboxLabelArrowColor?: string;
    checkboxBgColor?: string;
    checkboxCheckedBgColor?: string;
    checkboxBorderColor?: string;
    checkboxBorderErrorColor?: string;
    checkboxLabelTextColor?: string;
    checkboxMarkColor?: string;
    headerTextColor?: string;
    headerBorderColor?: string;
    subheaderBorderColor?: string;
    buttonTextColor?: string;
    buttonBgColor?: string;
    buttonBorderColor?: string;
    successTextColor?: string;
    stepHeaderActiveColor?: string;
    stepHeaderInActiveColor?: string;
    stepHeaderActiveBorderColor?: string;
    stepHeaderInActiveBorderColor?: string;
    buttonSecondaryTextColor?: string;
    buttonSecondaryBgColor?: string;
    buttonSecondaryBorderColor?: string;
    redirectPageHeaderTextColor?: string;
    redirectPageRedirectTextColor?: string;
    redirectPageCounterTextColor?: string;
    successStatusTextColor?: string;
    errorStatusTextColor?: string;
    sliderHeight?: string;
    sliderBorderRadius?: string;
    sliderBgColor?: string;
    sliderFillBgColor?: string;
    sliderHandleBgColor?: string;
    sliderHandleBorderColor?: string;
    sliderHandleBoxShadow?: string;
    sliderHandleBorderWidth?: string;
    sliderHandleBorderStyle?: string;
    sliderHandleBorderRadius?: string;
    sliderHandleWidth?: string;
    sliderHandleHeight?: string;
    sliderHandleAfterWidth?: string;
    sliderHandleAfterHeight?: string;
    sliderHandleAfterBorderRadius?: string;
    styledInputSuffixBgColor?: string;
    styledInputSuffixTextColor?: string;
    styledInputSuffixFontSize?: string;
    styledInputSuffixFontWeight?: string;
    styledInputSuffixBorderRadius?: string;
    styledInputSuffixVerticalPadding?: string;
    styledInputSuffixHorizontalPadding?: string;
    styledInputPrefixPadding?: string;
};
export declare type HeaderProps = {
    text: string;
    type?: 'main' | 'subheader';
    withBorder?: boolean;
};
export declare type ButtonProps = {
    text: string;
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
    size?: 'large | medium | small';
    onClick?: any;
    disabled?: boolean;
};
export declare type FormProps = {
    onSubmit: (values: FormValuesType, props?: any) => void;
    children: ReactNode;
    customTheme?: CustomThemeType;
    id: string;
    stepsLength?: number;
    stepsTitles?: string[];
    hasRedirect?: boolean;
    redirectUrl?: string;
    timeToRedirect?: number;
    redirectHeaderText?: string;
    logoImg?: string;
    redirectMainImg?: string;
    redirectBgImg?: string;
    queueUrl?: string;
    sendDataToSQS?: boolean;
    sendDataToApi?: boolean;
    apiUrl?: string;
    transactionName?: string;
    propertyNamesFromUrl?: string[];
    dataWithUserAgent?: boolean;
};
export declare type RedirectPagePropsTypes = {
    headerText?: string;
    backgroundImage?: string;
    mainImg?: string;
    logoImg?: string;
    timeToRedirect?: number;
    redirectUrl?: string;
};
export declare type ImageProps = {
    src: string;
    alt: string;
    text?: string;
    hideOnMobile?: boolean;
    disableShadow?: boolean;
};

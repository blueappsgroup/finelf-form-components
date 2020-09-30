import { ReactElement, ReactNode } from 'react';
import { FieldProps } from 'formik';
export declare type FormValuesType = {
    [key: string]: string | boolean | undefined;
};
export declare type CheckboxFieldProps = {
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
    onChange?: Function;
    children?: ReactElement | ReactElement[];
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
    showError?: boolean;
};
export declare type TextFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    validate?: Function;
    showError?: boolean;
};
export declare type RangeFieldProps = {
    id?: string;
    label?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
    showMinMax?: boolean;
};
export declare type EmailFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
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
};
export declare type BirthDateFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
    showError?: boolean;
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
    formBgColor?: string;
    inputTextColor?: string;
    inputPlaceHolderColor?: string;
    inputErrorColor?: string;
    inputBorderColor?: string;
    inputBgColor?: string;
    checkboxLabelArrowColor?: string;
    checkboxBgColor?: string;
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
    stepHeaderActiveColor?: string;
    stepHeaderInActiveColor?: string;
    buttonSecondaryTextColor?: string;
    buttonSecondaryBgColor?: string;
    buttonSecondaryBorderColor?: string;
    redirectPageHeaderTextColor?: string;
    redirectPageRedirectTextColor?: string;
    redirectPageCounterTextColor?: string;
    successStatusTextColor?: string;
    errorStatusTextColor?: string;
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
};
export declare type RedirectPagePropsTypes = {
    headerText?: string;
    backgroundImage?: string;
    mainImg?: string;
    logoImg?: string;
    timeToRedirect?: number;
    redirectUrl?: string;
};

import { FieldProps } from 'formik';
export declare type CheckboxFieldProps = {
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
};
export declare type FieldWrapProps = FieldProps & {
    label?: string;
    showError?: boolean;
    onChange?: Function;
    placeholder?: string;
    required?: boolean;
};
export declare type TextFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    validate?: Function;
};
export declare type EmailFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    errorMsg?: string;
    required?: boolean;
};
export declare type TelephoneFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    name: string;
    errorMsg?: string;
    required?: boolean;
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
};

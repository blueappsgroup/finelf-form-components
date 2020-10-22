import { ReactElement } from 'react';
import { FieldWrapProps, FieldDateWrapProps, RangeFieldWrapProps, SelectFieldWrapProps } from '../../types';
export declare type StyledProps = {
    theme: {
        submitButtonBgColor: string;
        inputHeight: string;
        inputErrorColor: string;
        inputErrorTextAlign: string;
        inputErrorFontSize: string;
        inputErrorBottom: string;
        inputBgColor: string;
        inputPlaceHolderColor: string;
        inputBorderColor: string;
        inputBorderWidth: string;
        inputBorderStyle: string;
        inputBorderRadius: string;
        inputTextColor: string;
        inputFontSize: string;
        inputFontWeight: string;
        inputFontStyle: string;
        inputBoxShadow: string;
        inputLineHeight: string;
        inputTextAlign: string;
        inputPadding: string;
        datePickerHeight: string;
        datePickerTextColor: string;
        datePickerPlaceHolderColor: string;
        datePickerBorderColor: string;
        datePickerBorderWidth: string;
        datePickerBorderStyle: string;
        datePickerBorderRadius: string;
        datePickerBgColor: string;
        datePickerBoxShadow: string;
        datePickerFontSize: string;
        datePickerFontWeight: string;
        datePickerFontStyle: string;
        datePickerLineHeight: string;
        datePickerPadding: string;
        labelFontSize: string;
        styledRowFlexWrap: string;
        styledRowLabelPadding: string;
        styledRowLabelFontColor: string;
        styledSelectHeight: string;
        styledSelectErrorColor: string;
        styledSelectErrorTextAlign: string;
        styledSelectBgColor: string;
        styledSelectPlaceHolderColor: string;
        styledSelectArrowColor: string;
        styledSelectArrowRightPosition: string;
        styledSelectBorderColor: string;
        styledSelectBorderWidth: string;
        styledSelectBorderStyle: string;
        styledSelectBorderRadius: string;
        styledSelectTextColor: string;
        styledSelectFontSize: string;
        styledSelectFontWeight: string;
        styledSelectFontStyle: string;
        styledSelectBoxShadow: string;
        styledSelectLineHeight: string;
        styledSelectPadding: string;
        styledSpanFontSize: string;
        styledSpanFontColor: string;
        styledSpanFontWeight: string;
        styledRowMarginBottom: string;
        sliderHeight: string;
        sliderInputHeight: string;
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
        sliderHandleAfterWidth: string;
        sliderHandleAfterHeight: string;
        sliderHandleAfterBorderRadius: string;
        styledInputSuffixWidth: string;
        styledInputSuffixBgColor: string;
        styledInputSuffixTextColor: string;
        styledInputSuffixFontSize: string;
        styledInputSuffixFontWeight: string;
        styledInputSuffixBorderRadius: string;
        styledInputPrefixPadding: string;
        marginBetweenRowChildren: string;
        inputIconLeft: string;
        inputWithIconPadding: string;
        rowWithFixedColumnHorizontalMargin: string;
    };
    error?: string | boolean;
};
export declare type InputWrapperProps = {
    withIcon?: boolean;
    theme: {
        inputPadding: string;
        inputWithIconPadding: string;
    };
};
export declare const Row: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const RowWithFixedColumn: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledError: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, any, never>;
export declare const SliderRow: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const BaseField: (props: FieldWrapProps) => ReactElement;
export default BaseField;
export declare const BaseDateField: (props: FieldDateWrapProps) => ReactElement;
export declare const BaseSelectField: (props: SelectFieldWrapProps) => ReactElement;
export declare const BaseRangeField: (props: RangeFieldWrapProps) => ReactElement;

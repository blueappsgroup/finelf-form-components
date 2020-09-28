import { ReactElement } from 'react';
import { FieldWrapProps, RangeFieldWrapProps, SelectFieldWrapProps } from '../../types';
export declare const Row: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const BaseField: (props: FieldWrapProps) => ReactElement;
export default BaseField;
export declare const BaseSelectField: (props: SelectFieldWrapProps) => ReactElement;
export declare const BaseRangeField: (props: RangeFieldWrapProps) => ReactElement;

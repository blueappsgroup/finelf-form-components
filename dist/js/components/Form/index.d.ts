import { ReactNode, FC } from 'react';
import { CustomThemeType } from '../FormInput/types';
declare type Props = {
    onSubmit: (values: any, props: any) => void;
    children: ReactNode;
    customTheme?: CustomThemeType;
};
declare const FormWrapper: FC<Props>;
export default FormWrapper;

import { Context } from 'react';
export declare const FormContext: Context<{
    id?: string;
}>;
export declare const setFormValuesToCache: (values: {
    [key: string]: string | boolean;
}, formId?: string) => void;
export declare const getFormValuesFromCache: (id?: string) => {
    [key: string]: string | boolean;
};
export declare const resetFormValueCache: (id: string) => void;

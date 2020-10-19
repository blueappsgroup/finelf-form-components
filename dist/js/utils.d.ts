import { Context } from 'react';
import { FormValuesType } from './types';
export declare const FormContext: Context<{
    id?: string;
    stepsLength?: number;
    currentStep?: number;
    stepsTitleList?: string[];
    nextStep?: Function;
    prevStep?: Function;
    apiUrl?: string;
    fieldsForSkip?: string[];
    addFieldForSkip?: (key: string) => void;
}>;
export declare const setFormValuesToCache: (values: {
    [key: string]: string | boolean;
}, formId?: string) => void;
export declare const getFormValuesFromCache: (id?: string) => {
    [key: string]: string | boolean;
};
export declare const resetFormValueCache: (id: string) => void;
export declare const encodeData: (data: FormValuesType) => string | undefined;
export declare const sendDataToAwsSQS: (values: FormValuesType, queueUrl?: string) => Promise<any>;
export declare const handleSendDataToApi: (values: FormValuesType, apiUrl: string, formId: string, fieldsForSkip: string[], dataWithUserAgent?: boolean) => Promise<any>;
export declare const getFieldsValuesFromUrl: (paramsList: string[]) => {
    [key: string]: string;
};

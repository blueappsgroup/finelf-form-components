import { FC } from 'react';
declare type Props = {
    stepIndex: number;
    children: any;
    onStepComplete?: () => void;
};
declare const Step: FC<Props>;
export default Step;

declare type StepHeaderProps = {
    activeStep?: boolean;
    theme: {
        stepHeaderActiveColor: string;
        stepHeaderInActiveColor: string;
        stepHeaderActiveBorderColor: string;
        stepHeaderInActiveBorderColor: string;
    };
};
declare const StepHeader: import("styled-components").StyledComponent<"h3", any, StepHeaderProps, never>;
export default StepHeader;

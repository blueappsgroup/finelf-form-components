declare type StepHeaderProps = {
    activeStep?: boolean;
    theme: {
        stepHeaderActiveColor: string;
        stepHeaderInActiveColor: string;
        stepHeaderActiveBorderColor: string;
        stepHeaderInActiveBorderColor: string;
    };
};
declare const StepHeader: import("styled-components").StyledComponent<"div", any, StepHeaderProps, never>;
export default StepHeader;

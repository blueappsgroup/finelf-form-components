import React from 'react';
declare type AgreementsPropTypes = {
    linksForReplace?: {
        [key: string]: string;
    };
    name?: string;
    groupType?: string;
    requiredErorText?: string;
    hasReadMore?: boolean;
};
declare const Agreemnets: React.FC<AgreementsPropTypes>;
export default Agreemnets;

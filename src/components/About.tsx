import React from "react";

import {aboutText} from "../data/resumeData";
import {SectionTitle} from "./SectionTitle";

export const About = React.memo(() => {
    return (
        <div className="mb-[25px] pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-user">About</SectionTitle>
            <p className="mb-[10px]">{aboutText}</p>
        </div>
    );
});

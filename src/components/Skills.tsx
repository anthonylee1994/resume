import React from "react";
import {skills} from "../data/resumeData";
import {SectionTitle} from "./SectionTitle";

function renderSkill(skill: string) {
    return (
        <div className="flow-root break-inside-avoid" key={skill}>
            <div className="mb-[5px] h-[30px] overflow-hidden px-[10px] py-[5px] text-[1.1em] font-semibold text-ellipsis whitespace-nowrap text-[#334960]">{skill}</div>
            <div className="min-h-px w-full px-[15px] sm:ml-[8.33333333%] print:mt-[-10px] print:mb-[5px]"></div>
        </div>
    );
}

export const Skills = React.memo(() => {
    return (
        <div className="mb-[25px] pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-tasks">Skills</SectionTitle>
            {skills.map(renderSkill)}
        </div>
    );
});

import React from "react";
import {type WorkExperience as WorkExperienceItem, type WorkRole, workExperiences} from "../data/resumeData";
import {SectionTitle} from "./SectionTitle";

function renderDescriptionLine(line: string, index: number, lines: readonly string[]) {
    return (
        <React.Fragment key={line}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
        </React.Fragment>
    );
}

function renderRoleLink(link: string) {
    return (
        <React.Fragment key={link}>
            <br />
            <a href={link} target="_blank" rel="noreferrer">
                {link}
            </a>
        </React.Fragment>
    );
}

function renderRole(role: WorkRole) {
    return (
        <div className="mx-[-15px] flex flex-wrap" key={role.title}>
            <div className="min-h-px w-full px-[15px] pl-[5%]">
                <div className="text-[1.2em] font-bold">{role.title}</div>
                <div className="leading-[1.5em]">
                    {role.description.map(renderDescriptionLine)}
                    {role.links?.map(renderRoleLink)}
                </div>
            </div>
        </div>
    );
}

function renderExperience(experience: WorkExperienceItem) {
    return (
        <div className="mb-[15px] flow-root" key={experience.company}>
            <div className="mx-[-15px] flex flex-wrap">
                <div className="mb-[10px] ml-[3%] w-[95%] border-r border-b border-[#ccc] bg-[#eee] p-[10px] print:border print:border-[#eee]">
                    <div className="text-[1.2em] font-bold">{experience.company}</div>
                    {experience.url ? (
                        <div>
                            <a href={experience.url} target="_blank" rel="noreferrer">
                                <i className="fas fa-globe mr-1 inline-block w-[1.25em] text-center"></i>
                                {experience.url}
                            </a>
                        </div>
                    ) : null}
                    <div className="opacity-70">{experience.period}</div>
                </div>
            </div>
            {experience.roles.map(renderRole)}
        </div>
    );
}

export const WorkExperience = React.memo(() => {
    return (
        <div className="mb-[25px] pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-suitcase">Work Experience</SectionTitle>
            {workExperiences.map(renderExperience)}
        </div>
    );
});

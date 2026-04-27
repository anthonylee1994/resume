import React from "react";

import {projects, type Project} from "../data/resumeData";
import {SectionTitle} from "./SectionTitle";

function renderProject(project: Project) {
    return (
        <li
            className="relative block border border-[#ddd] bg-white px-[15px] py-[10px] wrap-break-word not-first:-mt-px print:m-0 print:border-0 print:px-[15px] print:py-[5px] print:break-all print:after:absolute print:after:top-[8px] print:after:-left-px print:after:size-0 print:after:border-4 print:after:border-transparent print:after:border-r-[#999] print:after:content-['']"
            key={project.name}
        >
            <strong>{project.name}</strong>
            <br />
            <a href={project.url} target="_blank" rel="noreferrer">
                {project.url}
            </a>
        </li>
    );
}

export const Projects = React.memo(() => {
    return (
        <div className="mb-[25px] pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-code-branch">Projects</SectionTitle>
            <ul className="mb-[20px] list-none pl-0">{projects.map(renderProject)}</ul>
        </div>
    );
});

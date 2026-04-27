import React from "react";

import {SectionTitle} from "./SectionTitle";

export const Education = React.memo(() => {
    return (
        <div className="mb-[25px] pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-university">Education</SectionTitle>
            <ul className="relative mt-[20px] mb-0 flow-root list-none py-[1em] before:absolute before:top-0 before:left-[35px] before:block before:h-full before:w-[5px] before:bg-[linear-gradient(to_bottom,#ffffff_0%,#32475c_7%,#32475c_89%,#ffffff_100%)] before:content-[''] print:m-0 print:mb-[-20px] print:before:bg-none">
                <li className="relative z-2 float-left w-full break-inside-avoid">
                    <div className="float-left inline-block w-[14%] bg-white p-[10px] font-bold">2012 2016</div>
                    <div className="relative float-right mb-[10px] inline-block w-[83%] border-r border-b border-[#ccc] bg-[#eee] p-[10px] after:absolute after:top-[15px] after:left-[-16px] after:size-0 after:border-8 after:border-transparent after:border-r-[#eee] after:content-[''] print:border print:border-[#eee]">
                        <h3 className="m-0 p-0 text-[1.2em] font-bold">The Hong Kong Polytechnic University</h3>
                        <p className="mt-[5px] p-0">
                            <i className="fas fa-graduation-cap mr-1 inline-block w-[1.25em] text-center"></i> Bachelor of Computing
                        </p>
                        <p className="mt-[5px] p-0">Computer Science</p>
                    </div>
                </li>
            </ul>
        </div>
    );
});

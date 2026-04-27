import React from "react";

import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Education} from "./components/Education";
import {Header} from "./components/Header";
import {Projects} from "./components/Projects";
import {Skills} from "./components/Skills";
import {WorkExperience} from "./components/WorkExperience";

export const App = React.memo(() => {
    return (
        <React.Fragment>
            <div className="mx-[15px] mt-[120px] mb-[15px] max-w-[1170px] bg-white px-[15px] sm:mx-auto">
                <Header />
                <div className="mx-[-15px] flex flex-wrap">
                    <div className="min-h-px w-full px-[15px] sm:w-7/12 print:w-3/5">
                        <About />
                        <WorkExperience />
                        <Projects />
                    </div>
                    <div className="min-h-px w-full px-[15px] sm:w-5/12 print:w-2/5">
                        <Contact />
                        <Education />
                        <Skills />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
});

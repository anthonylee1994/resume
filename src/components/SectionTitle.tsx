import React from "react";

type SectionTitleProps = {
    readonly iconClassName: string;
    readonly children: React.ReactNode;
};

export const SectionTitle = React.memo(({iconClassName, children}: SectionTitleProps) => {
    return (
        <h2 className="my-[0.83em] text-[1.5em] font-bold text-[#c62828] uppercase">
            <i className={`${iconClassName} mr-1 inline-block w-[1.25em] text-center`}></i> {children}
        </h2>
    );
});

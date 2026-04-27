import React from "react";

import {contactItems, type ContactItem} from "../data/resumeData";
import {SectionTitle} from "./SectionTitle";

function renderContactItem(item: ContactItem, index: number, items: readonly ContactItem[]) {
    const content = item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer">
            {item.text}
        </a>
    ) : (
        item.text
    );

    return (
        <div className="float-left w-full break-inside-avoid" key={item.text}>
            <div className={`float-left border-r border-r-[#ccc] bg-[#eee] p-[10px] text-center text-[#32475c] ${index < items.length - 1 ? "border-b border-b-[#ccc]" : ""}`}>
                <span className={item.iconClassName}></span>
            </div>
            {item.label ? (
                <React.Fragment>
                    <div className="float-right w-[calc(100%-55px)] font-bold opacity-90">{item.label}</div>
                    <div className="float-right w-[calc(100%-55px)] text-[#334960]">{content}</div>
                </React.Fragment>
            ) : (
                <div className="float-right mt-[10px] w-[calc(100%-55px)] font-bold opacity-90">{content}</div>
            )}
        </div>
    );
}

export const Contact = React.memo(() => {
    return (
        <div className="mb-[25px] flow-root pb-[10px] print:mb-[-10px]">
            <SectionTitle iconClassName="fas fa-bullseye">Contact</SectionTitle>
            {contactItems.map(renderContactItem)}
        </div>
    );
});

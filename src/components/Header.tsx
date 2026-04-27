import React from "react";
import AvatarImage from "../assets/avatar.jpg";

export const Header = React.memo(() => {
    return (
        <div className="mx-[-15px] flex flex-wrap">
            <div className="min-h-px w-full px-[15px]">
                <div className="mt-[-75px] text-center">
                    <div className="inline-block size-[160px] overflow-hidden rounded-full bg-white p-[5px] print:hidden">
                        <img className="size-[150px] rounded-full" src={AvatarImage} alt="avatar" />
                    </div>
                    <div className="after:mt-[15px] after:block after:h-[3px] after:w-full after:border-b after:border-[#ddd] after:content-['']">
                        <h1 className="m-0 p-0 text-[1.5em] font-bold tracking-normal uppercase">
                            <span className="text-[1.5em] leading-[1.5em] font-extrabold text-inherit opacity-100">Anthony Lee</span>
                            <br />
                            <span className="text-[#334960] opacity-70">hello, world</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
});

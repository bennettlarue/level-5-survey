"use client";

import * as React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import SecondaryHeading from "../text/SecondaryHeading";
import { Paragraph } from "../text/Paragraph";
import No from "../buttons/No";
import Yes from "../buttons/Yes";

export interface IAppProps {}

export default function Start(props: IAppProps) {
    return (
        <div className="space-y-10 max-w-[1000px] mx-auto pt-20">
            <PrimaryHeading text="This is what a primary heading could look like." />
            <SecondaryHeading text="This is what a secondary heading could look like." />
            <Paragraph text="This is what a paragraph could look like." />

            <div className="flex items-center justify-between w-fit space-x-5">
                <No />
                <Yes />
            </div>
        </div>
    );
}

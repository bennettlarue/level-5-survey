import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import Note from "../text/Note";
import { motion } from "framer-motion";

type Props = {
    index: number;
    heading: string;
    icon?: JSX.Element;
    subheading?: string;
    children: React.ReactNode;
};

const BaseMenu = (props: Props) => {
    return (
        <div className="space-y-5 h-full mx-6 flex items-center justify-center rounded-lg ">
            <div className="space-y-10 text-center">
                {props.icon && (
                    <div className="flex items-center justify-center text-l5Pink">
                        {props.icon}
                    </div>
                )}
                <div className="space-y-4">
                    <PrimaryHeading text={props.heading} />
                    {props.subheading && <Note text={props.subheading} />}
                </div>

                {props.children}
            </div>
        </div>
    );
};

export default BaseMenu;

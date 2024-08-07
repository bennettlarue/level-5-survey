import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import Note from "../text/Note";
import { motion } from "framer-motion";

type Props = {
    index: number;
    heading?: string;
    icon?: JSX.Element;
    subheading?: string;
    children: React.ReactNode;
    bgColor?: string;
    textColor?: string;
};

const BaseMenu = (props: Props) => {
    return (
        <div
            className={`space-y-5 h-full md:px-6 flex items-center justify-center ${props.bgColor} text-${props.textColor}`}
        >
            <div className="space-y-10 text-center px-5">
                {props.icon && (
                    <div
                        className={`flex items-center justify-center ${
                            props.textColor ? props.textColor : "text-l5Pink"
                        }`}
                    >
                        {props.icon}
                    </div>
                )}
                <div className="space-y-4">
                    {props.heading && (
                        <PrimaryHeading
                            text={props.heading}
                            textColor={props.textColor}
                        />
                    )}
                    {props.subheading && <Note text={props.subheading} />}
                </div>

                {props.children}
            </div>
        </div>
    );
};

export default BaseMenu;

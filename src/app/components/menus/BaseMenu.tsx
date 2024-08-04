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
        <motion.div
            key={props.heading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            layout
            className="space-y-5 h-[500px] flex items-center justify-center bg-l5GrayWhite shadow border rounded"
        >
            <div className="space-y-10 text-center mx-6">
                {props.icon && (
                    <div className="flex items-center justify-center">
                        {props.icon}
                    </div>
                )}
                <div className="space-y-4">
                    <PrimaryHeading text={props.heading} />
                    {props.subheading && <Note text={props.subheading} />}
                </div>

                {props.children}
            </div>
        </motion.div>
    );
};

export default BaseMenu;

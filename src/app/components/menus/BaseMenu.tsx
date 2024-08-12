import React, { useEffect, useState } from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import Note from "../text/Note";
import { motion, AnimatePresence } from "framer-motion";

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
    const [content, setContent] = useState({
        heading: props.heading,
        subheading: props.subheading,
        children: props.children,
        key: props.index,
    });

    useEffect(() => {
        setContent({
            heading: props.heading,
            subheading: props.subheading,
            children: props.children,
            key: props.index,
        });
    }, [props.heading, props.subheading, props.children, props.index]);

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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={content.key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {content.heading && (
                            <PrimaryHeading
                                text={content.heading}
                                textColor={props.textColor}
                            />
                        )}
                        {content.subheading && (
                            <Note text={content.subheading} />
                        )}
                        {content.children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BaseMenu;

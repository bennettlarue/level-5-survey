"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
    index?: number;
    onClick: () => void;
    text: string;
    icon: JSX.Element;
    background?: string;
    delay?: number;
    animate?: boolean;
};

export const IconButton = (props: Props) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            key={props.index}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: props.delay || 0.3 }}
            onClick={props.onClick}
            className={
                "text-l5White px-3 py-2 rounded-full w-fit cursor-pointer transition-all no-select " +
                (props.background ? props.background : "bg-l5Pink")
            }
        >
            <button className="flex items-center justify-between space-x-4 px-2 font-medium text-md">
                <span>{props.text}</span>
                {props.icon}
            </button>
        </motion.div>
    );
};

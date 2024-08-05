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
    return (
        <motion.div
            key={props.index}
            initial={{ opacity: props.animate ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.5,
            }}
            onClick={props.onClick}
            className={
                " text-l5White px-3 py-2 rounded-full w-fit cursor-pointer transition-all " +
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

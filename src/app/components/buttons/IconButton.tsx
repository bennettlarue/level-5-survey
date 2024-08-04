"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
    onClick: () => void;
    text: string;
    icon: JSX.Element;
    background?: string;
    delay?: number;
};

export const IconButton = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
            }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.9 }}
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

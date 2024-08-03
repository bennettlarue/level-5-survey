"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
    onClick: () => void;
    text: string;
    icon: JSX.Element;
    background?: string;
};

export const IconButton = (props: Props) => {
    return (
        <motion.div
            whileTap={{ scale: 0.85 }}
            onClick={props.onClick}
            className={
                " text-l5White px-4 py-3 rounded-full w-fit cursor-pointer transition-all " +
                (props.background ? props.background : "bg-l5Pink")
            }
        >
            <button className="flex items-center justify-between space-x-4 px-2 font-medium text-lg">
                <span>{props.text}</span>

                {props.icon}
            </button>
        </motion.div>
    );
};

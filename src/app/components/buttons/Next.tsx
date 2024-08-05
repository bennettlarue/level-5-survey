"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
    onClick: () => void;
    ready: boolean;
};

export const Next = (props: Props) => {
    const baseStyle =
        "text-l5Gray shadow transition-all border border-l5Gray px-3 py-1.5 rounded-full w-fit cursor-pointer";
    const readyStyle = "bg-l5Blue bg-opacity-80 hover:bg-opacity-100";
    const skipStyle = "bg-l5Blue bg-opacity-30 hover:bg-opacity-50";

    return (
        <div
            className={(props.ready ? readyStyle : skipStyle) + " " + baseStyle}
            onClick={props.onClick}
        >
            <div className="flex items-center justify-between space-x-3 font-medium">
                <span className="px-5">{props.ready ? "Next" : "Skip"}</span>

                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

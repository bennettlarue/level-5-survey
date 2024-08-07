"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    onClick: () => void;
};

export const Back = (props: Props) => {
    return (
        <div
            className="no-select text-l5Gray rounded-full hover:bg-opacity-20 border border-l5Gray hover:bg-l5Gray px-3 py-1.5 w-fit cursor-pointer transition-all"
            onClick={props.onClick}
        >
            <div className="flex items-center justify-between space-x-3 font-medium">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <span className="px-5">Back</span>
            </div>
        </div>
    );
};

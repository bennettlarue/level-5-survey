"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    onClick: () => void;
};

export const Back = (props: Props) => {
    return (
        <div
            className=" bg-l5Gray text-l5White px-4 py-2 rounded w-fit cursor-pointer"
            onClick={props.onClick}
        >
            <div className="flex items-center justify-between space-x-3 font-medium text-lg">
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span className="px-5">Back</span>
            </div>
        </div>
    );
};

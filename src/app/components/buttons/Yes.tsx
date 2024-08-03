import React from "react";
import { motion } from "framer-motion";
import { IconButton } from "./IconButton";

type Props = {
    selected: boolean;
    onClick: () => void;
};

const Yes = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text="Yes"
            icon={
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            }
            background={props.selected ? "bg-pink-700" : "bg-l5Pink"}
        />
    );
};

export default Yes;

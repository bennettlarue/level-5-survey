import React from "react";
import { IconButton } from "./IconButton";

type Props = {
    onClick: () => void;
    selected: boolean;
};

const No = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text="No"
            icon={
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
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

export default No;

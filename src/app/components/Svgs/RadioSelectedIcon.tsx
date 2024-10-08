import React from "react";

type Props = {};

const RadioSelectedIcon = (props: Props) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="12" cy="12" r="5" fill="currentColor" />
        </svg>
    );
};

export default RadioSelectedIcon;

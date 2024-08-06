import React from "react";

type Props = {};

const CheckedBox = (props: Props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="4"
                ry="4"
                stroke="currentColor"
                stroke-width="1.8"
            />
            <path
                d="M7 12L10 15L17 8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default CheckedBox;

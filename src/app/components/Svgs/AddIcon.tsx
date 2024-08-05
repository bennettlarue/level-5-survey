import React from "react";

type Props = {};

const AddIcon = (props: Props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default AddIcon;

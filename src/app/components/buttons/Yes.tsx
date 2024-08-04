import React from "react";
import { motion } from "framer-motion";
import { IconButton } from "./IconButton";
import CheckIcon from "../Svgs/CheckIcon";

type Props = {
    selected: boolean;
    onClick: () => void;
};

const Yes = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text="Yes"
            icon={<CheckIcon />}
            background={props.selected ? "bg-pink-700" : "bg-l5Pink"}
        />
    );
};

export default Yes;

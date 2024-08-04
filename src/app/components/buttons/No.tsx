import React from "react";
import { IconButton } from "./IconButton";
import XIcon from "../Svgs/XIcon";

type Props = {
    onClick: () => void;
    selected: boolean;
};

const No = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text="No"
            icon={<XIcon />}
            background={props.selected ? "bg-pink-700" : "bg-l5Pink"}
        />
    );
};

export default No;

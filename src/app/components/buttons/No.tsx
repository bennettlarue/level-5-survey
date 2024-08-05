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
            background={
                props.selected
                    ? "bg-l5Pink shadow-inner"
                    : "bg-l5Green bg-opacity-80 hover:bg-opacity-100 shadow"
            }
        />
    );
};

export default No;

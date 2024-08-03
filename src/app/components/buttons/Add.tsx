import React from "react";
import { IconButton } from "./IconButton";
import AddIcon from "../Svgs/AddIcon";

type Props = {
    onClick: () => void;
};

const Add = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text="Add"
            background="bg-l5Gray bg-opacity-80 hover:bg-opacity-100"
            icon={<AddIcon />}
        />
    );
};

export default Add;

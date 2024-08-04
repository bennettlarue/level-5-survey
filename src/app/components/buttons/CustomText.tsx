import React from "react";
import { IconButton } from "./IconButton";
import XIcon from "../Svgs/XIcon";

type Props = {
    text: string;
    onClick: () => void;
};

const CustomText = (props: Props) => {
    return (
        <IconButton
            onClick={props.onClick}
            text={props.text}
            icon={<XIcon />}
        />
    );
};

export default CustomText;

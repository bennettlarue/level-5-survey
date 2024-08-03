import React from "react";
import { IconButton } from "./IconButton";
import RadioUnselectedIcon from "../Svgs/RadioUnselectedIcon";
import RadioSelectedIcon from "../Svgs/RadioSelectedIcon";

type Props = {
    onClick: () => void;
    selected: boolean;
    text: string;
};

const Select = (props: Props) => {
    return (
        <IconButton
            onClick={() => props.onClick()}
            text={props.text}
            background={
                props.selected
                    ? "bg-l5Pink shadow-inner-lg"
                    : "bg-l5Green shadow-lg bg-opacity-80 hover:bg-opacity-100"
            }
            icon={
                props.selected ? <RadioSelectedIcon /> : <RadioUnselectedIcon />
            }
        />
    );
};

export default Select;

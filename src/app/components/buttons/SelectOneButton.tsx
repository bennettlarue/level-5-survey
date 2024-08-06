import React from "react";
import { IconButton } from "./IconButton";
import RadioUnselectedIcon from "../Svgs/RadioUnselectedIcon";
import RadioSelectedIcon from "../Svgs/RadioSelectedIcon";

type Props = {
    index?: number;
    onClick: () => void;
    selected: boolean;
    text: string;
    delay?: number;
};

const SelectOneButton = (props: Props) => {
    return (
        <IconButton
            index={props.index}
            onClick={() => props.onClick()}
            text={props.text}
            delay={props.delay}
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

export default SelectOneButton;

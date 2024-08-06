import React from "react";
import { IconButton } from "./IconButton";
import EmptyBox from "../Svgs/EmptyBox";
import CheckedBox from "../Svgs/CheckedBox";

type Props = {
    index?: number;
    onClick: () => void;
    selected: boolean;
    text: string;
    delay?: number;
};

const SelectMultipleButton = (props: Props) => {
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
            icon={props.selected ? <CheckedBox /> : <EmptyBox />}
        />
    );
};

export default SelectMultipleButton;

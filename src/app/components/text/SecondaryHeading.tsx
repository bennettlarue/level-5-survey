import * as React from "react";
import Popup from "../textAnimations/Popup";

export interface ISecondaryHeadingProps {
    text: string;
}

export default function SecondaryHeading(props: ISecondaryHeadingProps) {
    return (
        <h2 className="poppins-medium text-3xl text-l5Pink">
            <Popup text={props.text} delay={0.3} />
        </h2>
    );
}

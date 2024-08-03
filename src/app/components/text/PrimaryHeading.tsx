import * as React from "react";
import Popup from "../textAnimations/Popup";

export interface IPrimaryHeadingProps {
    text: string;
}

export default function PrimaryHeading(props: IPrimaryHeadingProps) {
    return (
        <h1 className="poppins-medium text-4xl text-l5Pink">
            <Popup text={props.text} delay={0.2} />
        </h1>
    );
}

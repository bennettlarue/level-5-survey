import * as React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

export interface ISecondaryHeadingProps {
    text: string;
}

export default function SecondaryHeading(props: ISecondaryHeadingProps) {
    return (
        <h2 className="poppins-medium text-3xl text-l5Pink">
            <FadeIn text={props.text} delay={0.1} />
        </h2>
    );
}

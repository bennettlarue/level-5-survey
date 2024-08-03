import React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    text: string;
};

export const Paragraph = (props: Props) => {
    return (
        <div className="poppins-regular text-2xl">
            <FadeIn delay={0.5} text={props.text} />
        </div>
    );
};

import React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    text: string;
};

export const Paragraph = (props: Props) => {
    return (
        <div className="poppins-regular text-lg text-balance">
            <FadeIn delay={0.5} text={props.text} />
        </div>
    );
};

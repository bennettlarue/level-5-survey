import React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    text: string;
    animated?: boolean;
};

const Note = (props: Props) => {
    return (
        <div className="text-l5Gray text-opacity-80">
            {props.animated ? (
                <FadeIn text={props.text} delay={0.3} />
            ) : (
                props.text
            )}
        </div>
    );
};

export default Note;

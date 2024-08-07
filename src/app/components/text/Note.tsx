import React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    text: string;
    animated?: boolean;
};

const Note = (props: Props) => {
    return (
        <div className="text-l5Gray text-opacity-80">
            <FadeIn
                text={props.text}
                delay={props.animated === false ? 0 : 0.5}
            />
        </div>
    );
};

export default Note;

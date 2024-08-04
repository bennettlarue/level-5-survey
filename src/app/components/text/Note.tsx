import React from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    text: string;
};

const Note = (props: Props) => {
    return (
        <div className="text-l5Gray text-opacity-80">
            <FadeIn text={props.text} delay={0.3} />
        </div>
    );
};

export default Note;

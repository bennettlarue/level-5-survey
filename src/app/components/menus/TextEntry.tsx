import React from "react";
import BaseMenu from "./BaseMenu";
import { TextInput } from "../submenus/TextInput";
import Note from "../text/Note";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void;
    icon: JSX.Element;
    text: string;
};

const TextEntry = (props: Props) => {
    return (
        <BaseMenu index={props.index} heading={props.text} icon={props.icon}>
            <div className="space-y-3">
                <TextInput
                    index={props.index}
                    currentAnswer={props.currentAnswer[0] || ""}
                    updateAnswer={props.updateAnswer}
                    placeholder="Enter your answer"
                />
            </div>
        </BaseMenu>
    );
};

export default TextEntry;

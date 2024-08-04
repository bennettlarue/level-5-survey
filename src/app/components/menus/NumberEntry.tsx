import React from "react";
import BaseMenu from "./BaseMenu";
import { NumberInput } from "../submenus/NumberInput";
import Note from "../text/Note";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (question: number, answer: string[]) => void;
    text: string;
    label1: string;
    label2: string;
};

const NumberEntry = (props: Props) => {
    const handleIncrement = (index: number) => {
        const newAnswer = [...props.currentAnswer];
        const currentValue = parseInt(newAnswer[index] || "0", 10);
        newAnswer[index] = (currentValue + 1).toString();
        props.updateAnswer(props.index, newAnswer);
    };

    const handleDecrement = (index: number) => {
        const newAnswer = [...props.currentAnswer];
        const currentValue = parseInt(newAnswer[index] || "0", 10);
        newAnswer[index] = Math.max(0, currentValue - 1).toString();
        props.updateAnswer(props.index, newAnswer);
    };

    const handleChange = (index: number, value: string) => {
        const newAnswer = [...props.currentAnswer];
        newAnswer[index] = value;
        props.updateAnswer(props.index, newAnswer);
    };

    return (
        <BaseMenu index={props.index} heading={props.text}>
            <div className="flex items-center justify-center space-x-12">
                <div className="space-y-3">
                    <Note text={props.label1} />
                    <NumberInput
                        index={props.index}
                        onChange={(e) => handleChange(0, e.target.value)}
                        currentAnswer={props.currentAnswer[0] || "0"}
                        updateAnswer={props.updateAnswer}
                        handleDecrement={() => handleDecrement(0)}
                        handleIncrement={() => handleIncrement(0)}
                    />
                </div>
                <div className="space-y-3">
                    <Note text={props.label2} />
                    <NumberInput
                        index={props.index}
                        onChange={(e) => handleChange(1, e.target.value)}
                        currentAnswer={props.currentAnswer[1] || "0"}
                        updateAnswer={props.updateAnswer}
                        handleDecrement={() => handleDecrement(1)}
                        handleIncrement={() => handleIncrement(1)}
                    />
                </div>
            </div>
        </BaseMenu>
    );
};

export default NumberEntry;

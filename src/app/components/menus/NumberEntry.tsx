import React from "react";
import BaseMenu from "./BaseMenu";
import { NumberInput } from "../submenus/NumberInput";
import Note from "../text/Note";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void;
    icon: JSX.Element;
    text: string;
    label1: string;
    label2: string;
};

const NumberEntry = (props: Props) => {
    // Ensure currentAnswer always has two elements, defaulting to "0" if undefined or empty
    const safeCurrentAnswer = [
        props.currentAnswer[0] || "0",
        props.currentAnswer[1] || "0",
    ];

    const handleIncrement = (index: number) => {
        const newAnswer = [...safeCurrentAnswer];
        const currentValue = parseInt(newAnswer[index], 10);
        newAnswer[index] = (currentValue + 1).toString();
        props.updateAnswer(newAnswer);
    };

    const handleDecrement = (index: number) => {
        const newAnswer = [...safeCurrentAnswer];
        const currentValue = parseInt(newAnswer[index], 10);
        newAnswer[index] = Math.max(0, currentValue - 1).toString();
        props.updateAnswer(newAnswer);
    };

    const handleChange = (index: number, value: string) => {
        const newAnswer = [...safeCurrentAnswer];
        newAnswer[index] = value || "0"; // Set to "0" if value is empty
        props.updateAnswer(newAnswer);
    };

    console.log(safeCurrentAnswer);

    return (
        <BaseMenu index={props.index} heading={props.text} icon={props.icon}>
            <div className="md:flex items-center justify-center md:space-x-12 md:space-y-0 space-y-8">
                <div className="space-y-3">
                    <Note text={props.label1} />
                    <NumberInput
                        index={0}
                        onChange={(e) => handleChange(0, e.target.value)}
                        currentAnswer={safeCurrentAnswer[0]}
                        updateAnswer={(_, value) =>
                            props.updateAnswer([
                                value[0] || "0",
                                safeCurrentAnswer[1],
                            ])
                        }
                        handleDecrement={() => handleDecrement(0)}
                        handleIncrement={() => handleIncrement(0)}
                    />
                </div>
                <div className="space-y-3">
                    <Note text={props.label2} />
                    <NumberInput
                        index={1}
                        onChange={(e) => handleChange(1, e.target.value)}
                        currentAnswer={safeCurrentAnswer[1]}
                        updateAnswer={(_, value) =>
                            props.updateAnswer([
                                safeCurrentAnswer[0],
                                value[0] || "0",
                            ])
                        }
                        handleDecrement={() => handleDecrement(1)}
                        handleIncrement={() => handleIncrement(1)}
                    />
                </div>
            </div>
        </BaseMenu>
    );
};

export default NumberEntry;

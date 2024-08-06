import React, { useState } from "react";
import SubtractIcon from "../Svgs/SubtractIcon";
import AddIcon from "../Svgs/AddIcon";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    index: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentAnswer: string;
    updateAnswer: (index: number, value: string[]) => void;
    handleDecrement: () => void;
    handleIncrement: () => void;
};

export const NumberInput = (props: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Remove leading zeros
        value = value.replace(/^0+/, "");

        // Enforce max of 99
        const numValue = parseInt(value, 10);
        if (numValue > 99) {
            value = "99";
        }

        props.updateAnswer(props.index, [value]);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <FadeIn delay={0.2}>
            <div className="flex items-center justify-center space-x-3">
                <button
                    onClick={props.handleDecrement}
                    className="p-1 shadow text-l5Gray bg-l5GrayWhite bg-opacity-60 rounded-full hover:bg-l5Blue transition-all"
                >
                    <SubtractIcon />
                </button>
                <input
                    type="number"
                    min="0"
                    max="99"
                    step="1"
                    value={
                        isFocused
                            ? props.currentAnswer
                            : props.currentAnswer || "0"
                    }
                    placeholder="0"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`text-xl w-14 py-2 rounded-full shadow-inner bg-l5GrayWhite text-center focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                        isFocused ? "ring-1 ring-l5Blue border-transparent" : ""
                    }`}
                />
                <button
                    onClick={props.handleIncrement}
                    className="p-1 text-l5Gray bg-l5GrayWhite bg-opacity-60 rounded-full shadow hover:bg-l5Blue transition-all"
                >
                    <AddIcon />
                </button>
            </div>
        </FadeIn>
    );
};

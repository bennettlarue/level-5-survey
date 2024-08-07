import React, { useState } from "react";
import { FadeIn } from "../textAnimations/FadeIn";

type Props = {
    index: number;
    currentAnswer: string;
    updateAnswer: (value: string[]) => void;
    placeholder?: string;
};

export const TextInput = (props: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateAnswer([e.target.value]);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <FadeIn delay={0.5}>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    value={props.currentAnswer || ""}
                    placeholder={props.placeholder || "Enter text"}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`
                    w-full max-w-[300px] px-4 py-2 text-lg 
                    border border-gray-300 rounded-full 
                    shadow-inner bg-l5GrayWhite bg-opacity-70 
                    focus:outline-none focus:ring-2 focus:ring-l5Blue focus:border-transparent
                    transition-all
                    ${
                        isFocused
                            ? "ring-2 ring-blue-500 border-transparent"
                            : ""
                    }
                `}
                />
            </div>
        </FadeIn>
    );
};

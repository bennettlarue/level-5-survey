import React from "react";
import SubtractIcon from "../Svgs/SubtractIcon";
import AddIcon from "../Svgs/AddIcon";

type Props = {
    index: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentAnswer: string;
    updateAnswer: (index: number, value: string[]) => void;
    handleDecrement: () => void;
    handleIncrement: () => void;
};

export const NumberInput = (props: Props) => {
    return (
        <div className="flex items-center justify-center space-x-3">
            <button
                onClick={props.handleDecrement}
                className="p-1 shadow text-l5Gray bg-white rounded-full border hover:text-l5Pink transition-all"
            >
                <SubtractIcon />
            </button>
            <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={props.currentAnswer || ""}
                placeholder="0"
                onChange={(e) =>
                    props.updateAnswer(props.index, [e.target.value])
                }
                className="text-xl w-14 py-2 rounded-full shadow-inner bg-white text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
                onClick={props.handleIncrement}
                className="p-1 text-l5Gray bg-white rounded-full shadow border hover:text-l5Pink transition-all"
            >
                <AddIcon />
            </button>
        </div>
    );
};

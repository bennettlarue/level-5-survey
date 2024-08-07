import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryHeading from "../text/SecondaryHeading";
import { IconButton } from "../buttons/IconButton";
import XIcon from "../Svgs/XIcon";
import CheckIcon from "../Svgs/CheckIcon";
import { TextInput } from "../submenus/TextInput";
import Note from "../text/Note";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (text: string) => void;
};

const TextEntryPopup = (props: Props) => {
    const [text, setText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const characterLimit = 20;

    const handleCancel = () => {
        setText("");
        props.onClose();
    };

    const handleSubmit = () => {
        if (text.trim() === "") {
            props.onClose();
            return;
        }

        props.onSubmit(text);
        setText("");
        props.onClose();
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        if (newText.length <= characterLimit) {
            setText(newText);
        }
    };

    return (
        <AnimatePresence>
            {props.isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 flex items-center justify-center z-50"
                    >
                        <div className="bg-l5White p-6 rounded-lg shadow-lg w-96 space-y-5 mx-5">
                            <Note
                                text="Enter your custom answer"
                                animated={false}
                            />
                            <div className="relative space-y-3">
                                <input
                                    placeholder="Custom Answer"
                                    value={text}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    maxLength={characterLimit}
                                    className={`
                                        w-full px-4 py-2 text-lg 
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
                                <Note
                                    text={text.length + " / " + characterLimit}
                                    animated={false}
                                />
                            </div>
                            <div className="flex justify-center space-x-5">
                                <IconButton
                                    text="Cancel"
                                    animate={false}
                                    background="bg-l5Gray bg-opacity-80 hover:bg-opacity-100"
                                    onClick={handleCancel}
                                    icon={<XIcon />}
                                />
                                <IconButton
                                    text="Submit"
                                    background="bg-l5Green bg-opacity-80 hover:bg-opacity-100"
                                    onClick={handleSubmit}
                                    icon={<CheckIcon />}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TextEntryPopup;

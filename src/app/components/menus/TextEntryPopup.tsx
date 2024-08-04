import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryHeading from "../text/SecondaryHeading";
import { IconButton } from "../buttons/IconButton";
import XIcon from "../Svgs/XIcon";
import CheckIcon from "../Svgs/CheckIcon";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (text: string) => void;
};

const TextEntryPopup = (props: Props) => {
    const [text, setText] = useState("");

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
                        <div className="bg-l5GrayWhite p-6 rounded-lg shadow-lg w-96 space-y-5">
                            <SecondaryHeading text="Enter Text" />
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full p-2 mb-4 border border-gray-300 rounded"
                            />
                            <div className="flex justify-between space-x-2">
                                <IconButton
                                    text="Cancel"
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

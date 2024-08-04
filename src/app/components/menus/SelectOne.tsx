import React from "react";
import Select from "../buttons/Select";
import Add from "../buttons/Add";
import TextEntryPopup from "./TextEntryPopup";
import { useState } from "react";
import AddIcon from "../Svgs/AddIcon";
import CustomText from "../buttons/CustomText";
import { AnimatePresence } from "framer-motion";
import BaseMenu from "./BaseMenu";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (question: number, answer: string[]) => void; // Changed from string[] to string
    text: string;
    selections?: string[];
};

const SelectOne = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);
    const handleSubmit = (text: string) => {
        props.updateAnswer(props.index, [text]); // Remove the spread operator and array
    };

    console.log(props.currentAnswer);

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={<AddIcon />}
            subheading="Please select one of the options."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence mode="wait">
                    {props.selections?.map((selection, index) => (
                        <Select
                            key={index}
                            text={selection}
                            selected={props.currentAnswer[0] === selection}
                            onClick={() =>
                                props.updateAnswer(props.index, [selection])
                            }
                        />
                    ))}
                    {props.currentAnswer &&
                    props.currentAnswer[0] &&
                    !props.selections?.includes(props.currentAnswer[0]) ? (
                        <CustomText
                            text={props.currentAnswer[0]}
                            onClick={() =>
                                props.updateAnswer(props.index, [""])
                            }
                        />
                    ) : (
                        <Add onClick={handleOpenMenu} />
                    )}
                </AnimatePresence>
            </div>
            <div className="relative">
                <TextEntryPopup
                    isOpen={isMenuOpen}
                    onClose={handleCloseMenu}
                    onSubmit={handleSubmit}
                />
            </div>
        </BaseMenu>
    );
};

export default SelectOne;

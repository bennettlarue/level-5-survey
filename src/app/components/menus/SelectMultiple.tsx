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
    updateAnswer: (question: number, answer: string[]) => void;
    text: string;
    selections?: string[];
};

const SelectMultiple = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);
    const handleSubmit = (text: string) => {
        props.updateAnswer(props.index, [...props.currentAnswer, text]);
    };

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={<AddIcon />}
            subheading="Please select all that apply."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence mode="wait">
                    {props.selections?.map((selection, index) => (
                        <Select
                            text={selection}
                            selected={props.currentAnswer.includes(selection)}
                            onClick={() =>
                                props.currentAnswer.includes(selection)
                                    ? props.updateAnswer(
                                          props.index,
                                          props.currentAnswer.filter(
                                              (s) => s !== selection
                                          )
                                      )
                                    : props.updateAnswer(props.index, [
                                          ...props.currentAnswer,
                                          selection,
                                      ])
                            }
                        />
                    ))}
                    {props.currentAnswer
                        .filter((text) => !props.selections?.includes(text))
                        .map((text, index) => (
                            <CustomText
                                text={text}
                                onClick={() =>
                                    props.updateAnswer(
                                        props.index,
                                        props.currentAnswer.filter(
                                            (t) => t !== text
                                        )
                                    )
                                }
                            />
                        ))}
                    <Add onClick={handleOpenMenu} />
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

export default SelectMultiple;

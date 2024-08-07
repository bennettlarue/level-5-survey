import React from "react";
import Select from "../buttons/SelectOneButton";
import Add from "../buttons/Add";
import TextEntryPopup from "./TextEntryPopup";
import { useState } from "react";
import AddIcon from "../Svgs/AddIcon";
import CustomText from "../buttons/CustomText";
import { AnimatePresence } from "framer-motion";
import BaseMenu from "./BaseMenu";
import HeartIcon from "../Svgs/HeartIcon";
import SelectMultipleButton from "../buttons/SelectMultipleButton";
import { motion } from "framer-motion";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void;
    text: string;
    selections?: string[];
    icon?: JSX.Element;
};

const SelectMultiple = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);
    const handleSubmit = (text: string) => {
        props.updateAnswer([...props.currentAnswer, text]);
    };

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={props.icon}
            subheading="Please select all that apply."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence>
                    {props.selections?.map((selection, index) => (
                        <motion.div layout key={index}>
                            <SelectMultipleButton
                                index={index}
                                text={selection}
                                selected={props.currentAnswer.includes(
                                    selection
                                )}
                                onClick={() =>
                                    props.currentAnswer.includes(selection)
                                        ? props.updateAnswer(
                                              props.currentAnswer.filter(
                                                  (s) => s !== selection
                                              )
                                          )
                                        : props.updateAnswer([
                                              ...props.currentAnswer,
                                              selection,
                                          ])
                                }
                            />
                        </motion.div>
                    ))}
                    {props.currentAnswer
                        .filter((text) => !props.selections?.includes(text))
                        .map((text, index) => (
                            <motion.div layout key={index}>
                                <CustomText
                                    key={index}
                                    text={text}
                                    onClick={() =>
                                        props.updateAnswer(
                                            props.currentAnswer.filter(
                                                (t) => t !== text
                                            )
                                        )
                                    }
                                />
                            </motion.div>
                        ))}
                    <motion.div layout key={100000000}>
                        <Add onClick={handleOpenMenu} />
                    </motion.div>
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

import React from "react";
import Select from "../buttons/SelectOneButton";
import Add from "../buttons/Add";
import TextEntryPopup from "./TextEntryPopup";
import { useState } from "react";
import AddIcon from "../Svgs/AddIcon";
import CustomText from "../buttons/CustomText";
import { AnimatePresence } from "framer-motion";
import BaseMenu from "./BaseMenu";
import { motion } from "framer-motion";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void; // Changed from string[] to string
    text: string;
    selections?: string[];
    icon?: JSX.Element;
};

const SelectOne = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);
    const handleSubmit = (text: string) => {
        props.updateAnswer([text]);
    };

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={props.icon}
            subheading="Please select one of the options."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence>
                    {props.selections?.map((selection, index) => (
                        <motion.div layout key={index}>
                            <Select
                                key={index}
                                text={selection}
                                selected={props.currentAnswer[0] === selection}
                                onClick={() => {
                                    props.currentAnswer[0] === selection
                                        ? props.updateAnswer([])
                                        : props.updateAnswer([selection]);
                                }}
                            />
                        </motion.div>
                    ))}
                    {props.currentAnswer &&
                    props.currentAnswer[0] &&
                    !props.selections?.includes(props.currentAnswer[0]) ? (
                        <motion.div layout key={props.currentAnswer[0]}>
                            <CustomText
                                text={props.currentAnswer[0]}
                                onClick={() => props.updateAnswer([])}
                            />
                        </motion.div>
                    ) : (
                        <motion.div layout key="add-button">
                            <Add onClick={handleOpenMenu} />
                        </motion.div>
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

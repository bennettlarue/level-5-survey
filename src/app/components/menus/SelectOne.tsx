import React from "react";
import Select from "../buttons/SelectOneButton";
import Add from "../buttons/Add";
import TextEntryPopup from "./TextEntryPopup";
import { useState } from "react";
import CustomText from "../buttons/CustomText";
import { AnimatePresence } from "framer-motion";
import BaseMenu from "./BaseMenu";
import { motion } from "framer-motion";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const SelectOne = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);
    const handleSubmit = (text: string) => {
        handleUpdateAnswer(currentSection, currentQuestion, [text]);
    };

    return (
        <BaseMenu
            index={currentSection * 1000 + currentQuestion}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
            subheading="Please select one of the options."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence>
                    {slideData.Selections?.map(
                        (selection: string, index: number) => (
                            <motion.div layout key={index}>
                                <Select
                                    key={index}
                                    text={selection}
                                    selected={currentAnswer[0] === selection}
                                    onClick={() => {
                                        currentAnswer[0] === selection
                                            ? handleUpdateAnswer(
                                                  currentSection,
                                                  currentQuestion,
                                                  []
                                              )
                                            : handleUpdateAnswer(
                                                  currentSection,
                                                  currentQuestion,
                                                  [selection]
                                              );
                                    }}
                                />
                            </motion.div>
                        )
                    )}
                    {currentAnswer &&
                    currentAnswer[0] &&
                    !slideData.Selections?.includes(currentAnswer[0]) ? (
                        <motion.div layout key={currentAnswer[0]}>
                            <CustomText
                                text={currentAnswer[0]}
                                onClick={() =>
                                    handleUpdateAnswer(
                                        currentSection,
                                        currentQuestion,
                                        []
                                    )
                                }
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

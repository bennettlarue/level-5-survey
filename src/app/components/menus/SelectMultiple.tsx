import React from "react";
import Add from "../buttons/Add";
import TextEntryPopup from "./TextEntryPopup";
import { useState } from "react";
import CustomText from "../buttons/CustomText";
import { AnimatePresence } from "framer-motion";
import BaseMenu from "./BaseMenu";
import SelectMultipleButton from "../buttons/SelectMultipleButton";
import { motion } from "framer-motion";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const SelectMultiple = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);

    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    const handleSubmit = (text: string) => {
        if (currentAnswer.includes(text)) return;

        handleUpdateAnswer(currentSection, currentQuestion, [
            ...currentAnswer,
            text,
        ]);
    };

    return (
        <BaseMenu
            index={currentSection * 1000 + currentQuestion}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
            subheading="Please select all that apply."
        >
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AnimatePresence>
                    {slideData.Selections?.map(
                        (selection: string, index: number) => (
                            <motion.div layout key={index}>
                                <SelectMultipleButton
                                    index={index}
                                    text={selection}
                                    selected={currentAnswer.includes(selection)}
                                    onClick={() =>
                                        currentAnswer.includes(selection)
                                            ? handleUpdateAnswer(
                                                  currentSection,
                                                  currentQuestion,
                                                  currentAnswer.filter(
                                                      (s: string) =>
                                                          s !== selection
                                                  )
                                              )
                                            : handleUpdateAnswer(
                                                  currentSection,
                                                  currentQuestion,
                                                  [...currentAnswer, selection]
                                              )
                                    }
                                />
                            </motion.div>
                        )
                    )}
                    {currentAnswer
                        .filter(
                            (text: string) =>
                                !slideData.Selections?.includes(text)
                        )
                        .map((text: string, index: number) => (
                            <motion.div layout key={text}>
                                <CustomText
                                    key={text}
                                    text={text}
                                    onClick={() =>
                                        handleUpdateAnswer(
                                            currentSection,
                                            currentQuestion,
                                            currentAnswer.filter(
                                                (t: string) => t !== text
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

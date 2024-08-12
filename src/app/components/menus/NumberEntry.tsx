import React from "react";
import BaseMenu from "./BaseMenu";
import { NumberInput } from "../submenus/NumberInput";
import Note from "../text/Note";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const NumberEntry = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    const safeCurrentAnswer = [
        currentAnswer[0] || "0",
        currentAnswer[1] || "0",
    ];

    const handleIncrement = (index: number) => {
        const newAnswer = [...safeCurrentAnswer];
        const currentValue = parseInt(newAnswer[index], 10);
        newAnswer[index] = (currentValue + 1).toString();
        handleUpdateAnswer(currentSection, currentQuestion, newAnswer);
    };

    const handleDecrement = (index: number) => {
        const newAnswer = [...safeCurrentAnswer];
        const currentValue = parseInt(newAnswer[index], 10);
        newAnswer[index] = Math.max(0, currentValue - 1).toString();
        handleUpdateAnswer(currentSection, currentQuestion, newAnswer);
    };

    const handleChange = (index: number, value: string) => {
        const newAnswer = [...safeCurrentAnswer];
        newAnswer[index] = value || "0"; // Set to "0" if value is empty
        handleUpdateAnswer(currentSection, currentQuestion, newAnswer);
    };

    return (
        <BaseMenu
            index={currentQuestion * 1000 + currentSection}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
        >
            <div className="md:flex items-center justify-center md:space-x-12 md:space-y-0 space-y-8">
                <div className="space-y-3">
                    <Note text={slideData.Label1} />
                    <NumberInput
                        index={0}
                        onChange={(e) => handleChange(0, e.target.value)}
                        currentAnswer={safeCurrentAnswer[0]}
                        updateAnswer={(_, value) =>
                            handleUpdateAnswer(
                                currentSection,
                                currentQuestion,
                                [value[0] || "0", safeCurrentAnswer[1]]
                            )
                        }
                        handleDecrement={() => handleDecrement(0)}
                        handleIncrement={() => handleIncrement(0)}
                    />
                </div>
                <div className="space-y-3">
                    <Note text={slideData.Label2} />
                    <NumberInput
                        index={1}
                        onChange={(e) => handleChange(1, e.target.value)}
                        currentAnswer={safeCurrentAnswer[1]}
                        updateAnswer={(_, value) =>
                            handleUpdateAnswer(
                                currentSection,
                                currentQuestion,
                                [safeCurrentAnswer[0], value[0] || "0"]
                            )
                        }
                        handleDecrement={() => handleDecrement(1)}
                        handleIncrement={() => handleIncrement(1)}
                    />
                </div>
            </div>
        </BaseMenu>
    );
};

export default NumberEntry;

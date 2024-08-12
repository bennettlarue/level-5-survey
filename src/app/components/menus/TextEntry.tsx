import React from "react";
import BaseMenu from "./BaseMenu";
import { TextInput } from "../submenus/TextInput";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const TextEntry = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    return (
        <BaseMenu
            index={currentQuestion * 1000 + currentSection}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
        >
            <div className="space-y-3">
                <TextInput
                    index={currentQuestion * 1000 + currentSection}
                    currentAnswer={currentAnswer[0] || ""}
                    updateAnswer={(answer) =>
                        handleUpdateAnswer(
                            currentSection,
                            currentQuestion,
                            answer
                        )
                    }
                    placeholder="Enter your answer"
                />
            </div>
        </BaseMenu>
    );
};

export default TextEntry;

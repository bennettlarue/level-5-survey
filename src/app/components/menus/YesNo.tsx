import React from "react";
import Yes from "../buttons/Yes";
import No from "../buttons/No";
import BaseMenu from "./BaseMenu";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const YesNo = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    return (
        <BaseMenu
            index={currentSection * 1000 + currentQuestion}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
        >
            <div className="flex items-center justify-center space-x-12">
                <Yes
                    selected={currentAnswer[0] === "yes"}
                    onClick={() => {
                        currentAnswer[0] === "yes"
                            ? handleUpdateAnswer(
                                  currentSection,
                                  currentQuestion,
                                  []
                              )
                            : handleUpdateAnswer(
                                  currentSection,
                                  currentQuestion,
                                  ["yes"]
                              );
                    }}
                />
                <No
                    selected={currentAnswer[0] === "no"}
                    onClick={() => {
                        currentAnswer[0] === "no"
                            ? handleUpdateAnswer(
                                  currentSection,
                                  currentQuestion,
                                  []
                              )
                            : handleUpdateAnswer(
                                  currentSection,
                                  currentQuestion,
                                  ["no"]
                              );
                    }}
                />
            </div>
        </BaseMenu>
    );
};

export default YesNo;

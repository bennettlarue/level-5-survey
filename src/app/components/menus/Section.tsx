import React, { useEffect, useState } from "react";
import BaseMenu from "./BaseMenu";
import { Paragraph } from "../text/Paragraph";
import CheckProgress from "../Svgs/CheckProgress";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";

type Props = {};

const Section = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    useEffect(() => {
        handleUpdateAnswer(currentSection, currentQuestion, ["Section"]);
    }, []);

    const slideData = menu[currentSection][currentQuestion];

    return (
        <BaseMenu
            index={currentSection * 1000 + currentQuestion} // unique key for each slide
            heading={slideData.Text}
            icon={
                <CheckProgress
                    sectionIndex={currentSection}
                    sectionCount={menu.length}
                />
            }
            bgColor="bg-l5Pink"
            textColor="text-l5White"
        >
            <div className="text-l5White space-y-6 opacity-90 max-w-[400px] mx-auto">
                {slideData.Content &&
                    slideData.Content.map((para: string, index: number) => (
                        <Paragraph key={index} text={para} />
                    ))}
            </div>
        </BaseMenu>
    );
};

export default Section;

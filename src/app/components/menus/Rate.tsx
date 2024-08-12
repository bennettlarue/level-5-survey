import React, { useState } from "react";
import BaseMenu from "./BaseMenu";
import Note from "../text/Note";
import { useMenu } from "@/app/contexts/MenuContext";
import { useNavigation } from "@/app/contexts/NavigationContext";
import { useAnswers } from "@/app/contexts/AnswersContext";
import SvgWrapper from "../Svgs/SvgWrapper";

type Props = {};

const Dot = ({
    selected,
    onClick,
    hoverIndex,
    setHoverIndex,
    index,
}: {
    selected: boolean;
    onClick: () => void;
    hoverIndex: number | null;
    setHoverIndex: (index: number | null) => void;
    index: number;
}): JSX.Element => {
    return (
        <div
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={onClick}
            className={`flex items-center justify-center overflow-clip transition-all ${
                !selected && hoverIndex !== null && index <= hoverIndex
                    ? "bg-l5Pink bg-opacity-20 rounded-full"
                    : ""
            }`}
        >
            <div>
                {selected ? (
                    <div className="bg-l5Pink w-[40px] h-[40px] rounded-full shadow cursor-pointer" />
                ) : (
                    <div className="border-2 border-l5Gray w-[40px] h-[40px] rounded-full shadow-inner transition-all cursor-pointer" />
                )}
            </div>
        </div>
    );
};

const Rate = (props: Props) => {
    const menu = useMenu();
    const { currentSection, currentQuestion } = useNavigation();

    const { answers, handleUpdateAnswer } = useAnswers();
    const slideData = menu[currentSection][currentQuestion];
    const currentAnswer = answers[currentSection][currentQuestion] || [];

    // Create an array of numbers 1 through 5
    const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <BaseMenu
            index={currentQuestion * 1000 + currentSection}
            heading={slideData.Text}
            icon={<SvgWrapper name={slideData.Icon} />}
        >
            <div className="flex items-center justify-center space-x-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <Note text="Not at all" />
                        <Note text="Very much" />
                    </div>
                    <div className="flex items-center space-x-4 px-5">
                        {numbers.map((number) => (
                            <Dot
                                key={number}
                                index={number}
                                selected={
                                    number <= parseInt(currentAnswer[0], 10)
                                }
                                onClick={() =>
                                    handleUpdateAnswer(
                                        currentSection,
                                        currentQuestion,
                                        [number.toString()]
                                    )
                                }
                                hoverIndex={hoverIndex}
                                setHoverIndex={setHoverIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </BaseMenu>
    );
};

export default Rate;

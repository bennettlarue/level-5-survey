import React from "react";
import CheckIcon from "./CheckIcon";
import HeartIcon from "./HeartIcon";
import { useNavigation } from "@/app/contexts/NavigationContext";

type Props = {
    sectionIndex: number;
    sectionCount: number;
};

const GrayCheck = () => {
    return (
        <div className="bg-l5GrayWhite shadow-inner text-l5White rounded-full w-[35px] h-[35px] flex items-center justify-center z-10 relative" />
    );
};

const GrayLine = () => {
    return (
        <div className="bg-l5GrayWhite shadow-inner text-l5White w-[35px] h-[10px] mx-[-10px]" />
    );
};

const GreenCheck = () => {
    return (
        <div className="bg-l5Green shadow-inner text-l5White rounded-full w-[35px] h-[35px] flex items-center justify-center z-10 relative">
            <CheckIcon />
        </div>
    );
};

const GreenLine = () => {
    return (
        <div className="bg-l5Green shadow-inner text-l5White w-[35px] h-[10px] mx-[-10px]" />
    );
};

const CheckProgress = (props: Props) => {
    const { currentSection, currentQuestion } = useNavigation();

    return (
        <div className="flex items-center">
            {currentSection === 0 && currentQuestion === 0 ? (
                <HeartIcon />
            ) : (
                [...Array(props.sectionCount)].map((_, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex items-center">
                                {index < props.sectionIndex ? (
                                    <GreenCheck />
                                ) : (
                                    <GrayCheck />
                                )}
                                {index !== props.sectionCount - 1 && (
                                    <div
                                        className="relative"
                                        style={{ left: "-5px" }}
                                    >
                                        {index < props.sectionIndex ? (
                                            <GreenLine />
                                        ) : (
                                            <GrayLine />
                                        )}
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })
            )}
        </div>
    );
};

export default CheckProgress;

"use client";

import { useContext } from "react";
import { Back } from "./components/buttons/Back";
import { Next } from "./components/buttons/Next";
import MenuConfig from "../../data/MenuConfig.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuWrapper from "./components/menus/MenuWrapper";
import { useNavigation } from "./contexts/NavigationContext";
import { useAnswers } from "./contexts/AnswersContext";

export default function Home() {
    const { answers, handleUpdateAnswer } = useAnswers();

    const { currentSection, currentQuestion, navigateNext, navigatePrevious } =
        useNavigation();

    const handleNext = () => {
        navigateNext();
    };

    const handleBack = () => {
        navigatePrevious();
    };

    return (
        <main className="flex flex-col h-screen md:items-center md:justify-center md:px-5">
            <div
                className="flex flex-col flex-grow w-full max-w-[1100px] md:max-h-[600px] h-screen mx-auto border-2 md:border-l5LightGray md:shadow rounded-lg"
                style={{ backgroundColor: "#f2f2f2" }}
            >
                <div className="flex-grow overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <MenuWrapper
                            key={`menu-wrapper-${currentSection}-${currentQuestion}`}
                            config={MenuConfig[currentSection][currentQuestion]}
                            index={currentQuestion * 1000 + currentSection}
                        />
                    </AnimatePresence>
                </div>
                <div
                    className={`h-[7px] ${
                        currentQuestion === 0 && currentSection === 0
                            ? "bg-l5Pink"
                            : ""
                    }`}
                >
                    <div
                        className={
                            "h-[7px] bg-l5Pink transition-all duration-300"
                        }
                        style={{
                            width: `${
                                currentQuestion === 0 && currentSection === 0
                                    ? 0
                                    : currentQuestion === 0
                                    ? 100
                                    : (100 /
                                          MenuConfig[currentSection].length) *
                                      currentQuestion
                            }%`,
                        }}
                    />
                </div>

                <div className="flex items-center md:justify-end justify-center p-4 space-x-5 border-l5LightGray border-t-2">
                    <Back onClick={handleBack} />
                    <Next
                        onClick={handleNext}
                        ready={
                            answers[currentSection][currentQuestion].length >
                                0 &&
                            !answers[currentSection][currentQuestion].every(
                                (item: string) => item === "0"
                            )
                        }
                    />
                </div>
            </div>
        </main>
    );
}

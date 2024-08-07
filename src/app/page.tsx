"use client";

import { Back } from "./components/buttons/Back";
import { Next } from "./components/buttons/Next";
import MenuConfig from "/data/MenuConfig.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuWrapper from "./components/menus/MenuWrapper";

export default function Home() {
    const [menu, setMenu] = useState(0);
    const [section, setSection] = useState(0);
    const [answers, setAnswers] = useState<string[][][]>(
        Array.from({ length: MenuConfig.length }, (_, index) => {
            return Array.from({ length: MenuConfig[index].length }, () => []);
        })
    );

    const updateAnswer = (
        section: number,
        question: number,
        answer: string[]
    ) => {
        const newAnswers = [...answers];
        newAnswers[section][question] = answer;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (menu < MenuConfig[section].length - 1) {
            setMenu(menu + 1);
        } else {
            setSection(section + 1);
            setMenu(0);
        }
    };

    const handleBack = () => {
        if (menu > 0) {
            setMenu(menu - 1);
        } else {
            console.log("else block");
            setMenu(MenuConfig[section - 1].length - 1);
            setSection(section - 1);
        }
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
                            key={`menu-wrapper-${menu}`}
                            sectionIndex={section}
                            sectionCount={MenuConfig.length}
                            config={MenuConfig[section][menu]}
                            answers={answers[section][menu]}
                            updateAnswer={(answer: string[]) => {
                                updateAnswer(section, menu, answer);
                            }}
                            index={menu}
                        />
                    </AnimatePresence>
                </div>
                <div
                    className={`h-[7px] ${
                        menu === 0 && section === 0 ? "bg-l5Pink" : ""
                    }`}
                >
                    <div
                        className={
                            "h-[7px] bg-l5Pink transition-all duration-300"
                        }
                        style={{
                            width: `${
                                menu === 0 && section === 0
                                    ? 0
                                    : menu === 0
                                    ? 100
                                    : (100 / MenuConfig[section].length) * menu
                            }%`,
                        }}
                    />
                </div>

                <div className="flex items-center md:justify-end justify-center p-4 space-x-5 border-l5LightGray border-t-2">
                    <Back onClick={handleBack} />
                    <Next
                        onClick={handleNext}
                        ready={
                            answers[section][menu].length > 0 &&
                            !answers[section][menu].every(
                                (item) => item === "0"
                            )
                        }
                    />
                </div>
            </div>
        </main>
    );
}

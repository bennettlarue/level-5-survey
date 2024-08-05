"use client";

import { Back } from "./components/buttons/Back";
import { Next } from "./components/buttons/Next";
import MenuConfig from "/data/MenuConfig.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuWrapper from "./components/menus/MenuWrapper";

export default function Home() {
    const [menu, setMenu] = useState(1);
    const [answers, setAnswers] = useState<string[][]>(
        Array.from({ length: 10 }, () => [])
    );

    const updateAnswer = (question: number, answer: string[]) => {
        const newAnswers = [...answers];
        newAnswers[question] = answer;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (menu < MenuConfig.length - 1) {
            setMenu(menu + 1);
        } else {
            setMenu(0);
        }
    };

    const handleBack = () => {
        if (menu > 0) {
            setMenu(menu - 1);
        } else {
            setMenu(MenuConfig.length - 1);
        }
    };

    return (
        <main>
            <div
                className="max-w-[1000px] mx-auto pt-16 border-2 border-l5LightGray shadow rounded-lg mt-20 p-10"
                style={{ backgroundColor: "#f2f2f2" }}
            >
                <AnimatePresence mode="wait">
                    <MenuWrapper
                        key={`menu-wrapper-${menu}`}
                        config={MenuConfig[menu]}
                        answers={answers[menu]}
                        updateAnswer={updateAnswer}
                        index={menu}
                    />
                </AnimatePresence>

                <div className="flex items-center justify-end mx-auto space-x-5">
                    <Back onClick={handleBack} />
                    <Next
                        onClick={handleNext}
                        ready={
                            answers[menu].length > 0 &&
                            !answers[menu].every((item) => item === "0")
                        }
                    />
                </div>
            </div>
        </main>
    );
}

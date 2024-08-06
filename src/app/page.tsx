"use client";

import { Back } from "./components/buttons/Back";
import { Next } from "./components/buttons/Next";
import MenuConfig from "/data/MenuConfig.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuWrapper from "./components/menus/MenuWrapper";

export default function Home() {
    const [menu, setMenu] = useState(1);
    const [section, setSection] = useState(0);
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
        <main className="flex flex-col h-screen md:items-center md:justify-center">
            <div
                className="flex flex-col flex-grow w-full max-w-[1000px] max-h-[600px] mx-auto border-2 md:border-l5LightGray md:shadow rounded-lg"
                style={{ backgroundColor: "#f2f2f2" }}
            >
                <div className="flex-grow overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <MenuWrapper
                            key={`menu-wrapper-${menu}`}
                            config={MenuConfig[menu]}
                            answers={answers[menu]}
                            updateAnswer={updateAnswer}
                            index={menu}
                        />
                    </AnimatePresence>
                </div>
                <div className="flex items-center md:justify-end justify-center p-4 space-x-5 border-t border-l5Gray">
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

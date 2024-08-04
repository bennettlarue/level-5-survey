"use client";

import Start from "./components/menus/Start";
import { Back } from "./components/buttons/Back";
import { Next } from "./components/buttons/Next";
import TestMenu1 from "./components/menus/TestMenu1";
import MenuConfig from "/data/MenuConfig.json";
import { useState } from "react";
import SelectMultiple from "./components/menus/SelectMultiple";
import YesNo from "./components/menus/YesNo";
import PrimaryHeading from "./components/text/PrimaryHeading";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

console.log(MenuConfig);

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

    return (
        <main>
            <div className="max-w-[1000px] mx-auto pt-16">
                <AnimatePresence mode="wait">
                    {MenuConfig[menu].Type === "TestMenu1" ? (
                        <SelectMultiple
                            currentAnswer={answers[menu]}
                            updateAnswer={updateAnswer}
                            index={menu}
                            text={MenuConfig[menu].Text}
                            selections={MenuConfig[menu].Selections}
                        />
                    ) : (
                        <YesNo
                            index={menu}
                            currentAnswer={answers[menu]}
                            updateAnswer={updateAnswer}
                            text={MenuConfig[menu].Text}
                        />
                    )}
                </AnimatePresence>

                <div className="flex items-center justify-between mx-auto space-x-5">
                    <Back onClick={() => setMenu(menu - 1)} />
                    <Next onClick={handleNext} />
                </div>
            </div>
        </main>
    );
}

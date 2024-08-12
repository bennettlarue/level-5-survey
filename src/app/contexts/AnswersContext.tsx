"use client";

import React, { createContext, useContext, useState } from "react";
import { MenuContext } from "./MenuContext";

type AnswersType = any[][];

interface AnswersContextType {
    answers: AnswersType;
    updateAnswers: (newAnswers: AnswersType) => void;
    handleUpdateAnswer: (
        sectionIndex: number,
        questionIndex: number,
        newAnswer: any
    ) => void;
}

// Create the context without initial value
export const AnswersContext = createContext<AnswersContextType | null>(null);

// Create a provider component
export function AnswersProvider({ children }: { children: React.ReactNode }) {
    const MenuConfig = useContext(MenuContext);

    const initialValue = Array.from(
        { length: MenuConfig.length },
        (_, index) => {
            return Array.from({ length: MenuConfig[index].length }, () => []);
        }
    );

    const [answers, setAnswers] = useState<AnswersType>(initialValue);

    const updateAnswers = (newAnswers: AnswersType) => {
        setAnswers(newAnswers);
    };

    const handleUpdateAnswer = (
        sectionIndex: number,
        questionIndex: number,
        newAnswer: any
    ) => {
        const newAnswers = answers.map((section, sIndex) =>
            sIndex === sectionIndex
                ? section.map((question, qIndex) =>
                      qIndex === questionIndex ? newAnswer : question
                  )
                : section
        );
        setAnswers(newAnswers);
    };

    return (
        <AnswersContext.Provider
            value={{ answers, updateAnswers, handleUpdateAnswer }}
        >
            {children}
        </AnswersContext.Provider>
    );
}

// Create a custom hook to use this context
export function useAnswers() {
    const context = useContext(AnswersContext);
    if (context === null) {
        throw new Error("useAnswers must be used within an AnswersProvider");
    }
    return context;
}

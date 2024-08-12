"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuContext } from "./MenuContext";

interface NavigationContextType {
    currentSection: number;
    currentQuestion: number;
    setCurrentSection: (section: number) => void;
    setCurrentQuestion: (question: number) => void;
    navigateNext: () => void;
    navigatePrevious: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const menuConfig = useContext(MenuContext);
    const [currentSection, setCurrentSection] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const totalSections = menuConfig.length;
    const questionsPerSection = menuConfig.map(
        (section: string[]) => section.length
    );

    const navigateNext = () => {
        if (currentQuestion < questionsPerSection[currentSection] - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentSection < totalSections - 1) {
            setCurrentSection(currentSection + 1);
            setCurrentQuestion(0);
        }
    };

    const navigatePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
            setCurrentQuestion(questionsPerSection[currentSection - 1] - 1);
        }
    };

    // Reset to first question if current question is out of bounds for the current section
    useEffect(() => {
        if (currentQuestion >= questionsPerSection[currentSection]) {
            setCurrentQuestion(0);
        }
    }, [currentSection, currentQuestion, questionsPerSection]);

    return (
        <NavigationContext.Provider
            value={{
                currentSection,
                currentQuestion,
                setCurrentSection,
                setCurrentQuestion,
                navigateNext,
                navigatePrevious,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === null) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider"
        );
    }
    return context;
}

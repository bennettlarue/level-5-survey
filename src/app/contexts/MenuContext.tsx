"use client";

import { createContext, useContext } from "react";
import MenuConfig from "../../../data/MenuConfig.json";
// Create the context
export const MenuContext = createContext<any>(null);

// Create a provider component
export function MenuProvider({ children }: { children: React.ReactNode }) {
    return (
        <MenuContext.Provider value={MenuConfig}>
            {children}
        </MenuContext.Provider>
    );
}

// Create a custom hook to use this context
export function useMenu() {
    const context = useContext(MenuContext);
    if (context === null) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}

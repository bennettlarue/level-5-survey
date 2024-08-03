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

console.log(MenuConfig);

export default function Home() {
    const [menu, setMenu] = useState(1);
    console.log(MenuConfig[menu]);

    return (
        <main>
            <div className="max-w-[1000px] mx-auto pt-16">
                <div className="space-y-5 h-[500px] flex items-center justify-center">
                    <div className="space-y-10 text-center">
                        {MenuConfig[menu].Type === "TestMenu1" ? (
                            <SelectMultiple
                                text={MenuConfig[menu].Text}
                                selections={MenuConfig[menu].Selections}
                            />
                        ) : (
                            <YesNo text={MenuConfig[menu].Text} />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between mx-auto space-x-5">
                    <Back onClick={() => setMenu(menu - 1)} />
                    <Next onClick={() => setMenu(menu + 1)} />
                </div>
            </div>
        </main>
    );
}

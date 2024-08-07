import React, { useEffect } from "react";
import BaseMenu from "./BaseMenu";
import { TextInput } from "../submenus/TextInput";
import Note from "../text/Note";
import { Paragraph } from "../text/Paragraph";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void;
    icon: JSX.Element;
    text: string;
};

const Section = (props: Props) => {
    useEffect(() => {
        props.updateAnswer(["Section"]);
    }, []);

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={props.icon}
            bgColor="bg-l5Pink"
            textColor="text-l5White"
        >
            <div className="text-l5White space-y-6 opacity-90 max-w-[400px] mx-auto">
                <Paragraph text="We would like to ask you a few questions to get a better understanding of your patient experience." />
                <Paragraph text="If your comfortable, answering questions could help improve the experience of others." />
            </div>
        </BaseMenu>
    );
};

export default Section;

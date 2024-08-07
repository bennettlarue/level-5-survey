import React, { useEffect } from "react";
import BaseMenu from "./BaseMenu";
import { TextInput } from "../submenus/TextInput";
import Note from "../text/Note";
import { Paragraph } from "../text/Paragraph";
import CheckProgress from "../Svgs/CheckProgress";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (answer: string[]) => void;
    icon: JSX.Element;
    text: string;
    content: string[];
    sectionIndex: number;
    sectionCount: number;
};

const Section = (props: Props) => {
    useEffect(() => {
        props.updateAnswer(["Section"]);
    }, []);

    return (
        <BaseMenu
            index={props.index}
            heading={props.text}
            icon={
                <CheckProgress
                    sectionIndex={props.sectionIndex}
                    sectionCount={props.sectionCount}
                />
            }
            bgColor="bg-l5Pink"
            textColor="text-l5White"
        >
            <div className="text-l5White space-y-6 opacity-90 max-w-[400px] mx-auto">
                {props.content.map((para) => (
                    <Paragraph text={para} />
                ))}
            </div>
        </BaseMenu>
    );
};

export default Section;

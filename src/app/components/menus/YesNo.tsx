import React from "react";
import Yes from "../buttons/Yes";
import No from "../buttons/No";
import BaseMenu from "./BaseMenu";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (question: number, answer: string[]) => void;
    text: string;
    icon?: JSX.Element;
};

const YesNo = (props: Props) => {
    return (
        <BaseMenu index={props.index} heading={props.text} icon={props.icon}>
            <div className="flex items-center justify-center space-x-12">
                <Yes
                    selected={props.currentAnswer[0] === "yes"}
                    onClick={() => {
                        props.currentAnswer[0] === "yes"
                            ? props.updateAnswer(props.index, [])
                            : props.updateAnswer(props.index, ["yes"]);
                    }}
                />
                <No
                    selected={props.currentAnswer[0] === "no"}
                    onClick={() => {
                        props.currentAnswer[0] === "no"
                            ? props.updateAnswer(props.index, [])
                            : props.updateAnswer(props.index, ["no"]);
                    }}
                />
            </div>
        </BaseMenu>
    );
};

export default YesNo;

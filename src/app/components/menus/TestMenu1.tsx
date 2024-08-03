import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import SecondaryHeading from "../text/SecondaryHeading";
import Yes from "../buttons/Yes";
import No from "../buttons/No";
import Select from "../buttons/Select";

type Props = {
    text: string;
};

const TestMenu1 = (props: Props) => {
    return (
        <>
            <PrimaryHeading text={props.text} />
            <div>
                <Select
                    text="Select"
                    selected={false}
                    onClick={() => console.log("Hello")}
                />
            </div>
        </>
    );
};

export default TestMenu1;

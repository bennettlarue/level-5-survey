import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import SecondaryHeading from "../text/SecondaryHeading";
import Yes from "../buttons/Yes";
import No from "../buttons/No";

type Props = {};

const TestMenu2 = (props: Props) => {
    return (
        <>
            <PrimaryHeading text="Test Menu Number 2 !!!" />
            <SecondaryHeading text="Test Menu Number 2 !!!" />
            <div className="flex items-center justify-between w-fit space-x-5">
                <Yes />
                <No />
            </div>
        </>
    );
};

export default TestMenu2;

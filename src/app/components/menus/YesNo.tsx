import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import SecondaryHeading from "../text/SecondaryHeading";
import Yes from "../buttons/Yes";
import No from "../buttons/No";

type Props = {
    text: string;
};

const YesNo = (props: Props) => {
    const [yes, setYes] = React.useState(false);

    return (
        <>
            <PrimaryHeading text={props.text} />

            <div className="flex items-center justify-center space-x-12">
                <Yes selected={yes} onClick={() => setYes(true)} />
                <No selected={!yes} onClick={() => setYes(false)} />
            </div>
        </>
    );
};

export default YesNo;

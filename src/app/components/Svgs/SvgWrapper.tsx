import React from "react";
import HeartIcon from "./HeartIcon";

type Props = {
    name: string;
};

const SvgWrapper = (props: Props) => {
    switch (props.name) {
        case "HeartIcon":
            return <HeartIcon />;
        default:
            return <>Hello</>;
    }
};

export default SvgWrapper;

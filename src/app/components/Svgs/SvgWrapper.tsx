import React, { useState, useEffect } from "react";
import HeartIcon from "./HeartIcon";
import CheckProgress from "./CheckProgress";
import AddIcon from "./AddIcon";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BiPlusMedical } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { PiHandHeartBold } from "react-icons/pi";
import { TbAmbulance } from "react-icons/tb";
import { FaRegHospital } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMedication } from "react-icons/md";

type Props = {
    name: string;
    sectionIndex?: number;
    sectionCount?: number;
};

const SvgWrapper = (props: Props) => {
    const [initialProps, setInitialProps] = useState<Props | null>(null);

    useEffect(() => {
        if (!initialProps) {
            setInitialProps(props);
        }
    }, [props, initialProps]);

    if (!initialProps) {
        return null; // or a loading indicator
    }

    const style = { width: "50px", height: "50px" };

    switch (initialProps.name) {
        case "Heart":
            return <FaRegHeart style={style} />;
        case "HeartHand":
            return <PiHandHeartBold style={style} />;
        case "Cross":
            return <BiPlusMedical style={style} />;
        case "Clock":
            return <FaRegClock style={style} />;
        case "Ambulance":
            return <TbAmbulance style={style} />;
        case "Hospital":
            return <FaRegHospital style={style} />;
        case "HeadSideVirus":
            return <FaHeadSideVirus style={style} />;
        case "Doctor":
            return <FaUserDoctor style={style} />;
        case "Medication":
            return <MdOutlineMedication style={style} />;
        case "CheckProgress":
            return initialProps.sectionIndex && initialProps.sectionCount ? (
                <CheckProgress
                    sectionIndex={initialProps.sectionIndex}
                    sectionCount={initialProps.sectionCount}
                />
            ) : (
                <HeartIcon />
            );
        default:
            return <>Hello</>;
    }
};

export default SvgWrapper;

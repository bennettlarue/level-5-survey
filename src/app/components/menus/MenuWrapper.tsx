import React from "react";
import { motion } from "framer-motion";
import SelectMultiple from "./SelectMultiple";
import YesNo from "./YesNo";
import SelectOne from "./SelectOne";
import NumberEntry from "./NumberEntry";
import TextEntry from "./TextEntry";
import SvgWrapper from "../Svgs/SvgWrapper";
import Rate from "./Rate";
import Section from "./Section";

const MenuWrapper = ({
    config,
    answers,
    updateAnswer,
    index,
    sectionIndex,
    sectionCount,
}) => {
    const animations = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.4, delay: 0.3 },
    };

    const renderMenu = () => {
        switch (config.Type) {
            case "Section":
                return <Section />;
            case "Rate":
                return (
                    <Rate
                        index={index}
                        currentAnswer={answers}
                        updateAnswer={updateAnswer}
                        text={config.Text}
                        icon={<SvgWrapper name={config.Icon} />}
                    />
                );
            case "SelectMultiple":
                return <SelectMultiple />;
            case "YesNo":
                return <YesNo />;
            case "SelectOne":
                return <SelectOne />;
            case "NumberEntry":
                return (
                    <NumberEntry
                        index={index}
                        currentAnswer={answers}
                        updateAnswer={updateAnswer}
                        text={config.Text}
                        label1={config.Label1}
                        label2={config.Label2}
                        icon={<SvgWrapper name={config.Icon} />}
                    />
                );
            case "TextEntry":
                return (
                    <TextEntry
                        index={index}
                        currentAnswer={answers}
                        updateAnswer={updateAnswer}
                        text={config.Text}
                        icon={<SvgWrapper name={config.Icon} />}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <motion.div
            key={`menu-${index}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations}
            className="w-full h-full"
        >
            {renderMenu()}
        </motion.div>
    );
};

export default MenuWrapper;

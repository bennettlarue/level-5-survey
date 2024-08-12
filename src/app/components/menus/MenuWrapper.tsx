import React from "react";
import { motion } from "framer-motion";
import SelectMultiple from "./SelectMultiple";
import YesNo from "./YesNo";
import SelectOne from "./SelectOne";
import NumberEntry from "./NumberEntry";
import TextEntry from "./TextEntry";
import Rate from "./Rate";
import Section from "./Section";

type Props = {
    config: any;
    index: number;
};

const MenuWrapper = (props: Props) => {
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const transition = { duration: 0.2, delay: 0.1 };

    const renderMenu = () => {
        switch (props.config.Type) {
            case "Section":
                return <Section />;
            case "Rate":
                return <Rate />;
            case "SelectMultiple":
                return <SelectMultiple />;
            case "YesNo":
                return <YesNo />;
            case "SelectOne":
                return <SelectOne />;
            case "NumberEntry":
                return <NumberEntry />;
            case "TextEntry":
                return <TextEntry />;

            default:
                return null;
        }
    };

    return (
        <motion.div
            key={`menu-${props.index}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
            className="w-full h-full"
        >
            {renderMenu()}
        </motion.div>
    );
};

export default MenuWrapper;

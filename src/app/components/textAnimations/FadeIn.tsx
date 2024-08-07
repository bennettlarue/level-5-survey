"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
    text?: string;
    delay?: number;
    children?: React.ReactNode;
};

export const FadeIn = (props: Props) => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible, controls]);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.4, delay: props.delay }}
        >
            {props.text}
            {props.children}
        </motion.div>
    );
};

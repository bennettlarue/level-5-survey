"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    text?: string;
    delay?: number;
    children?: React.ReactNode;
};

export const FadeIn = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: props.delay }}
        >
            {props.text}
            {props.children}
        </motion.div>
    );
};

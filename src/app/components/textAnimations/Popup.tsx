"use client";

import React from "react";
import { motion } from "framer-motion";

export interface IPopupProps {
    text: string;
    delay: number;
}

export default function Popup(props: IPopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: props.delay }}
        >
            {props.text}
        </motion.div>
    );
}

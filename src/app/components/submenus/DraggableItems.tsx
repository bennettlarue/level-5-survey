import React from "react";
import { motion, Reorder } from "framer-motion";

type Props = {
    item: string;
};

export const DraggableItem: React.FC<Props> = ({ item }) => {
    return (
        <Reorder.Item value={item} id={item}>
            <motion.div
                className="p-4 bg-white shadow-md rounded-lg cursor-move"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {item}
            </motion.div>
        </Reorder.Item>
    );
};

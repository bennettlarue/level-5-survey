import React, { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { DraggableItem } from "../submenus/DraggableItems";
import BaseMenu from "./BaseMenu";

type Props = {
    index: number;
    currentAnswer: string[];
    updateAnswer: (question: number, answer: string[]) => void;
    text: string;
    items: string[];
};

const DragDropMenu: React.FC<Props> = ({
    index,
    currentAnswer,
    updateAnswer,
    text,
    items,
}) => {
    const [availableItems, setAvailableItems] = useState<string[]>(items);
    const [selectedItems, setSelectedItems] = useState<string[]>(
        currentAnswer || []
    );

    const dragControls = useDragControls();

    const handleReorderAvailable = (newOrder: string[]) => {
        setAvailableItems(newOrder);
    };

    const handleReorderSelected = (newOrder: string[]) => {
        setSelectedItems(newOrder);
        updateAnswer(index, newOrder);
    };

    const handleDragEnd = (item: string, from: "available" | "selected") => {
        if (from === "available") {
            setAvailableItems(availableItems.filter((i) => i !== item));
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(selectedItems.filter((i) => i !== item));
            setAvailableItems([...availableItems, item]);
        }
    };

    return (
        <BaseMenu index={index} heading={text}>
            <div className="flex space-x-4">
                <div className="w-1/2">
                    <h3 className="mb-2 text-lg font-semibold">
                        Available Items
                    </h3>
                    <Reorder.Group
                        axis="y"
                        values={availableItems}
                        onReorder={handleReorderAvailable}
                        className="space-y-2 min-h-[200px] p-4 bg-gray-100 rounded-lg"
                    >
                        {availableItems.map((item) => (
                            <Reorder.Item
                                key={item}
                                value={item}
                                dragListener={false}
                                dragControls={dragControls}
                                onDragEnd={() =>
                                    handleDragEnd(item, "available")
                                }
                            >
                                <DraggableItem item={item} />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>
                <div className="w-1/2">
                    <h3 className="mb-2 text-lg font-semibold">
                        Selected Items
                    </h3>
                    <Reorder.Group
                        axis="y"
                        values={selectedItems}
                        onReorder={handleReorderSelected}
                        className="space-y-2 min-h-[200px] p-4 bg-gray-100 rounded-lg"
                    >
                        {selectedItems.map((item) => (
                            <Reorder.Item
                                key={item}
                                value={item}
                                dragListener={false}
                                dragControls={dragControls}
                                onDragEnd={() =>
                                    handleDragEnd(item, "selected")
                                }
                            >
                                <DraggableItem item={item} />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>
            </div>
        </BaseMenu>
    );
};

export default DragDropMenu;

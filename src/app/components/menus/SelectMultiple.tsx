import React from "react";
import PrimaryHeading from "../text/PrimaryHeading";
import SecondaryHeading from "../text/SecondaryHeading";
import Yes from "../buttons/Yes";
import No from "../buttons/No";
import Select from "../buttons/Select";
import Add from "../buttons/Add";

type Props = {
    text: string;
    selections?: string[];
};

const SelectMultiple = (props: Props) => {
    const [selected, setSelected] = React.useState([""] as string[]);

    return (
        <>
            <PrimaryHeading text={props.text} />
            <div className="grid grid-cols-3 items-center justify-center gap-5">
                {props.selections?.map((selection) => (
                    <Select
                        text={selection}
                        selected={selected.includes(selection)}
                        onClick={() =>
                            selected.includes(selection)
                                ? setSelected(
                                      selected.filter((s) => s !== selection)
                                  )
                                : setSelected([...selected, selection])
                        }
                    />
                ))}
                <Add onClick={() => console.log("add")} />
            </div>
        </>
    );
};

export default SelectMultiple;

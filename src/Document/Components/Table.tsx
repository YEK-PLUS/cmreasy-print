import React, { FC, Fragment } from "react";
import { Slot } from "./Slot";
import { Modes, TModes } from "./mixes";


type Slot = React.ReactNode | React.ReactNode[]

type Line = Slot | Slot[]

interface ComponentTableProps {
    data: Line[]
    mode: TModes
}

function toArray<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [value]
}

export const ComponentTable: FC<ComponentTableProps> = ({ data, mode }) => {
    return <Slot type="col" mode={mode}>
        {data.map((line, index) =>
            <Slot type="row" mode={mode} key={index} innerStyle={{ flex: 1 }}>
                {toArray(line).map((slot, index) =>
                    <Slot type="col" mode={mode} key={index}>
                        {toArray(slot).map((slot, index) => <Fragment key={index}>{slot}</Fragment>)}
                    </Slot>
                )}
            </Slot>
        )}
    </Slot>
}
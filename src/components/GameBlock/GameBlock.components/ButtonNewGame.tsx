import { Button } from "antd";
import React from "react";
import {emitter} from "../../../emitter/emmiter";

export const ButtonNewGame = () => {

    const handleClick = () => {
        emitter.emit('START', false)
        emitter.emit('SCORE', 'reset')
        emitter.emit('TIMER', 'reset')
        emitter.emit('RANDOM_ELEM', true)
    }

    return (
        <Button
            onClick={handleClick}
            style={{
                fontSize : 20,
                height : 40
            }}
            type="default"
        >
            New Game
        </Button>
    )
}
import { Button } from "antd";
import React from "react";
import {emitter} from "../../../emitter/emmiter";

export const ButtonStartPause = () => {

    const [activeBtn, setBtn] = React.useState(true)


    React.useEffect(() => {
        emitter.on('START', boolean => setBtn(boolean))
    }, [])


    const handleClick = (value : string) => {

        if (value === 'start') {

            setBtn(false)
            emitter.emit('START', false)
            emitter.emit('TIMER', 'start')

        }
        else {

            setBtn(true)
            emitter.emit('START', true)
            emitter.emit('TIMER', 'pause')

        }

    }

    return (<>
        <Button
            onClick={e => handleClick('start')}
            style={{
                display : activeBtn ? 'inline-block' : 'none',
                marginRight : 20,
                fontSize : 20,
                height : 40
            }}
            type="primary"
        >
            Start
        </Button>

        <Button
            onClick={e => handleClick('pause')}
            style={{
                display : !activeBtn ? 'inline-block' : 'none',
                marginRight : 20,
                fontSize : 20,
                height : 40
            }}
            danger
        >
            Pause
        </Button>
    </>)
}
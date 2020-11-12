import React from "react";
import {emitter} from "../../../emitter/emmiter";


const startMinute = 1
let time = startMinute * 60

const minutes = Math.floor(time / 60)
const seconds = time % 60

let startTime = `${minutes}:${seconds}`
if (minutes < 10 && seconds < 10) startTime = `0${minutes}:0${seconds}`

let interval : any = null

export const Time = () => {

    const [currentTime, setTime] = React.useState(startTime)


    React.useEffect(() => {

        const timer = () => {

            const minutes = Math.floor(time / 60)
            const seconds = time % 60

            if (minutes < 10)                 setTime(`0${minutes}:${seconds}`)
            if (minutes < 10 && seconds < 10) setTime(`0${minutes}:0${seconds}`)

            time--

            return () => {

                const minutes = Math.floor(time / 60)
                const seconds = time % 60

                if (minutes < 10)                 setTime(`0${minutes}:${seconds}`)
                if (minutes < 10 && seconds < 10) setTime(`0${minutes}:0${seconds}`)

                time--
            }
        }

        emitter.on('TIMER', value => {

            if (value === 'start') {
                interval = setInterval(timer(), 1000)
            }
            else if (value === 'reset') {
                clearInterval(interval)
                time = startMinute * 60
                interval = setInterval(timer(), 1000)
            }
            else {
                clearInterval(interval)
            }
        })

    }, [])


    React.useEffect(() => {
        if (currentTime === '00:00') {

            clearInterval(interval)

            emitter.emit('START', true)
            emitter.emit('MODAL', true)
            emitter.emit('SCORE', 'reset')
            emitter.emit('RANDOM_ELEM', true)

            time = startMinute * 60
            setTime(startTime)

        }
    }, [currentTime])

    return (
        <div>
            <div className="game__toolbar-minTitle">Time</div>
            <div className="game__toolbar-block"> { currentTime } </div>
       </div>
    )
}
import React from "react";
import {emitter} from "../../../emitter/emmiter";

export const Points = () => {

    const [score , setScore] = React.useState(0)

    React.useEffect(() => {

       emitter.on('SCORE', value => {

           if(value === 'reset') {

               setScore(prevState => {
                   emitter.emit('SCORE__RESULT', prevState)
                   return 0
               })

           }
           else {

               setScore(prevState => prevState + value)

           }

       })
    }, [])

    return (
        <div>
            <div className="game__toolbar-minTitle">Points</div>
            <div className="game__toolbar-block">{score}</div>
        </div>
    )
}
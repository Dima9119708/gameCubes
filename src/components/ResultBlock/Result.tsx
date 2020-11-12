import React from "react";
import {localStorage} from "../../utils/utils";
import {emitter} from "../../emitter/emmiter";

export const Result = () => {

    const [getUsers, setUsers] = React.useState( localStorage('gameCube')
                                                          ? localStorage('gameCube')
                                                          : [])
    React.useEffect(() => {
        emitter.on('RESULT', users => setUsers(users))
    }, [])

    return (
        <div style={{ paddingTop : 144 }}
        >
            <div className="game__result">
                <h3 className="game__result-title">Result</h3>

                {
                    getUsers.map( ( item : { name : string, score : number } , index : number) => {
                        return (
                            <div
                                key={item.name + index}
                                className="game__result-user"
                            >
                                <div className="game__result-user-name">{item.name}</div>
                                <div className="game__result-user-score">{item.score}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
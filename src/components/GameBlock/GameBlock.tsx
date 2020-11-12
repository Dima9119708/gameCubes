import React from "react";
import { ButtonNewGame } from "./GameBlock.components/ButtonNewGame";
import { ButtonStartPause } from "./GameBlock.components/ButtonStartPause";
import { MainGameBlock } from "./GameBlock.components/MainGameBlock";
import { Points } from "./GameBlock.components/Points";
import { Time } from "./GameBlock.components/Time";
import {Modal} from "./GameBlock.components/Modal";


export const GameBlock = () => {

    return (
        <>
            <div className="game__left-block">

                <header>
                    <h1>Game Cube</h1>
                </header>

                <div className="game__toolbar">

                    <div>
                        <ButtonStartPause/>
                        <ButtonNewGame/>
                    </div>

                    <Points/>

                    <Time/>
                </div>

                <MainGameBlock/>
            </div>

            <Modal />
        </>
    )
}
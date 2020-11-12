import React from "react";
import {blocksHeight, colorsOfTheirGlasses, createBlock, CSS_COLOR_NAMES, randomIndex } from "../../../utils/utils";
import {emitter} from "../../../emitter/emmiter";


const gameHeight = 530
export const gameBlocks = 135
const blockHeight = 50
export const elementsRandom = 16

export const MainGameBlock = () => {

    const [overlay, setOverlay] = React.useState(true)
    const [randIdx, setIndex] = React.useState(randomIndex())
    const [randHeight, setRandHeight] = React.useState(randIdx.slice(0, 4))


    React.useEffect(() => {
        emitter.on('START', boolean => setOverlay(boolean))
        emitter.on('RANDOM_ELEM', () => {
            const randIDX = randomIndex()
            setIndex(randIDX)
            setRandHeight(randIDX.slice(0, 3))
        })
    }, [])


    const handleClick = (e: React.MouseEvent) => {

        const block = e.target as HTMLDivElement
        const getBG = block.style.backgroundColor

        if (getBG) {
            const randIDX = randomIndex()
            setIndex(randIDX)
            setRandHeight(randIDX.slice(0, 3))

            //  кубики разных цветов приносят разное количество очков
            for (const [score, colors] of Object.entries(colorsOfTheirGlasses)) {
                if (colors.includes(getBG)) {
                    emitter.emit('SCORE', +score)
                }
            }

            // кубики меньшего размера приносят больше очков
            const getHeight = +block.style.height.split('px')[0]
            if (getHeight === 30) {
                emitter.emit('SCORE', 3)
            }
            else if(getHeight === 20) {
                emitter.emit('SCORE', 6)
            }
            else if(getHeight === 10) {
                emitter.emit('SCORE', 12)
            }

            emitter.emit('SCORE', 1)
        }
        else {
            if (!overlay) {
                emitter.emit('SCORE', -1)
            }
        }

    }

    return (
        <div
            onClick={handleClick}
            style={{
                position : 'relative',
                height : gameHeight,
                overflow : 'hidden'
            }}
        >
            <div
                className="game__overlay"
                style={{ display : overlay ? 'flex' : 'none' }}
            >
                Нажмите на кнопку START
            </div>

            {
                createBlock()
                    .map( (_,i) => {

                        const color = Math.floor(Math.random() * CSS_COLOR_NAMES.length)
                        const height = Math.floor(Math.random() * blocksHeight.length)

                        return (

                            <div
                                key={i + _}
                                style={{
                                    display : "inline-block",
                                    height : randHeight.includes(i) ? blocksHeight[height] : blockHeight,
                                    width: randHeight.includes(i) ? blocksHeight[height] : blockHeight,
                                    border : '2px solid #000',
                                    backgroundColor : randIdx.includes(i)
                                                      ? CSS_COLOR_NAMES[color]
                                                      : '',
                                    margin : 2
                                }}
                            >

                            </div>
                        )
                    })
            }
        </div>
    )

}
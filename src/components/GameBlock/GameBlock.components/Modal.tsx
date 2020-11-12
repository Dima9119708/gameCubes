import React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {DialogActions, DialogContent, TextField} from "@material-ui/core";
import {Button} from "antd";
import {emitter} from "../../../emitter/emmiter";
import {localStorage} from "../../../utils/utils";

export const Modal = () => {

    const [open, setOpen] = React.useState(false);
    const [score, setScore] = React.useState(0)
    const $input = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {

        emitter.on('MODAL', listener => setOpen(listener))
        emitter.on('SCORE__RESULT', listener => setScore(listener))

    }, [])


    const handleSaveName = () => {
        const inputValue = $input.current!.value
        const getTable = localStorage('gameCube')
                         ? localStorage('gameCube')
                         : []

        if (!inputValue) {
            getTable.push({ name : 'NoName', score})
            localStorage('gameCube', getTable)
        }
        else {
            getTable.push({ name : inputValue, score})
            localStorage('gameCube', getTable)
        }

        emitter.emit('RESULT', getTable)

        setOpen(false)
    };

    const handleClose = () => setOpen(false)

    return (
        <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Your score: {score}</DialogTitle>
            <DialogContent>
                <TextField
                    inputRef={$input}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleSaveName} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@mui/material"
import CloseIcon from '@material-ui/icons/Close';
import './ModalRegister.css';
import PostForm from '../userForm/UserForm';
import { Box, Modal } from '@mui/material';
import '../../root.css'


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 700,
            height: 700,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 4, 3),
            borderRadius: '25px'
        },
    }),
);

function ModalRegister() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />

            </Box>

            <PostForm />

        </div>
    );

    return (
        <div>
            <Typography className='login__text cursor mb-1'

                onClick={handleOpen}>Crie uma conta</Typography>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalRegister;
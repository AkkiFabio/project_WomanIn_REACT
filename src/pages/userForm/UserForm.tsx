import React, { useState, useEffect, ChangeEvent } from "react";
// import User from "../../models/User";
// import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { grid } from "@mui/system";
import './UserForm.css';
import CancelOutlined from '@mui/icons-material/Cancel';



function UserForm() {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh'}}>
      
            <Grid >
                <Box >
                    <form action="" className="campos">
                        <Typography variant='h3'gutterBottom component='h3'align='center' className="headliner">
                            Cadastro 
                        </Typography>
                        <Box display="flex" flexDirection='column'>
                            <TextField id='name' label='Nome' variant='outlined' name='name' margin='normal' className="textfieldbg"></TextField>
                            <TextField id='email' label='E-mail'variant='outlined' name='email'margin='normal' className="textfieldbg"></TextField>
                            <TextField id='password' label='Senha' variant='outlined' name='password' margin='normal' className="textfieldbg"></TextField>
                            <TextField id='confirmPassword' label='Confirmar Senha' variant='outlined' name='confirmPassword' margin='normal' className="textfieldbg"></TextField>
                        </Box>

                        <Box marginTop={2} textAlign='center' className="buttons">
    
                            <CancelOutlined className="btn__secondary"/>
                           
                            <Button type='submit'variant='contained' className='btn__primary'>
                                Confirmar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid className="form__img" xs={12}>

            </Grid>
        </Grid >
    )
}

export default UserForm;
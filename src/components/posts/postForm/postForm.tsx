import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React from 'react';
import './postForm.css';

function PostForm(){

    return(
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                    Formulário de cadastro de postagem
                </Typography>

                <TextField value='' id='titulo' label='titulo' variant='outlined' name='titulo' margin='normal' fullWidth></TextField>

                <TextField value='' id='texto' label='texto' name='texto' variant='outlined' margin='normal' fullWidth></TextField>

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                    <Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper'>
                        <MenuItem value=''>Descrição da Postagem</MenuItem>
                    </Select>

                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>

                    <Button type='submit' variant='contained' color='primary'>
                        Finalizar
                    </Button>
                </FormControl>

            </form>
        </Container>
    )
}
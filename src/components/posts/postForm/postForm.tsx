import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React from 'react';
import './postForm.css';

function postForm(){

    return(
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                    Formulário de cadastro de postagem
                </Typography>

                <TextField value='' id='title' label='title' variant='outlined' name='title' margin='normal' fullWidth></TextField>

                <TextField value='' id='description' label='description' name='description' variant='outlined' margin='normal' fullWidth></TextField>

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Categoria</InputLabel>
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

export default postForm;
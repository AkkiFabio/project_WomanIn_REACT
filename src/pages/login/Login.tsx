import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
// // import { useDispatch } from 'react-redux'
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [idUser, setIdUser] = useLocalStorage('id');
    const [user, setUser] = useLocalStorage('user');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            email: '',
            password: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`api/User/login`, userLogin, setToken, setIdUser, setUser)

            alert("Usuário logado com sucesso!");
        } catch (error) {
            alert("Dados do usuário inconsistentes. Erro ao logar!");
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid xs={6} className='login__img'>

            </Grid>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className="headliner">
                            Entrar
                        </Typography>
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' className='btn__primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Não possui conta?
                            </Typography>

                        </Box>

                        <Link to='/cadastro' className='no__text__decorator'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='login__text'>
                                Crie uma conta
                            </Typography>
                        </Link>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    );
}
export default Login;
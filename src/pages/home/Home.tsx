import React, { useEffect } from 'react';
import './Home.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import ImagemBemVindo from '../home/Hiring.svg';
import '../../root.css';
import HomeBlob from '../../img/blob/home.svg'
import HomeImg from '../../img/home_img.svg'
import Typed from "react-typed";
import CursosImg from '../../img/Cursos.svg'
import ConexoesImg from '../../img/Conexoes.svg'
import ModalPost from '../../components/posts/modalPost/ModalPost';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';



function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token");
    const [user] = useLocalStorage('user');
    // let userJson = JSON.parse(user)

    useEffect(() => {
        if(token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
        
        // console.log(userJson)
    }, [token])

    return (
        <>
            <Grid container alignItems='center' className='section'>

                <Grid item xs={8}>
                    <Box>
                        <Typography variant='h3' gutterBottom component='h3' className='header'>Woman<span>In</span></Typography>
                        <Typography variant='h5' gutterBottom component='h5' className='subtitle__home'>A rede social <Typed className='subtitle__home'
                            strings={[
                                "das mulheres",
                                "do empoderamento",
                                "delas.",
                            ]}
                            typeSpeed={50}
                            backSpeed={75}
                            loop /></Typography>

                        <Link to='/login' className='no__text__decorator'>
                            <Button type='submit' variant='outlined' className='btn__home'>
                                JUNTE-SE A NÓS
                            </Button>
                        </Link>

                    </Box>

                </Grid>

                <Grid item xs={4}>

                    <img src={HomeBlob} alt="Home blob" className='home__blob' />
                    <img src={HomeImg} alt="Home blob" className='home__img' />

                </Grid>

            </Grid>

            <Grid container alignItems='center' className='section bgvagas' >
                <Grid item xs={6}>
                    <img src={ImagemBemVindo} alt='' width='500px' height='500px' />
                </Grid>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'>Vagas</Typography>
                        <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'> <img src="" alt="" /> Comece uma nova carreira </Typography>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <ModalPost />
                        </Box>
                        <Button variant='outlined' className='botao'> oportunidades </Button>
                    </Box>
                    {/* <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Button variant='outlined' className='botao'> D </Button>
                        </Box>
                    </Box> */}
                </Grid>
            </Grid>
            <Grid container alignItems='center' className='section bgCursos'>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'>Cursos</Typography>
                        <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'> <img src="" alt="" /> Aprenda novas habilidades </Typography>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Button variant='outlined' className='botao'> Estude Conosco </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src={CursosImg} alt='' width='500px' height='500px' />
                </Grid>
            </Grid>
            <Grid container alignItems='center' className='section bgConexoes'>
                <Grid item xs={6}>
                    <img src={ConexoesImg} alt='' width='500px' height='500px' />
                </Grid>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'>Conexões</Typography>
                        <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'> <img src="" alt="" /> Conecte-se às oportunidades </Typography>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Button variant='outlined' className='botao'> Ver Postagens </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;

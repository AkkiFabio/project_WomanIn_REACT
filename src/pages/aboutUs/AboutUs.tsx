import React from 'react';
import './AboutUs.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import ImagemBemVindo from '../aboutUs/Hiring.svg';
import Grafico from '../../img/grafico.png';
import ODS from '../../img/testods.png';
import Visual from '../../img/Visual.svg';
import '../../root.css';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <>

            <Grid container direction='row' justifyContent='center' alignItems='center' className='section first bgVagas'>
                <Grid item xs={6}>
                    <img src={Grafico} alt='Gráfico de mulheres na tecnologia' width='500px' height='500px' />
                </Grid>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={5}>
                        <Typography variant='h1' className='titulo'>Nossa Missão</Typography>
                        <Typography variant='body1' gutterBottom align='center' className='text__content'>
                            A WomanIn é uma iniciativa com objetivo de reduzir a desigualdade de gênero. <br />
                            Historicamente, as mulheres ocuparam menor número em termos percentuais em postos de trabalho se comparadas ao homens.
                            No Brasil, a participação das mulheres é 20% inferior a dos homens no mercado de trabalho.<br />
                            Quando falamos sobre área tech, as mulheres ocupam somente 7,5% das vagas ofertadas em nosso país.
                            <a href='https://www.cnnbrasil.com.br/branded-content/business/participacao-de-mulheres-no-mercado-de-trabalho-e-20-inferior-a-dos-homens/' className='fontes' target='_blank'> Leia mais aqui.</a>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* <Grid container display='flex' direction='row' justifyContent='center' alignItems='center' className='section first'>
                <Grid alignItems='center' item xs={6}>
                    <img src='../../img/graficopizza' alt='' width='200px' height='200px' />
                </Grid>
                <Box paddingX={20}>
                    {/* <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'> Sobre nós </Typography> 
                    <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'> A WomanIn é uma iniciativa com objetivo de reduzir a desigualdade de gênero.
                        No Brasil, a participação das mulheres é 20% inferior a dos homens no mercado de trabalho. Quando falamos sobre área tech, as mulheres ocupam somente 7,5% das vagas ofertadas em nosso país. </Typography>
                </Box>
            </Grid> */}

            <Grid container direction='row' justifyContent='center' alignItems='center' className='section bgCursos'>
                <Grid alignItems='center' item xs={6}>

                    <Box paddingX={5}>
                        <Typography variant='body1' gutterBottom align='center' className='text__content_dark'> Diante desses dados, pensando nos Objetivos de Desenvolvimento Sustentável propostos pela ONU para a Agenda 2030, escolhemos o ODS nº 5: Igualdade de Gênero.<br /> Mais especificamente obersvamos a Meta 5.b: "Aumentar o uso de tecnologias de base, em particular as tecnologias de informação e comunicação, para promover o empoderamento das mulheres".<a href='https://brasil.un.org/pt-br/91863-agenda-2030-para-o-desenvolvimento-sustentavel' className='fontes' target='_blank'> Leia mais aqui.</a>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <img src={ODS} alt='Símbolo da ODS número 5' width='750px' height='600px' />
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='center' alignItems='center' className='section bgConexoes'>
                <Grid item xs={6}>
                    <img src={Visual} alt='' width='500px' height='500px' />
                </Grid>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={5}>
                        <Typography variant='body1' gutterBottom align='center' className='text__content_dark'> Portanto, a fim de impulsionar a carreira delas, conectamos mulheres às empresas que apoiam a mesma causa e querem diminuir a desigualdade de gênero no mercado de trabalho. <br />
                            A WomanIn reconhece a importância de empregar mais mulheres e dar a elas autonomia profissional e financeira.
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link to='/postagens' className='no__text__decorator'>
                            <Box marginRight={1}>
                                <Button variant='outlined' className='botao'> Junte-se a nós! </Button>
                            </Box>
                        </Link>
                    </Box>
                </Grid>

            </Grid>

        </>
    )
}

export default AboutUs;

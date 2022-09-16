import React from 'react';
import './AboutUs.css';
import { Box, Button, Grid, Typography} from '@mui/material';
import ImagemBemVindo from '../aboutUs/Hiring.svg';
import '../../root.css';

function AboutUs() {
    return (
        <>
            
            <Grid container direction='row' justifyContent='center' alignItems='center' className='section first'>
                <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'> Sobre nós </Typography>
                        <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'> A WomanIn é uma iniciativa com objetivo de reduzir a desigualdade de gênero.
No Brasil, a participação das mulheres é 20% inferior a dos homens no mercado de trabalho. Quando falamos sobre área tech, as mulheres ocupam somente 7,5% das vagas ofertadas em nosso país. </Typography>
                </Box>

            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='section'>
                <Grid alignItems='center' item xs={6}>

                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'> Diante desses dados, pensando nos OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL propostos pela ONU para a Agenda 2030, escolhemos o ODS nº 5: Igualdade de Gênero. </Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Button variant='outlined' className='botao'> ODS  </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src={ImagemBemVindo} alt='' width='500px' height='500px'/>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='section'>
                <Grid item xs={6}>
                    <img src={ImagemBemVindo} alt='' width='500px' height='500px'/>
                </Grid>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'> Assim, a WomanIn busca impulsionar a carreira de mulheres, ofertando vagas exclusivas de empresas que apoiam a mesma causa e reconhecem a importância de empregá-las e dar a elas autonomia profissional e financeira. </Typography>
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

export default AboutUs;

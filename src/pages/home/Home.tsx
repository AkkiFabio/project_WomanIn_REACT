import React from 'react';
import './Home.css';
import { Box, Button, Grid, Typography} from '@mui/material';
import ImagemBemVindo from '../home/Hiring.svg';
import '../../root.css';

function Home() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa-inicio'>
                <Grid alignItems='center' item xs={6}>

                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo-bemvindo'></Typography>
                        <Typography variant='h5' gutterBottom component='h5' align='center' className='subitulo-bemvindo'></Typography>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Button variant='outlined' className='botao'> Ver Postagens </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <img src={ImagemBemVindo} alt='' width='500px' height='500px'/>
                </Grid>
                <Grid xs={12} className='posts'>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Home;

import React from 'react';
import './Home.css';
import { Box, Button, Grid, Typography} from '@mui/material';
import { Link } from 'react-router-dom'
import ImagemBemVindo from '../home/Hiring.png';
import '../../root.css';
import HomeBlob from '../../img/blob/home.svg'
import HomeImg from '../../img//home_img.svg'
import Typed from "react-typed";


function Home() {
    
    return (
        <>
            <Grid container  alignItems='center' className='section'>

                <Grid item xs={8}>
                    <Box>
                        <Typography variant='h3' gutterBottom component='h3' className='header'>Woman<span>In</span></Typography>
                        <Typography variant='h5' gutterBottom component='h5' className='subtitle__home'>A rede social <Typed className='subtitle__home'
      strings={[
            "das mulheres",
            "do emponderamento",
            "delas.",
          ]}
          typeSpeed={50}
          backSpeed={75}
          loop/></Typography>

                        <Link to='/login' className='no__text__decorator'>
                        <Button type='submit' variant='outlined' className='btn__home'>
                            JUNTE-SE A NÓS
                        </Button>
                        </Link>
                        
                    </Box>
                    
                </Grid>

                <Grid item xs={4}>
                                                           
                    <img src={HomeBlob} alt="Home blob" className='home__blob'/>
                    <img src={HomeImg} alt="Home blob" className='home__img'/>
                    
                </Grid>

            </Grid>
        </>
    )
}

export default Home;
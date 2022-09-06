import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';
import '../../../root.css'
//import { useSelector } from 'react-redux';
//import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={12}>
                <Box display='flex' className="footer">
                    <Box paddingTop={1} className="footer__item">
                        <Typography variant="h5" paragraph>WomanIn </Typography>
                        <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, mollitia.</Typography>
                    </Box>
                    
                    <Box className="footer__item">
                    <Typography variant="h5" paragraph> Sobre </Typography>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Quem somos</li>
                    </Box>

                    <Box className="footer__item">
                    <Typography variant="h5" paragraph> Serviços </Typography>
                        <li>Cursos</li>
                        <li>Vagas</li>
                        <li>Perfil</li>
                    </Box>
            
                </Box>

                <Box className="footer small">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" className="text__footer" >Feito com &#9829; por Buraco de Rato</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="social"/>
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="social"/>
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="social"/>
                        </a>
                    </Box>
                    </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Footer;
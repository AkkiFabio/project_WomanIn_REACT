import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { Box } from "@mui/material";
import './Footer.css';
import '../../../root.css'
import Logo from '../../../img/logo.svg'
//import { useSelector } from 'react-redux';
//import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    return (
        <>
        <Grid container justifyContent="center" alignItems="center" className="footer">
            <Grid alignItems="center" xs={12}>
                
                <Box display='flex' sx={{ justifyContent: 'space-evenly' }}>
                    
                    {/* <Box className="footer__item">
                       <img src={Logo} alt="Logo WomanIn" className="logo"/>
                    </Box> */}

                    <Box className="footer__item">
                        <Typography variant="h5" paragraph className="logofooter">WomanIn </Typography>
                        <Typography variant='subtitle1'>A rede social das mulheres,</Typography>
                        <Typography variant='subtitle1'>do empoderamento,</Typography>
                        <Typography variant='subtitle1'>delas.</Typography>
                    </Box>
                          
                    <Box className="footer__item">
                    <Typography variant="subtitle2" className='footer__header' paragraph> Empresa </Typography>
                        <li>Termos de uso</li>
                        <li>Sobre nós</li>
                    </Box>

                    <Box className="footer__item">
                    <Typography variant="subtitle2" className='footer__header' paragraph> Serviços </Typography>
                        <li>Cursos</li>
                        <li>Vagas</li>
                        <li>Perfil</li>
                    </Box>                

                    <Box className="footer__item">
                    <Typography variant="subtitle2" className='footer__header' paragraph> Sobre </Typography>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Perfil</li>
                        <li>Sair</li>
                    </Box>  

                    <Box className="footer__item contact__section">
                    <Typography variant="subtitle2" className='footer__header' paragraph> Contato </Typography>
                        <form action="">
                        <TextField id='name' label='Nome' variant='outlined' name='nome' className='contact'></TextField>
                        <TextField id='subject' label='Assunto' variant='outlined' name='subject' className='contact'></TextField>                       
                        </form>
                        <Button type='submit'variant='contained' className='btn__footer'>
                            Enviar
                        </Button>
                    </Box>
            
                </Box>
            </Grid>
            <Grid alignItems="center" xs={6}>
                <Box className="footer__small">
                        <Box paddingTop={3}>
                            <Typography variant="subtitle2" align="center" className="text__footer" >Feito com &#9829; por Equipe WomanIn</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="social"/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="social"/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
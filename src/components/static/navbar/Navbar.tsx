import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, /*Button, IconButton*/} from "@mui/material";
/*import MenuIcon from '@mui/icons-material/Menu';*/
import { Link } from "react-router-dom";
import './Navbar.css';
import '../../../root.css';
import Logo from '../../../img/logo.svg'
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className='container__navbar' position="static">
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>
                        <Box display="flex" justifyContent="start" />
                        <Link to="/home" className="no__text__decorator">
                            <Box mx={1} className='cursor'>
                                <Typography className='navbar__item' variant="h6" color="white">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/Quem-Somos" className="no__text__decorator">
                            <Box mx={1} className='cursor'>
                                <Typography className='navbar__item' variant="h6" color="white">
                                    Quem Somos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="no__text__decorator">
                            <Box mx={1} className='cursor'>
                                <Typography className='navbar__item' variant="h6" color="white">
                                    Login
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="no__text__decorator">
                            <Box mx={1} className='cursor'>
                                <Typography className='navbar__item' variant="h6" color="white">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;

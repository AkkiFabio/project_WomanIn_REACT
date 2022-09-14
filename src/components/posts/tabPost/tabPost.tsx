import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './tabpostagem.css';
import PostList from '../postList/PostList';

function TabPost() {

    const [value, setValue] = useState('1')

    function handleChange(evente: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position='static'>
                    <Tabs centered className='faixa' onChange={handleChange}>
                        <Tab label="Todas as postagens" value='1' />
                        <Tab label="Sobre nós" value='2' />
                    </Tabs>
                </AppBar>

                <TabPanel value='1'>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <PostList />

                    </Box>
                </TabPanel>

                <TabPanel value='2'>
                    <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo'>
                        Sobre nós
                    </Typography>

                    <Typography variant='body1' gutterBottom color='textPrimary' align='justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam doloremque,
                        dolorem id quasi quas vel, earum magni qui voluptatum iste voluptatibus quis suscipit neque ad rerum eum adipisci iure itaque!
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPost;
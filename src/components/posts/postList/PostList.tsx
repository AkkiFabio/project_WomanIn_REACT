import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, Button, Typography, CardContent } from '@material-ui/core';
import './postList.css';
import useLocalStorage from 'react-use-localstorage';
import { search } from '../../../services/Service';
import Post from '../../../models/Post';

function postList() {

    const [posts, setPosts] = useState<Post[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate(); 

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado')
            history("/login")
        }
    }, [token])

    async function getPost() {
        await search("/post", setPosts, {
            headers: {
                'Authorzations': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            {
                posts.map(post =>
                    <Box m={2} >
                        <Card variant='outlined' className='card'>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom className='posts'>
                                    Postagens
                                </Typography>

                                <Typography variant='h5' component='h2' className='posts'>
                                    {post.title}
                                </Typography>

                                <Typography variant='body2' component='p' className='posts'>
                                    {post.description}
                                </Typography>

                                <Typography variant='body2' component='p' className='posts'>
                                    {post.category?.name}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/formularioPostagem/${post.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' className='atualizar' size='small'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' className='deletar' size='small'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                )}
        </>
    )
}

export default postList;
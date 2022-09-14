import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, Button, Typography, CardContent } from '@mui/material';
import './postList.css';
import useLocalStorage from 'react-use-localstorage';
import { post, search } from '../../../services/Service';
import Post from '../../../models/Post';

function PostList() {

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
        await search("api/Post", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])


    return (
        <>

            {
                posts.length > 0
                    ?
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

                                        <Link to={`/deletarPost/${post.id}`} className='text-decorator-none'>
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
                    )
                    :
                    <h1>NAO TEM NADA!!!!!!</h1>
            }




        </>
    )

}

export default PostList;
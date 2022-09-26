import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, Button, Typography, CardContent, CardMedia } from '@mui/material';
import './postList.css';
import useLocalStorage from 'react-use-localstorage';
import { search } from '../../../services/Service';
import Post from '../../../models/PostModel';
import ModalPost from '../modalPost/ModalPost';
import CursosImg from '../../../img/Cursos.svg'

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
            <Box display='flex' justifyContent='center' className='newpostbtn'>
                <Box marginRight={1}>
                    <ModalPost />
                </Box>
            </Box>
            <main id='post_feed'>
                {
                    posts.length > 0
                        ?
                        posts.map(post =>
                            <article className='card-content'>
                                <header>
                                    <Typography variant='h5' component='h2' className='posts posttitle'>
                                        {post.title}
                                    </Typography>
                                </header>
                                <footer>

                                    <Typography variant='body2' component='p' className='posts postdescription'>
                                        {post.description}
                                    </Typography>

                                    <Typography variant='body2' component='p' className='posts postcategory'>
                                        Categoria: {post.category?.name}
                                    </Typography>
                                </footer>

                            </article>

                        )
                        :
                        <h1>Carregando lista de postagens...</h1>
                }
            </main>
        </>
    )

}

export default PostList;
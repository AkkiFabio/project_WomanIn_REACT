import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import PostModel from '../../models/PostModel';
import { search } from '../../services/Service';
import '../../../src/root.css'

import './Profile.css'

export default function Profile() {

    let navigate = useNavigate();
    const [token] = useLocalStorage("token");
    const [idUser] = useLocalStorage("id");
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        getPosts()
        if (token === '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }

    }, [token])

    async function getPosts() {
        console.log(token);
        await search("api/Post", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (
        <>
            <main id='my_profile'>
                <section id='data_user'>
                    <h1>Perfil</h1>

                </section>
                <section id='posts_user'>
                    <h1>Minhas postagens</h1>
                    {posts.map(post => (
                        <>

                            {
                                post.creator?.id === parseInt(idUser)
                                    ?
                                    <>
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
                                                        <Link to={`/cadastroPost/${post.id}`} className='text-decorator-none'>
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
                                    </>
                                    :
                                    ''
                            }
                        </>
                    ))
                    }
                </section>



            </main>
        </>
    );
}
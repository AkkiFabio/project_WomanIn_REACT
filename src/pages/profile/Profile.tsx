import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import PostModel from '../../models/PostModel';
import { search } from '../../services/Service';
import '../../../src/root.css'
// import Fotoperfil from '../../img/fotoperfil.svg';

import './Profile.css'
import User from '../../models/User';
import { toast } from 'react-toastify';



export default function Profile() {

    let navigate = useNavigate();
    const [token] = useLocalStorage("token");
    const [idUser] = useLocalStorage("id");
    const [user] = useLocalStorage('user');
    let userJson: any;
    const [posts, setPosts] = useState<PostModel[]>([]);
    const [userProfile, setUserProfile] = useState<User>(
        {
            id: parseInt(userJson?.id),
            name: userJson?.name,
            cpF_CNPJ: userJson?.cpF_CNPJ,
            email: userJson?.email,
            password: userJson?.password,
            type: userJson?.type
        }
    );

    useEffect(() => {
        if (token === '' && user === '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigate("/login")
        } else {
            userJson = JSON.parse(user);
            getPosts()
            setUserProfile({
                id: parseInt(userJson?.id),
                name: userJson?.name,
                cpF_CNPJ: userJson?.cpF_CNPJ,
                email: userJson?.email,
                password: userJson?.password,
                type: userJson?.type
            })                          
        }
    }, [userJson])

    async function getPosts() {
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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg"
                                alt="foto do perfil"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    {userProfile.name}
                                </Typography>


                                <Typography variant="body2" color="text.secondary">
                                    Formada em tecnologia
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Editar
                            </Button>
                        </CardActions>
                    </Card>
                    

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
                                                                <Button variant='contained' className='btn__PostUpdate' size='small'>
                                                                    Atualizar
                                                                </Button>
                                                            </Box>
                                                        </Link>
                                                        

                                                        <Link to={`/deletarPost/${post.id}`} className='text-decorator-none'>
                                                            <Box mx={1}>
                                                                <Button variant='contained' className='btn__Delete' size='small'>
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
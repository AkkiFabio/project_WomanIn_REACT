import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import './deletePost.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import PostModel from '../../../models/PostModel';
import { searchId, deleteId } from '../../../services/Service';

function DeletePost() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [post, setPost] = useState<PostModel>();

    useEffect(() => {
        if(token == ''){
            alert("Você precisa estar logado")
            history("/login")
        }        
    }, [token])

    useEffect(() => {
        if(id != undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        searchId(`api/Post/id/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function Sim() {
        history('/postagens')
        deleteId(`api/Post/delete/${id}`, {
            headers: {
            'Authorization': token
            }
        });
        alert('Postagem deletada com sucesso')
    }

    function Nao(){
        history('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined' className='card'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>

                            <Typography color='textSecondary'>
                                {post?.title}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={Sim} variant='contained' className='marginLeft' size='large' color='primary'>
                                    Sim
                                </Button>
                            </Box>

                            <Box mx={2}>
                                <Button onClick={Nao} variant='contained' size='large' color='secondary'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>
            </Box>
        </>
    )
}

export default DeletePost;
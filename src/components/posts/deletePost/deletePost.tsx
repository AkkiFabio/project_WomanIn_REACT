import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import './deletePost.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import PostModel from '../../../models/PostModel';
import { searchId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';

function DeletePost() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [post, setPost] = useState<PostModel>();

    useEffect(() => {
        if(token == ''){
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
        toast.success('Postagem deletada com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
    }

    function Nao(){
        history('/postagens')
    }

    return (
        <>
            <Box m={2} >
                <Card variant='outlined' className='carddeletepost'>
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
                                <Button onClick={Sim} variant='contained' className='btn__DeleteYes' >
                                    Sim
                                </Button>
                            </Box>

                            <Box mx={2}>
                                <Button onClick={Nao} variant='contained'  className='btn__DeleteNo'>
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
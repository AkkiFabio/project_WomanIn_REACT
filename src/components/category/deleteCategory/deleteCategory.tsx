import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import Category from '../../../models/Category';
import { useNavigate, useParams } from 'react-router-dom';
import './deleteCategory.css';
import { searchId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';

function DeleteCategory() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        if(token == '')
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
    }, [token])

    useEffect(() => {
        if(id != undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        searchId(`api/Category/${id}`, setCategory, {
            headers: {
                'Authorization': token
            }
        })
    }

    function Sim() {
        history('/categorias')
        deleteId(`/categorias/${id}`, {
            headers: {
            'Authorization': token
            }
        });
        toast.success('Categoria deletada com sucesso!', {
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
        history('/categorias')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar a Categoria:
                            </Typography>

                            <Typography color='textSecondary'>
                                {category?.name}
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

export default DeleteCategory;
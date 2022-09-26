import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { TextField } from '@mui/material';
import './categoryForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Category from '../../../models/Category';
import { findByDisplayValue } from '@testing-library/react';
import { searchId, post, put } from '../../../services/Service';
import { backdropClasses } from '@mui/material';
import { FunctionsTwoTone } from '@mui/icons-material';
import { toast } from 'react-toastify';

function CategoryForm() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [category, setCategory] = useState<Category>({
        id: 0,
        name: ''
    });

    useEffect(() => {
        if(token == '')
        toast.success('Você precisa estar logado!', {
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

    function updatedCategory(e: ChangeEvent<HTMLInputElement>) {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(category))

        if(id != undefined) {
            console.log(category)
            put('/categorias', category, setCategory, {
                headers: {
                    'Authorizations': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } else{
            post('/categorias', category, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso!', {
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
        back()
    }

    function back(){
        history('/categorias')
    }

    return (
        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                    Formulário de cadastro Tema
                </Typography>

                <TextField value={category.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategory(e)} id='name' label='name' variant='outlined' name='name' margin='normal' fullWidth></TextField>

                <Button type='submit' variant='contained' color='primary'>
                    Finalizar
                </Button>
            </form>
        </Container>

    )
}

export default CategoryForm;
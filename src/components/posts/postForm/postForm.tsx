import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Category from '../../../models/Category';
import PostModel from '../../../models/PostModel';
import { put, post as servicePost, search, searchId } from '../../../services/Service';
import './postForm.css';

function PostForm(){
    
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categories, setCategories] = useState<Category[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])
      
    const [category, setCategory] = useState<Category>(
        {
            id: 0,
            name: ''
        })
    const [post, setPost] = useState<PostModel>({
        id: 0,
        title: '',
        description: '',
        category: null
    })

    useEffect(() => { 
        setPost({
            ...post,
            category: category
        })
    }, [category])

    useEffect(() => {
        getCategory()
        if (id !== undefined) {
            findByIdPost(id)
        }
    }, [id])

    async function getCategory() {
        await search("/api/Category", setCategory, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPost(id: string) {
        await searchId(`/api/Category/id/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPost(e: ChangeEvent<HTMLInputElement>) {

        setPost({
            ...post,
            [e.target.name]: e.target.value,
            category: category
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/api/Post`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            servicePost(`/api/Post`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/postagens')
    }

    

    return(
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                    Formulário de cadastro de postagem
                </Typography>

                <TextField value={post.title} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id='title' label='title' variant='outlined' name='title' margin='normal' fullWidth></TextField>

                <TextField value={post.description} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id='description' label='description' name='description' variant='outlined' margin='normal' fullWidth></TextField>

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Categoria</InputLabel>
                    <Select 
                    labelId='demo-simple-select-helper-label' 
                    id='demo-simple-select-helper'
                    onChange={(e) => searchId(`/api/Category/id/${e.target.value}`, setCategory, {
                        headers: {
                            'Authorization': token
                        }
                        })}>

                         {
                            categories.map(category => (
                                <MenuItem value={category.id}>{category.name}</MenuItem>
                            ))
                        }

                    </Select>

                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>

                    <Button type='submit' variant='contained' color='primary'>
                        Finalizar
                    </Button>
                </FormControl>

            </form>
        </Container>
    )
}

export default PostForm;
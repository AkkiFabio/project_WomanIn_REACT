import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Category from '../../../models/Category';
import PostModel from '../../../models/PostModel';
import { put, post as servicePost, search, searchId } from '../../../services/Service';
import './postForm.css';
import '../../../../src/root.css';

export interface PostDTO {
    title: string;
    description: string;
    creator: {
        id: number;
    };
    category: {
        id: number;
    }
}

function PostForm() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categories, setCategories] = useState<Category[]>([])
    const [token] = useLocalStorage('token');
    const [idUser] = useLocalStorage('id');

    const [category, setCategory] = useState<Category>(
        {
            id: 0,
            name: ''
        })
    const [post, setPost] = useState<PostDTO>({
        title: '',
        description: '',
        creator: {
            id: parseInt(idUser)
        },
        category: {
            id: 1
        }
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        setPost({
            ...post,
            category: category
        })
    }, [category])

    useEffect(() => {
        getCategory()
        if (id !== undefined) {
            findPostById(id)
        }
    }, [id])

    async function getCategory() {
        await search("/api/Category", setCategories, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findPostById(id: string) {
        await searchId(`/api/Post/id/${id}`, setPost, {
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
        console.log(post)
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
        window.location.reload();        
    }
    
    return (
        <Container maxWidth='sm' className=''>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' className='titulopostform' component='h1' align='center'>
                    Preencha sua nova postagem!
                </Typography>

                <TextField value={post.title} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id='title' label='Título' variant='outlined' name='title' margin='normal' fullWidth></TextField>

                <TextField value={post.description} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id='description' label='Descrição' name='description' variant='outlined' margin='normal' fullWidth></TextField>

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

                    <Button type='submit' variant='contained' className='btn__submitform'>
                        Finalizar
                    </Button>
                </FormControl>

            </form>
        </Container>
    )
}

export default PostForm;
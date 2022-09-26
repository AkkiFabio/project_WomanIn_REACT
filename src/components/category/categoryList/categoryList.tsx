import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import Category from '../../../models/Category';
import useLocalStorage from 'react-use-localstorage';
import { search } from '../../../services/Service';
import './categoryList.css';
import '../../../root.css';
import { toast } from 'react-toastify';


function CategoryList() {
  const [categories, setTemas] = useState<Category[]>([]);
  const [token] = useLocalStorage('token');
  const [user] = useLocalStorage('user');
  let userJson = JSON.parse(user);
  let navigate = useNavigate();

  useEffect(() => {
    if (token === '' || userJson.type !== 'ADMIN') {
      toast.error('Voce não tem autorização!', {
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
    }
  }, [token, userJson])

  async function getTema() {
    await search('api/Category', setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [categories.length])

  return (
    <>
      {
        categories.map(category => (
          <Box m={2} >
            <Card variant="outlined" className='card'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categorias
                </Typography>
                <Typography variant="h5" component="h2">
                  {category.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`formularioTema/${category.id}`} className="no__text__decorator">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${category.id}`} className="no__text__decorator">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}

export default CategoryList;
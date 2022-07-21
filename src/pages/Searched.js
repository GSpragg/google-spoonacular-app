import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'
import { RecipeCard } from '../components/recipe/RecipeCard' 


export function Searched() {
  const [ searched, setSearched ] =useState([])

  const removeRecipe= id => {
    console.log('id', id)
}

  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  
  let params = useParams();
  
  const getSearched = async (name) => {
    const data = await fetch(`${API_URL}&query=${name}`) 
    const recipes = await data.json()
    localStorage.setItem('searched', JSON.stringify(recipes.results))
    console.log(recipes.results)
    setSearched(recipes.results);
}
  useEffect(() => {
    getSearched(params.search)
  // eslint-disable-next-line 
  },[params.search])
  




  return (
    <>
      {searched?.length > 0 ? (
        <Container sx={{ py:"25px", mt:"10px", width: "100%", px: '25px'}}>
            <Grid container justify="center" spacing={3} >
             {searched.map((item) => (           
                   <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <RecipeCard recipe={item} removeRecipe={removeRecipe} />
                  </Grid>
                ))} 
            </Grid>
        </Container>
      ) : (
        <>
        <Grid container justifyContent={'center'} 
         sx={{pt: '15px'}}>
    <Grid item>
        <Typography
        sx={{px: '25%', mt: '25px'}}
        variant='h5'>
          No Results
          </Typography>      
          </Grid>
          </Grid>
        </>
      )}
     </>   
  )
}

import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeCard } from '../components/recipe/RecipeCard';


export function Cuisine() {
  
  const [cuisine, setCuisine] = useState([]);
  
  let params = useParams();

  useEffect(() => {
  
      const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`

      const getCuisine = async (name) => {
          const data = await fetch(`${API_URL}&cuisine=${name}&number=9`) 
          const recipes = await data.json()
          localStorage.setItem('categorized', JSON.stringify(recipes.results))
          setCuisine(recipes.results);
          }

      getCuisine(params.type)
      console.log(params)
  },[params, params.type])
 
  return (
    <>
        <Container sx={{ py:"25px", mt:"10px", width: "100%", px: '25px'}}>
            <Grid container justify="center" spacing={3} >
             {cuisine.map((item) => (           
                   <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <RecipeCard recipe={item}  />
                  </Grid>
                ))} 
            </Grid>
        </Container>
     </>   
  )
}


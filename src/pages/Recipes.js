import React, { useContext, useEffect } from 'react'
import { Container, Grid } from '@mui/material';
import { RecipeCard } from '../components/recipe/RecipeCard'; 
import { RecipeContext } from '../context/RecipeContext'; 
import { AddRecipeCard } from '../components/recipe/AddRecipeCard';


export function Recipes() {

    const { setRecipes } = useContext(RecipeContext)
    const { recipes } = useContext(RecipeContext)


    const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        getRecipes()

        },[])
    
    const getRecipes = async () => {
        
        const check = localStorage.getItem('recipes')
        
        if(check){
            setRecipes(JSON.parse(check))
        }else{
            const api = await fetch(`${API_URL}&number=9`)
            const data = await api.json()
            
            localStorage.setItem('recipes', JSON.stringify(data.recipes))
            console.log(data)
            setRecipes(localStorage.getItem('recipes'))  
        }
        }
        const removeRecipe = (id) => {
            
            console.log(id)
            // get recipe data 
            const data = JSON.parse(localStorage.getItem('recipes'))
            // to find index of selected recipe
            const index = data.findIndex(item => item.id === id)
            console.log(index)
            // then filter out selected recipe
            let temp = data.filter(item => item.id !== id)
            // update local storage
            localStorage.setItem('recipes', JSON.stringify(temp))
           console.log(data)
            // set recipes
           setRecipes(data)   
           }
           

    return (
    <>

        
   
        <Container sx={{ py:"25px", mt:"10px", width: "100%", px: '25px'}}>
            <Grid container justify="center" spacing={3} >
                <Grid item sx={{ mt: "60px"}} xs={12} sm={6} md={4} lg={4}>
                <AddRecipeCard />
                </Grid>
                {recipes.map((recipe) => (           
                    <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={4}>
                        <RecipeCard
                            recipe={recipe}
                            removeRecipe={removeRecipe}
                             />
                    </Grid>
                ))} 
            </Grid>
        </Container>

    </>     
    )
  }
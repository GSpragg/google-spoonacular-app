import React, { useContext, useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { StyledPaper, StyledTextField } from '../../styles/RecipeSearch.styled'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid } from '@mui/material'
import { RecipeContext } from '../../context/RecipeContext';

export function AddRecipeForm(props) {

    const { setRecipes } = useContext(RecipeContext)
    
    const [inputRecipe, setInputRecipe] = useState(props.edit ? props.edit.value : '')

    
    const RecipeNameRef = useRef(null);

    
    
    
    function handleaddRecipe(e) {
        //  user recipe 
        const image = "https://placehold.jp/400x300.png"
        const title = inputRecipe
        // get old recipes
        const oldRecipes = JSON.parse(localStorage.getItem('recipes'))
        // update recipes
        let temp = [...oldRecipes, {id: uuidv4() , title: title, image : image}]
        // update local storage
        localStorage.setItem('recipes', JSON.stringify(temp))
        // set recipes
        setRecipes(temp)
        
        RecipeNameRef.current.value = null ;
    }

  return (
<>
  <Grid container justifyContent={'center'} >
    <Grid item>
      <StyledPaper component="form" 
        onSubmit = { handleaddRecipe }>
        <StyledTextField        
          size="small"
          variant='standard'
          type="text"
          placeholder="Add Recipe..."
          aria-label='input'
          value={inputRecipe}
          onChange={(e) => setInputRecipe(e.target.value)}
          ref={RecipeNameRef}
        />
      </StyledPaper>
    </Grid>
      <Button
        onClick={ handleaddRecipe }>
          <AddCircleIcon aria-label="add"/>
          Add Recipe
      </Button>
  </Grid>
</>
  )}


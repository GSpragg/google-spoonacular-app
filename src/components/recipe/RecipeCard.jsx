
import { Box, Button, ButtonGroup, CardActions, CardContent, CardMedia, IconButton, InputAdornment, Typography } from '@mui/material'
import { useContext, useRef, useState } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import { StyledCard, StyledTextField, StyledTypography } from '../../styles/RecipeCard.styled'
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export const RecipeCard = ({ recipe: { id, image, title }, removeRecipe }) => {

  
  
  
  
  
  const { setRecipes } = useContext(RecipeContext)
  
  const [inputRecipeTitle, setInputRecipeTitle] = useState('')
  
  
  const RecipeNameRef = useRef(null);
    
  function HandleUpdate() {
    
    //  updated recipe 
    const recipeId = id
    const recipeImage = image
    const title = inputRecipeTitle
    // get old recipes
    const data = JSON.parse(localStorage.getItem('recipes'))
    // filter out one to update
    let needsUpdate = data.filter(item => item.id !== id)
    // update recipes with updated recipe
    let temp = [...needsUpdate, {id: recipeId , title: title, image : recipeImage}]
    // update local storage
    localStorage.setItem('recipes', JSON.stringify(temp))
    // set recipes
    setRecipes(temp)
    setInputRecipeTitle(null)
    RecipeNameRef.current.value = null
  } 
  
  function handleSubmit(e){
    e.prevent.default()
  }

  return (
    
    <StyledCard key={id}
    sx={{
      maxHeight: "500px",
      maxWidth: "400px",
      minHeight: "300px",
      borderRadius: "8%",
      boxShadow: 3}}>
       
      <CardMedia
      component="img"
      image={image !== "N/A" ? image : "https://placehold.jp/400x300.png" }
      alt={"https://placehold.jp/400x300.png"}/>
         
        <CardContent>  
            <CardActions  sx={{minHeight: "130px"}}>
              <Box autoComplete="off" component='form'
              onSubmit={{handleSubmit}}>
                <StyledTypography variant='h5' label='{title}' className='recipe-name'>
                 {title}
                </StyledTypography>
                <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton aria-label="search"
                      onClick={ HandleUpdate }>
                        
                      <EditRoundedIcon/>
                      </IconButton>
                    </InputAdornment>
                    ),
                  }}      
                onChange={(e)=> {setInputRecipeTitle(e.target.value)}}
                />
                <IconButton size = 'large'>
                </IconButton >
              </Box>
            </CardActions >
            <ButtonGroup sx={{px: "5%"}}>
          <Button 
          onClick={()=> {removeRecipe(id)}}>
            <Typography>
              Remove Recipe
            </Typography>
          </Button>
          <Button 
          onClick={() => {HandleUpdate(title)}}>
            <Typography>
              Edit Recipe
            </Typography>
          </Button>
          </ButtonGroup>
        </CardContent>
    </StyledCard>                          
  )
}

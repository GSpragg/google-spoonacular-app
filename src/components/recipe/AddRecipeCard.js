import React from 'react'
import { CardContent } from '@mui/material'
import { StyledCard } from '../../styles/RecipeCard.styled'
import { AddRecipeForm } from './AddRecipeForm'



export function AddRecipeCard() {

  return (
    <StyledCard
     sx={{
      maxHeight: "50px",
      maxWidth: "400px",
      minHeight: "300px",
      borderRadius: "8%",
      boxShadow: 3}}>
        <CardContent sx={{pt: "25%"}}>  
         <AddRecipeForm/>
        </CardContent>
    </StyledCard>                  
  )
}


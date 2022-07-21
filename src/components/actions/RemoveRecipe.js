import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";



export const RemoveRecipe = async(id) => {

    const { setRecipes } = useContext(RecipeContext)

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
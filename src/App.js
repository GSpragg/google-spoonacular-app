import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Category } from "./pages/Category";
import { RecipeSearch } from "./components/recipe/RecipeSearch";
import { Pages } from "./pages/Pages";
import { UserContext } from "./context/UserContext"
import {  Modal } from "@mui/material";
import { UserHandler } from "./components/utilities/UserHandler";
import { StyledBox } from "./styles/GoogleModal.styled";
import { RecipeContext } from "./context/RecipeContext";



 function App() {

  const [user, setUser] = useState([])
  const [recipes, setRecipes] = useState([])



   
   
   

      
      return (
        <>
  <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <RecipeContext.Provider value ={{recipes, setRecipes}}>       
             google login Modal
             {Object.keys(user).length === 0 &&
            <Modal
              open={true}>
              <StyledBox>
                <UserHandler/>                       
              </StyledBox>
            </Modal>
          }
        <NavBar />
        <Category/>
        <RecipeSearch/>
        <Pages/>
      </RecipeContext.Provider>
    </UserContext.Provider>
  </BrowserRouter>
    </>
  );
}

export default App;
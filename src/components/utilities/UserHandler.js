import React, {  useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext'; 
import jwt_decode from "jwt-decode"
import { StyledBox } from '../../styles/GoogleModal.styled';







export function UserHandler() {
  
const {setUser} = useContext(UserContext)
 
const clientID = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`

  
// if we have NO user: sign in button 
//  function handleSignOut(event) {
//   setUser({});
//   document.getElementById("signInBox").hidden = false
//   document.getElementById("signOutButton").hidden = true
// } 

// if we have a user: sign out button
function handleCallBackResponse(response) {
console.log("Encoded JWT ID token: " + response.credential);
let userObject = jwt_decode(response.credential)
console.log(userObject)
setUser(userObject)

document.getElementById("signInBox").hidden = true
document.getElementById("signOutButton").hidden = false

}
useEffect(() => {
/*global google*/
google.accounts.id.initialize({
  client_id: clientID,
  callback: handleCallBackResponse
});

google.accounts.id.renderButton(
  document.getElementById("signInBox"),
  {theme: "outline", size: "large"}
)
})

return (
  <>
     <StyledBox id="signInBox"/>
     

    </>
  );
}



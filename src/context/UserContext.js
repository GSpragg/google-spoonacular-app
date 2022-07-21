import { createContext } from 'react'



export const UserContext = createContext({})


// export function useUser() {
//     return useContext(UserContext)
// }

// export function useUserUpdate() {
//     return useContext(UserUpdateContext)
// }

// export function UserProvider({ children }) {
//     const [user, setUser] = useState([]);

//     
//   return (
//     <UserContext.Provider value={user}>
//         <UserUpdateContext.Provider value={UserHandler}>
//             {children}
//         </UserUpdateContext.Provider>
//     </UserContext.Provider>
    
//   )
// }

import React, { Children, createContext, useState } from 'react'
import Cookies from 'universal-cookie';




export const AuthContext = createContext()

export default function AuthProvider({children}){
      const cookies = new Cookies()
    const loggedInuser = cookies.get("user")
    // const parsedUser = !!loggedInuser ? JSON.parse(loggedInuser) :null
    const [user,setUser] = useState(loggedInuser)


  
//    console.log(user)
   
    const login = (userData,token) =>{
        const userDetails = {...userData}
        userDetails["token"] = token
         cookies.set("user", JSON.stringify(userDetails))
        //  console.log("user",cookies.get("user"))
         setUser(userDetails)
    }
    const logout = () =>{
       setUser(null)
        cookies.remove("user")
    }
    return <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
}

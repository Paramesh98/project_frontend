import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../utils/auth'

function PublicRouter({component:Component,...rest}) {
   const context = useContext(AuthContext)
    return (
        <Route
        {...rest}
        render={(props) =>{
            if(context?.user?._id){
                return <Redirect to={{pathname:"/"}} />
            }else{
                return <Component  {...props}/> 
            }
        }}
        />
    )
}

export default PublicRouter

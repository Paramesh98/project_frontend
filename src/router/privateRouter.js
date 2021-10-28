import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import MainContainer from '../components/Background'
import Heading from '../components/Heading'
import Menu from '../components/Menu'
import { AuthContext } from '../utils/auth'
import classes from './style.module.css'

function PrivateRouter({component:Component, ...rest}) {
      const context = useContext(AuthContext)
   
  
       return(
           <Route 
            {...rest}
            render={(props) =>{
                if(context?.user?._id){
                    return   <MainContainer>
                         <Heading style={{width:"100%"}} />
            <div className={classes.container}>
                 
                
                    
                    <div className={classes.menuContainer}>
                   
          <Menu />
                </div>
                  
                
                 <Component {...props} /> </div>
        </MainContainer>
                }else{
                    return <Redirect to={{pathname:"/login"}} />
                }
            }}
           />
       )
}

export default PrivateRouter

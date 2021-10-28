import React from 'react'
import classes from './style.module.css'

function MainContainer({children}) {
    return (
        <div className={classes.container}>
           {children} 
        </div>
    )
}

export default MainContainer

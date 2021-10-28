import React from 'react'
import classes from './style.module.css'

function Heading({style}) {
    return (
       <div className={classes.mainContainer}>
            <div className={classes.title}>
            <h2 className={classes.subheading}> React JS</h2>
            <h1>iJavascript</h1>
        </div>
       </div>
    )
}

export default Heading

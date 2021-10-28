import React from 'react'
import classes from './style.module.css'

function TextBox({label,name,...rest}) {
    return (
        <div className={classes.textContainer}>
            <div className={classes.label} htmlFor={name} >{label}</div>
            <input className={classes.textbox} name={name} {...rest} />
        </div>
    )
}

export default TextBox

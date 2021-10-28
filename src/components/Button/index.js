import React from 'react'
import classes from './styles.module.css'

function Button({style, children,color,onClick}) {
    return (
        <button onClick={onClick} style={style} className={`${classes.button} ${color === "blue" ?  classes.blueButton :""}`}>
            {children}
        </button>
    )
}

export default Button

import React from 'react'
import classes from './style.module.css'

function Alert({value}) {
    return (
        <div className={classes.alertContainer}>
            <p className={classes.alert}>{value}</p>
        </div>
    )
}

export default Alert

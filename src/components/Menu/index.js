import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './styles.module.css'

function Menu() {
    return (
      <div className={classes.container}>
          <NavLink exact activeClassName={classes.active} to="/" className={classes.menuItem}>Dashboard</NavLink> 
          <NavLink  activeClassName={classes.active} to="/about"  className={classes.menuItem}>About</NavLink>
          <NavLink  activeClassName={classes.active} to="/team"  className={classes.menuItem}>Team</NavLink>
      </div>
    )
}

export default Menu

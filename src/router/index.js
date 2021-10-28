import React from 'react'
import { BrowserRouter,Switch } from 'react-router-dom'
import PublicRouter from './publicRouter'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRouter from './privateRouter'
import About from '../pages/About'
import Team from '../pages/Team'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRouter path="/" exact component={Dashboard} />
                <PublicRouter exact path="/login" component={Login} />
                <PrivateRouter path="/team" component={Team} />
                <PrivateRouter path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router

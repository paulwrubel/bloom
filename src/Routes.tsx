import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Dashboard from 'pages/Dashboard'
import AppletContainer from 'pages/AppletContainer'

const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Dashboard />
                </Route>
                <Route exact path="/:appletName" >
                    <AppletContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
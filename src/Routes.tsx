import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Dashboard from 'pages/Dashboard';
import AppletContainer from 'pages/AppletContainer';
import AppletReducer from 'components/AppletReducer';

interface OwnProps {
    bloomVersion: string;
}

const Routes: React.FC<OwnProps> = ({ bloomVersion }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard bloomVersion={bloomVersion} />
                </Route>
                <Route exact path="/:appletName">
                    <AppletReducer>
                        <AppletContainer bloomVersion={bloomVersion} />
                    </AppletReducer>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

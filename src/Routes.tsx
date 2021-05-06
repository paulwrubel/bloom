import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import Dashboard from 'pages/Dashboard';
import AppletContainer from 'pages/AppletContainer';
import AppletReducer from 'components/AppletReducer';

interface OwnProps {
    bloomVersion: string;
}

const Routes: React.FC<OwnProps> = ({ bloomVersion }) => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [redirectLocation, setRedirectLocation] = useState('');

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard
                        bloomVersion={bloomVersion}
                        setShouldRedirect={setShouldRedirect}
                        setRedirectLocation={setRedirectLocation}
                    />
                </Route>
                <Route exact path="/a">
                    <Redirect to="/" />
                </Route>
                <Route exact path="/a/:appletName">
                    <AppletReducer>
                        <AppletContainer
                            bloomVersion={bloomVersion}
                            shouldRedirect={shouldRedirect}
                            setShouldRedirect={setShouldRedirect}
                            redirectLocation={redirectLocation}
                            setRedirectLocation={setRedirectLocation}
                        />
                    </AppletReducer>
                </Route>
                <Redirect from="/:appletName" to="/a/:appletName" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

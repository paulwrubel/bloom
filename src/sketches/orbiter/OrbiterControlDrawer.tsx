// import appletMap from 'AppletMap';
import { Typography } from '@material-ui/core';
import { AppletStateContext } from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
// import AppletInfo from 'interfaces/AppletInfo';
import React, { useContext /*, { useContext }*/ } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const OrbiterControlDrawer: React.FC<OwnProps> = ({ isControlDrawerOpen }) => {
    const state = useContext(AppletStateContext).orbiter;
    // const dispatch = useContext(AppletDispatchContext);

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Planet Orbital Speed: {state.planetSpeed.toFixed(2)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Moon Orbital Speed: {state.moonSpeed.toFixed(2)}
            </Typography>
        </ControlDrawer>
    );
};

export default OrbiterControlDrawer;

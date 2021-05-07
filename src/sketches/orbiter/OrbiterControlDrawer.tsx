// import appletMap from 'AppletMap';
import ControlDrawer from 'components/ControlDrawer';
// import AppletInfo from 'interfaces/AppletInfo';
import React /*, { useContext }*/ from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const OrbiterControlDrawer: React.FC<OwnProps> = ({ isControlDrawerOpen }) => {
    // const orbiterInfo: AppletInfo = appletMap.get('orbiter') as AppletInfo;

    // const state = useContext(chainballInfo.stateContext).orbiter;
    // const dispatch = useContext(chainballInfo.dispatchContext);

    return (
        <ControlDrawer
            isControlDrawerOpen={isControlDrawerOpen}
        ></ControlDrawer>
    );
};

export default OrbiterControlDrawer;

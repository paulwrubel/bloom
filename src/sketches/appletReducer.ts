import appletMap from 'AppletMap';
import AppletActionPayload from 'interfaces/AppletActionPayload';
import AppletInfo from 'interfaces/AppletInfo';
import LooseObject from 'interfaces/LooseObject';
import { chainballInitialState } from './chainball/chainballReducer';
import { orbiterInitialState } from './orbiter/orbiterReducer';

export const appletReducer: (
    state: LooseObject,
    appletActionPayload: AppletActionPayload,
) => LooseObject = (state, { applet, action, payload }) => {
    if (appletMap.has(applet)) {
        const newAppletState = (appletMap.get(applet) as AppletInfo).reducer(
            state[applet],
            {
                action,
                payload,
            },
        );
        const newState = { ...state };
        newState[applet] = newAppletState;
        return newState;
    } else {
        throw new Error('invalid applet in applet reducer: ' + applet);
    }
};

export const appletInitialState: LooseObject = {
    chainball: chainballInitialState,
    orbiter: orbiterInitialState,
};

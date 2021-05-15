import applets from 'Applets';
import AppletActionPayload from 'interfaces/AppletActionPayload';
import AppletInfo from 'interfaces/AppletInfo';
import LooseObject from 'interfaces/LooseObject';
import { chainballInitialState } from './chainball/chainballReducer';
import { interactiveHistogramInitialState } from './interactive_histogram/interactiveHistogramReducer';
import { orbiterInitialState } from './orbiter/orbiterReducer';

export const appletReducer: (
    state: LooseObject,
    appletActionPayload: AppletActionPayload,
) => LooseObject = (state, { applet, action, payload }) => {
    const appletNames = applets.map((appletInfo) => appletInfo.name);

    if (appletNames.includes(applet)) {
        const newAppletState = (applets.find(
            (appletInfo) => appletInfo.name === applet,
        ) as AppletInfo).reducer(state[applet.replaceAll('-', '_')], {
            action,
            payload,
        });
        const newState = { ...state };
        newState[applet.replaceAll('-', '_')] = newAppletState;
        return newState;
    } else {
        throw new Error('invalid applet in applet reducer: ' + applet);
    }
};

export const appletInitialState: LooseObject = {
    chainball: chainballInitialState,
    orbiter: orbiterInitialState,
    interactive_histogram: interactiveHistogramInitialState,
};
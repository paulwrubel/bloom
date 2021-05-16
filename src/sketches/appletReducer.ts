import applets from 'Applets';
import AppletActionPayloads from 'interfaces/AppletActionPayloads';
import AppletInfo from 'interfaces/AppletInfo';
import LooseObject from 'interfaces/LooseObject';
import { artGenerator5InitialState } from './art_generator_5/artGenerator5Reducer';
import { chainballInitialState } from './chainball/chainballReducer';
import { cubegridInitialState } from './cubegrid/cubegridReducer';
import { interactiveHistogramInitialState } from './interactive_histogram/interactiveHistogramReducer';
import { orbiterInitialState } from './orbiter/orbiterReducer';
import { trailsInitialState } from './trails/trailsReducer';
import { trianglesInitialState } from './triangles/trianglesReducer';

export const appletReducer: (
    state: LooseObject,
    appletActionPayloads: AppletActionPayloads,
) => LooseObject = (state, { applet, actionPayloads }) => {
    const appletNames = applets.map((appletInfo) => appletInfo.name);

    if (appletNames.includes(applet)) {
        const newAppletState = (applets.find(
            (appletInfo) => appletInfo.name === applet,
        ) as AppletInfo).reducer(
            state[applet.replaceAll('-', '_')],
            actionPayloads,
        );
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
    cubegrid: cubegridInitialState,
    art_generator_5: artGenerator5InitialState,
    trails: trailsInitialState,
    triangles: trianglesInitialState,
};

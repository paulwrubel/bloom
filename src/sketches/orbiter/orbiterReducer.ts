import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdatePlanetSpeed = 'UpdatePlanetSpeed',
    UpdateMoonSpeed = 'UpdateMoonSpeed',
}

export const orbiterReducer: (
    state: LooseObject,
    actionPayloads: ActionPayload[],
) => LooseObject = (state, actionPayloads) => {
    actionPayloads.forEach(({ action, payload }) => {
        switch (action) {
            case Action.UpdateFrameRate:
                state = {
                    ...state,
                    frameRate: payload,
                };
                break;
            case Action.UpdatePlanetSpeed:
                state = {
                    ...state,
                    planetSpeed: payload,
                };
                break;
            case Action.UpdateMoonSpeed:
                state = {
                    ...state,
                    moonSpeed: payload,
                };
                break;
        }
    });
    return state;
};

export const orbiterInitialState: LooseObject = {
    frameRate: 0.0,
    planetSpeed: 0.0,
    moonSpeed: 0.0,
};

import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdatePlanetSpeed = 'UpdatePlanetSpeed',
    UpdateMoonSpeed = 'UpdateMoonSpeed',
}

export const orbiterReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdatePlanetSpeed:
            return {
                ...state,
                planetSpeed: payload,
            };
        case Action.UpdateMoonSpeed:
            return {
                ...state,
                moonSpeed: payload,
            };
        default:
            return state;
    }
    return state;
};

export const orbiterInitialState: LooseObject = {
    frameRate: 0.0,
    planetSpeed: 0.0,
    moonSpeed: 0.0,
};

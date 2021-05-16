import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateActiveTrailCount = 'UpdateActiveTrailCount',

    SetMode = 'SetMode',

    SetClearCanvasCallback = 'SetClearCanvasCallback',
}

export const trailsReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdateActiveTrailCount:
            return {
                ...state,
                activeTrailCount: payload,
            };
        case Action.SetMode:
            return {
                ...state,
                mode: payload,
            };
        case Action.SetClearCanvasCallback:
            return {
                ...state,
                clearCanvasCallback: payload,
            };
        default:
            return state;
    }
};

export const trailsInitialState: LooseObject = {
    frameRate: 0.0,
    activeTrailCount: 0,

    mode: 'static',

    clearCanvasCallback: undefined,
};

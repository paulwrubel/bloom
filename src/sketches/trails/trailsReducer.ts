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
            case Action.UpdateActiveTrailCount:
                state = {
                    ...state,
                    activeTrailCount: payload,
                };
                break;
            case Action.SetMode:
                state = {
                    ...state,
                    mode: payload,
                };
                break;
            case Action.SetClearCanvasCallback:
                state = {
                    ...state,
                    clearCanvasCallback: payload,
                };
                break;
        }
    });
    return state;
};

export const trailsInitialState: LooseObject = {
    frameRate: 0.0,
    activeTrailCount: 0,

    mode: 'static',

    clearCanvasCallback: undefined,
};

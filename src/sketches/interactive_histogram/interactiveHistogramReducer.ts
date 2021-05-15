import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',

    SetBarHeightScalar = 'SetBarHeightScalar',
}

export const interactiveHistogramReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.SetBarHeightScalar:
            return {
                ...state,
                barHeightScalar: payload,
            };
        default:
            return state;
    }
};

export const interactiveHistogramInitialState: LooseObject = {
    frameRate: 0.0,

    barHeightScalar: 250,
};

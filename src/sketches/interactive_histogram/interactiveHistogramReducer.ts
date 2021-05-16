import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',

    SetBarHeightScalar = 'SetBarHeightScalar',
}

export const interactiveHistogramReducer: (
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
            case Action.SetBarHeightScalar:
                state = {
                    ...state,
                    barHeightScalar: payload,
                };
                break;
        }
    });
    return state;
};

export const interactiveHistogramInitialState: LooseObject = {
    frameRate: 0.0,

    barHeightScalar: 250,
};

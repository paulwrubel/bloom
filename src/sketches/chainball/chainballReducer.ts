import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    SetBallCount = 'SetBallCount',
    SetLinkLength = 'SetLinkLength',
}

export const chainballReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.SetBallCount:
            return {
                ...state,
                ballCount: payload,
            };
        case Action.SetLinkLength:
            return {
                ...state,
                linkLength: payload,
            };
        default:
            return state;
    }
};

export const chainballInitialState: LooseObject = {
    ballCount: 5,
    linkLength: 50,
};

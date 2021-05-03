import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    SetBallCount = 'SetBallCount',
}

export const reducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action) {
        case Action.SetBallCount:
            return {
                ...state,
                ballCount: payload,
            };
        default:
            return state;
    }
};

export const initialState: LooseObject = {
    ballCount: 5,
};

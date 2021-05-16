import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateCoreSpeed = 'UpdateCoreSpeed',

    SetMode = 'SetMode',
    SetBallCount = 'SetBallCount',
    SetLinkLength = 'SetLinkLength',
    SetLinkTension = 'SetLinkTension',
    SetLinkDamping = 'SetLinkDamping',
}

export const chainballReducer: (
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
            case Action.UpdateCoreSpeed:
                state = {
                    ...state,
                    coreSpeed: payload,
                };
                break;
            case Action.SetMode:
                state = {
                    ...state,
                    mode: payload,
                };
                break;
            case Action.SetBallCount:
                state = {
                    ...state,
                    ballCount: payload,
                };
                break;
            case Action.SetLinkLength:
                state = {
                    ...state,
                    linkLength: payload,
                };
                break;
            case Action.SetLinkTension:
                state = {
                    ...state,
                    linkTension: payload,
                };
                break;
            case Action.SetLinkDamping:
                state = {
                    ...state,
                    linkDamping: payload,
                };
                break;
        }
    });
    return state;
};

export const chainballInitialState: LooseObject = {
    frameRate: 0.0,
    coreSpeed: 0.0,

    mode: 'static',
    ballCount: 5,
    linkLength: 50,
    linkTension: 0.1,
    linkDamping: 0.4,
};

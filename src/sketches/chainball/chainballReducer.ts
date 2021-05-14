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
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdateCoreSpeed:
            return {
                ...state,
                coreSpeed: payload,
            };
        case Action.SetMode:
            return {
                ...state,
                mode: payload,
            };
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
        case Action.SetLinkTension:
            return {
                ...state,
                linkTension: payload,
            };
        case Action.SetLinkDamping:
            return {
                ...state,
                linkDamping: payload,
            };
        default:
            return state;
    }
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

import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateCubeCount = 'UpdateCubeCount',

    SetRowCount = 'SetRowCount',
    SetColumnCount = 'SetColumnCount',
    SetLayerCount = 'SetLayerCount',

    SetCubeDistance = 'SetCubeDistance',
    SetCubeLength = 'SetCubeLength',

    SetRotationSpeedX = 'SetRotationSpeedX',
    SetRotationSpeedY = 'SetRotationSpeedY',
    SetRotationSpeedZ = 'SetRotationSpeedZ',
}

export const cubegridReducer: (
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
            case Action.UpdateCubeCount:
                state = {
                    ...state,
                    cubeCount: payload,
                };
                break;
            case Action.SetRowCount:
                state = {
                    ...state,
                    rowCount: payload,
                };
                break;
            case Action.SetColumnCount:
                state = {
                    ...state,
                    columnCount: payload,
                };
                break;
            case Action.SetLayerCount:
                state = {
                    ...state,
                    layerCount: payload,
                };
                break;
            case Action.SetCubeDistance:
                state = {
                    ...state,
                    cubeDistance: payload,
                };
                break;
            case Action.SetCubeLength:
                state = {
                    ...state,
                    cubeLength: payload,
                };
                break;
            case Action.SetRotationSpeedX:
                state = {
                    ...state,
                    rotationSpeedX: payload,
                };
                break;
            case Action.SetRotationSpeedY:
                state = {
                    ...state,
                    rotationSpeedY: payload,
                };
                break;
            case Action.SetRotationSpeedZ:
                state = {
                    ...state,
                    rotationSpeedZ: payload,
                };
                break;
        }
    });
    return state;
};

export const cubegridInitialState: LooseObject = {
    frameRate: 0.0,
    cubeCount: 0.0,

    rowCount: 6,
    columnCount: 6,
    layerCount: 6,

    cubeDistance: 150,
    cubeLength: 50,

    rotationSpeedX: 0.5,
    rotationSpeedY: 0,
    rotationSpeedZ: 0.5,
};

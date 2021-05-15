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
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdateCubeCount:
            return {
                ...state,
                cubeCount: payload,
            };
        case Action.SetRowCount:
            return {
                ...state,
                rowCount: payload,
            };
        case Action.SetColumnCount:
            return {
                ...state,
                columnCount: payload,
            };
        case Action.SetLayerCount:
            return {
                ...state,
                layerCount: payload,
            };
        case Action.SetCubeDistance:
            return {
                ...state,
                cubeDistance: payload,
            };
        case Action.SetCubeLength:
            return {
                ...state,
                cubeLength: payload,
            };
        case Action.SetRotationSpeedX:
            return {
                ...state,
                rotationSpeedX: payload,
            };
        case Action.SetRotationSpeedY:
            return {
                ...state,
                rotationSpeedY: payload,
            };
        case Action.SetRotationSpeedZ:
            return {
                ...state,
                rotationSpeedZ: payload,
            };
        default:
            return state;
    }
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

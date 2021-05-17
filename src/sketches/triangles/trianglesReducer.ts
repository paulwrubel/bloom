import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateTriangleCount = 'UpdateTriangleCount',
    UpdateBulletCount = 'UpdateBulletCount',
    UpdateTriangleUpdateTime = 'UpdateTriangleUpdateTime',
    UpdateBulletUpdateTime = 'UpdateBulletUpdateTime',
    UpdateTriangleDrawTime = 'UpdateTriangleDrawTime',
    UpdateBulletDrawTime = 'UpdateBulletDrawTime',

    SetGenerationMode = 'SetGenerationMode',
    SetGravityMode = 'SetGravityMode',
    SetPlacementMode = 'SetPlacementMode',
    SetAimMode = 'SetAimMode',
    SetIsBorderEnabled = 'SetIsBorderEnabled',
    SetIsAutoFireEnabled = 'SetIsAutoFireEnabled',

    SetClearTrianglesCallback = 'SetClearTrianglesCallback',
    SetClearBulletsCallback = 'SetClearBulletsCallback',
    SetClearGravityPointsCallback = 'SetClearGravityPointsCallback',
}

export const trianglesReducer: (
    state: LooseObject,
    actionPayloads: ActionPayload[],
) => LooseObject = (state, actionPayloads) => {
    actionPayloads.forEach(({ action, payload }) => {
        switch (action) {
            case Action.UpdateFrameRate:
                state.frameRate = payload;
                break;
            case Action.UpdateTriangleCount:
                state.triangleCount = payload;
                break;
            case Action.UpdateBulletCount:
                state.bulletCount = payload;
                break;
            case Action.UpdateTriangleUpdateTime:
                state.triangleUpdateTime = payload;
                break;
            case Action.UpdateBulletUpdateTime:
                state.bulletUpdateTime = payload;
                break;
            case Action.UpdateTriangleDrawTime:
                state.triangleDrawTime = payload;
                break;
            case Action.UpdateBulletDrawTime:
                state.bulletDrawTime = payload;
                break;
            case Action.SetGenerationMode:
                state.generationMode = payload;
                break;
            case Action.SetGravityMode:
                state.gravityMode = payload;
                break;
            case Action.SetPlacementMode:
                state.placementMode = payload;
                break;
            case Action.SetAimMode:
                state.aimMode = payload;
                break;
            case Action.SetIsBorderEnabled:
                state.isBorderEnabled = payload;
                break;
            case Action.SetIsAutoFireEnabled:
                state.isAutoFireEnabled = payload;
                break;
            case Action.SetClearTrianglesCallback:
                state.clearTrianglesCallback = payload;
                break;
            case Action.SetClearBulletsCallback:
                state.clearBulletsCallback = payload;
                break;
            case Action.SetClearGravityPointsCallback:
                state.clearGravityPointsCallback = payload;
                break;
        }
    });
    return state;
};

export const trianglesInitialState: LooseObject = {
    frameRate: 0.0,
    triangleCount: 0,
    bulletCount: 0,
    triangleUpdateTime: 0,
    bulletUpdateTime: 0,
    triangleDrawTime: 0,
    bulletDrawTime: 0,

    generationMode: 'discrete',
    gravityMode: 'off',
    placementMode: 'triangle',
    aimMode: 'mouse',
    isBorderEnabled: false,
    isAutoFireEnabled: false,

    clearTrianglesCallback: undefined,
    clearBulletsCallback: undefined,
    clearGravityPointsCallback: undefined,
};

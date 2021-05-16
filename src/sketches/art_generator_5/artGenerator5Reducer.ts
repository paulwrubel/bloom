import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateImageWidth = 'UpdateImageWidth',
    UpdateImageHeight = 'UpdateImageHeight',
    UpdateFringePixelCount = 'UpdateFringePixelCount',
    UpdateVisitedPixelCount = 'UpdateVisitedPixelCount',
    UpdateNorthChance = 'UpdateNorthChance',
    UpdateIsGenerating = 'UpdateIsGenerating',
}

export const artGenerator5Reducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdateImageWidth:
            return {
                ...state,
                imageWidth: payload,
            };
        case Action.UpdateImageHeight:
            return {
                ...state,
                imageHeight: payload,
            };
        case Action.UpdateFringePixelCount:
            return {
                ...state,
                fringePixelCount: payload,
            };
        case Action.UpdateVisitedPixelCount:
            return {
                ...state,
                visitedPixelCount: payload,
            };
        case Action.UpdateNorthChance:
            return {
                ...state,
                northChance: payload,
            };
        case Action.UpdateIsGenerating:
            return {
                ...state,
                isGenerating: payload,
            };
        default:
            return state;
    }
};

export const artGenerator5InitialState: LooseObject = {
    frameRate: 0.0,
    imageWidth: 0,
    imageHeight: 0,
    fringePixelCount: 0,
    visitedPixelCount: 0,
    northChance: 0.0,
    isGenerating: false,
};

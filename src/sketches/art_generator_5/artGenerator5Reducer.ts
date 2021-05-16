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
            case Action.UpdateImageWidth:
                state = {
                    ...state,
                    imageWidth: payload,
                };
                break;
            case Action.UpdateImageHeight:
                state = {
                    ...state,
                    imageHeight: payload,
                };
                break;
            case Action.UpdateFringePixelCount:
                state = {
                    ...state,
                    fringePixelCount: payload,
                };
                break;
            case Action.UpdateVisitedPixelCount:
                state = {
                    ...state,
                    visitedPixelCount: payload,
                };
                break;
            case Action.UpdateNorthChance:
                state = {
                    ...state,
                    northChance: payload,
                };
                break;
            case Action.UpdateIsGenerating:
                state = {
                    ...state,
                    isGenerating: payload,
                };
                break;
        }
    });
    return state;
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

import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateSomeOtherInformation = 'UpdateSomeOtherInformation',

    SetSketchProperty = 'SetSketchProperty',
}

export const templateReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, { action, payload }) => {
    switch (action) {
        case Action.UpdateFrameRate:
            return {
                ...state,
                frameRate: payload,
            };
        case Action.UpdateSomeOtherInformation:
            return {
                ...state,
                someOtherInformation: payload,
            };
        case Action.SetSketchProperty:
            return {
                ...state,
                sketchProperty: payload,
            };
        default:
            return state;
    }
};

export const templateInitialState: LooseObject = {
    frameRate: 0.0,
    someOtherInformation: '',

    sketchProperty: 12345,
};

import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

enum Action {
    UpdateFrameRate = 'UpdateFrameRate',
    UpdateSomeOtherInformation = 'UpdateSomeOtherInformation',

    SetSketchProperty = 'SetSketchProperty',
}

export const templateReducer: (
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
            case Action.UpdateSomeOtherInformation:
                state = {
                    ...state,
                    someOtherInformation: payload,
                };
                break;
            case Action.SetSketchProperty:
                state = {
                    ...state,
                    sketchProperty: payload,
                };
                break;
        }
    });
    return state;
};

export const templateInitialState: LooseObject = {
    frameRate: 0.0,
    someOtherInformation: '',

    sketchProperty: 12345,
};

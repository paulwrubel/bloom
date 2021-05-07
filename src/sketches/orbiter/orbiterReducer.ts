import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';

export const orbiterReducer: (
    state: LooseObject,
    actionPayload: ActionPayload,
) => LooseObject = (state, {}) => {
    return state;
};

export const orbiterInitialState: LooseObject = {};

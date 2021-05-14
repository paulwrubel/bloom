import appletMap from 'AppletMap';
import AppletActionPayload from 'interfaces/AppletActionPayload';
import LooseObject from 'interfaces/LooseObject';
import React, { createContext, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { appletInitialState, appletReducer } from 'sketches/appletReducer';

interface AppletParams {
    appletName: string;
}

interface OwnProps {
    children: React.ReactNode;
}

export const AppletStateContext = createContext<LooseObject>(
    appletInitialState,
);
export const AppletDispatchContext = createContext<
    React.Dispatch<AppletActionPayload>
>(() => {});

const AppletReducer: React.FC<OwnProps> = ({ children }) => {
    const { appletName } = useParams<AppletParams>();
    const appletInfo = appletMap.get(appletName);

    const [state, dispatch] = useReducer(appletReducer, appletInitialState);

    // const [state, dispatch] = useReducer(
    //     appletInfo
    //         ? appletInfo.reducer
    //         : (state: LooseObject): LooseObject => {
    //               return state;
    //           },
    //     appletInfo ? appletInfo.initialState : {},
    // );

    return (
        <>
            {appletInfo ? (
                <AppletStateContext.Provider value={state}>
                    <AppletDispatchContext.Provider value={dispatch}>
                        {children}
                    </AppletDispatchContext.Provider>
                </AppletStateContext.Provider>
            ) : (
                children
            )}
        </>
    );
};

export default AppletReducer;

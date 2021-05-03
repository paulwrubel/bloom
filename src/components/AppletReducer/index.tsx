import appletMap from 'AppletMap';
import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';
import React, { createContext, useReducer } from 'react';
import { useParams } from 'react-router-dom';

interface AppletParams {
    appletName: string;
}

interface OwnProps {
    children: React.ReactNode;
}

const AppletReducer: React.FC<OwnProps> = ({ children }) => {
    const { appletName } = useParams<AppletParams>();
    const appletInfo = appletMap.get(appletName);

    const [state, dispatch] = useReducer(
        appletInfo
            ? appletInfo.reducer
            : (state: LooseObject): LooseObject => {
                  return state;
              },
        appletInfo ? appletInfo.initialState : {},
    );

    if (appletInfo) {
        if (!appletInfo.dispatchContext) {
            appletInfo.dispatchContext = createContext<
                React.Dispatch<ActionPayload>
            >(() => {});
        }
        if (!appletInfo.stateContext) {
            appletInfo.stateContext = createContext<LooseObject>(
                appletInfo.initialState,
            );
        }
    }

    return (
        <>
            {appletInfo ? (
                <appletInfo.dispatchContext.Provider value={dispatch}>
                    <appletInfo.stateContext.Provider value={state}>
                        {children}
                    </appletInfo.stateContext.Provider>
                </appletInfo.dispatchContext.Provider>
            ) : (
                children
            )}
        </>
    );
};

export default AppletReducer;

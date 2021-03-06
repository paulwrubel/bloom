import applets from 'Applets';
import AppletActionPayloads from 'interfaces/AppletActionPayloads';
import AppletInfo from 'interfaces/AppletInfo';
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
    React.Dispatch<AppletActionPayloads>
>(() => {});

const AppletReducer: React.FC<OwnProps> = ({ children }) => {
    const { appletName } = useParams<AppletParams>();
    const appletInfo = applets.find(
        (appletInfo) => appletInfo.name === appletName,
    ) as AppletInfo;

    const [state, dispatch] = useReducer(appletReducer, appletInitialState);

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

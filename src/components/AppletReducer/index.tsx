import appletMap from 'AppletMap'
import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'

interface AppletParams {
    appletName: string
}

interface OwnProps {
    children: any
}

const AppletReducer: React.FC<OwnProps> = ({
    children
}) => {

    const { appletName } = useParams<AppletParams>()
    const appletInfo = appletMap.get(appletName)

    const [state, dispatch] = useReducer(
        appletInfo ? appletInfo.reducer : (state: any): any => { },
        appletInfo ? appletInfo.initialState : {})

    return (
        <>
            {appletInfo ? (
                <appletInfo.dispatchContext.Provider value={dispatch} >
                    <appletInfo.stateContext.Provider value={state}>
                        {children}
                    </appletInfo.stateContext.Provider>
                </appletInfo.dispatchContext.Provider >
            ) : (
                    { children }
                )}
        </>
    )

}

export default AppletReducer;
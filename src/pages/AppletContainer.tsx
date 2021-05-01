import React from 'react'
import { useParams } from 'react-router-dom';
import appletMap from 'AppletMap'

interface AppletContainerParams {
    appletName: string
}

const AppletContainer = () => {
    const { appletName } = useParams<AppletContainerParams>()

    const isValidApplet: boolean = appletMap.has(appletName)

    return (
        <>
            {isValidApplet ? (
                <>
                    <p>This is the Applet Container! Welcome to the {appletName} Applet!</p>
                </>
            ) : (
                    <>
                        <p>This is the Applet Container! Unfortunately, {appletName} is not a valid Applet. :(</p>
                    </>
                )}
        </>
    );
}

export default AppletContainer;
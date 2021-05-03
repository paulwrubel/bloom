import { useParams } from 'react-router-dom';
import appletMap from 'AppletMap';
import MenuBar from 'components/MenuBar';
import P5Container from 'components/P5Container';
import React, { useContext } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { DefaultStateContext, DefaultDispatchContext } from 'DefaultContexts';

interface AppletParams {
    appletName: string;
}

interface OwnProps {
    bloomVersion: string;
}

const AppletContainer: React.FC<OwnProps> = ({ bloomVersion }) => {
    const { appletName } = useParams<AppletParams>();
    const appletInfo = appletMap.get(appletName);

    const state = useContext(
        appletInfo ? appletInfo.stateContext : DefaultStateContext,
    );
    const dispatch = useContext(
        appletInfo ? appletInfo.dispatchContext : DefaultDispatchContext,
    );

    return (
        <>
            <MenuBar appletInfo={appletInfo} bloomVersion={bloomVersion} />
            {appletInfo ? (
                <>
                    <div>
                        <Slider
                            defaultValue={state.ballCount}
                            value={state.ballCount}
                            onChange={(_, newValue: number | number[]) =>
                                dispatch({
                                    action: 'SetBallCount',
                                    payload: newValue,
                                })
                            }
                            min={5}
                            max={500}
                            step={5}
                            aria-labelledby="ball-count-slider"
                            valueLabelDisplay="on"
                        />
                        <Typography id="ball-count-slider" gutterBottom>
                            Ball Count
                        </Typography>
                    </div>
                    <P5Container
                        sketchInstance={appletInfo.sketchInstance}
                        stateContext={appletInfo.stateContext}
                        dispatchContext={appletInfo.dispatchContext}
                    />
                </>
            ) : (
                <p>
                    Oh no! {appletName} doesn&apos;t seem to be a valid Applet.
                    :(
                </p>
            )}
        </>
    );
};

export default AppletContainer;

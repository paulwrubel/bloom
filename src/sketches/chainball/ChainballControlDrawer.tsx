import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
import RadioButtonsPanel from 'components/panels/RadioButtonsPanel';
import SliderPanel from 'components/panels/SliderPanel';
import React, { useContext } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const ChainballControlDrawer: React.FC<OwnProps> = ({
    isControlDrawerOpen,
}) => {
    const state = useContext(AppletStateContext).chainball;
    const dispatch = useContext(AppletDispatchContext);

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <RadioButtonsPanel
                name="mode"
                label="Mode"
                value={state.mode}
                onChange={(_, newValue: string) => {
                    dispatch({
                        applet: 'chainball',
                        action: 'SetMode',
                        payload: newValue,
                    });
                }}
                buttons={[
                    {
                        isDefault: true,
                        value: 'static',
                        label: 'Static',
                    },
                    {
                        value: 'dynamic',
                        label: 'Dynamic',
                    },
                ]}
            />
            <SliderPanel
                defaultValue={state.ballCount}
                value={state.ballCount}
                onChange={(_, newValue: number | number[]) =>
                    dispatch({
                        applet: 'chainball',
                        action: 'SetBallCount',
                        payload: newValue,
                    })
                }
                min={5}
                max={500}
                step={5}
                labelledByID="ball-count-slider"
                displayText="Ball Count"
            />
            <SliderPanel
                defaultValue={state.linkLength}
                value={state.linkLength}
                onChange={(_, newValue: number | number[]) =>
                    dispatch({
                        applet: 'chainball',
                        action: 'SetLinkLength',
                        payload: newValue,
                    })
                }
                min={0}
                max={800}
                step={10}
                labelledByID="link-length-slider"
                displayText="Link Length"
            />
            {state.mode === 'dynamic' && (
                <SliderPanel
                    defaultValue={state.linkTension}
                    value={state.linkTension}
                    onChange={(_, newValue: number | number[]) =>
                        dispatch({
                            applet: 'chainball',
                            action: 'SetLinkTension',
                            payload: newValue,
                        })
                    }
                    min={0.0}
                    max={1.0}
                    step={0.02}
                    labelledByID="link-tension-slider"
                    valueLabelFormat={(value) => `${(value * 100).toFixed(0)}%`}
                    displayText="Link Tension"
                />
            )}
            {state.mode === 'dynamic' && (
                <SliderPanel
                    defaultValue={state.linkDamping}
                    value={state.linkDamping}
                    onChange={(_, newValue: number | number[]) =>
                        dispatch({
                            applet: 'chainball',
                            action: 'SetLinkDamping',
                            payload: newValue,
                        })
                    }
                    min={0.0}
                    max={1.0}
                    step={0.02}
                    labelledByID="link-damping-slider"
                    valueLabelFormat={(value) => `${(value * 100).toFixed(0)}%`}
                    displayText="Link Damping"
                />
            )}
        </ControlDrawer>
    );
};

export default ChainballControlDrawer;

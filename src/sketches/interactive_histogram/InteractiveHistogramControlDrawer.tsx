import { Divider, Typography } from '@material-ui/core';
import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
import SliderPanel from 'components/panels/SliderPanel';
import ActionPayload from 'interfaces/ActionPayload';
import React, { useContext } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const InteractiveHistogramControlDrawer: React.FC<OwnProps> = ({
    isControlDrawerOpen,
}) => {
    const state = useContext(AppletStateContext).interactive_histogram;
    const dispatch = useContext(AppletDispatchContext);

    const pseudoDispatch = (actionPayloads: ActionPayload[]) =>
        dispatch({
            applet: 'interactive-histogram',
            actionPayloads: actionPayloads,
        });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>

            <Divider variant="middle" />

            <SliderPanel
                defaultValue={state.barHeightScalar}
                value={state.barHeightScalar}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch([
                        {
                            action: 'SetBarHeightScalar',
                            payload: newValue,
                        },
                    ])
                }
                min={50}
                max={500}
                step={5}
                labelledByID="bar-height-scalar-slider"
                displayText="Bar Height Scalar"
            />
        </ControlDrawer>
    );
};

export default InteractiveHistogramControlDrawer;

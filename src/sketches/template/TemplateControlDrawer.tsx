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

const TemplateControlDrawer: React.FC<OwnProps> = ({ isControlDrawerOpen }) => {
    const state = useContext(AppletStateContext).template;
    const dispatch = useContext(AppletDispatchContext);

    const pseudoDispatch = (actionPayloads: ActionPayload[]) =>
        dispatch({
            applet: 'template',
            actionPayloads: actionPayloads,
        });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Some Other Information: {state.someOtherInformation}
            </Typography>

            <Divider variant="middle" />

            <SliderPanel
                defaultValue={state.sketchProperty}
                value={state.sketchProperty}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch([
                        {
                            action: 'SetSketchProperty',
                            payload: newValue,
                        },
                    ])
                }
                min={1}
                max={100000}
                step={5}
                labelledByID="sketch-property-slider"
                displayText="Sketch Property"
            />
        </ControlDrawer>
    );
};

export default TemplateControlDrawer;

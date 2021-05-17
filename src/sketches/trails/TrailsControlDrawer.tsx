import { Divider, Typography } from '@material-ui/core';
import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
import ButtonPanel from 'components/panels/ButtonPanel';
import RadioButtonsPanel from 'components/panels/RadioButtonsPanel';
import ActionPayload from 'interfaces/ActionPayload';
import React, { useContext } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const TrailsControlDrawer: React.FC<OwnProps> = ({ isControlDrawerOpen }) => {
    const state = useContext(AppletStateContext).trails;
    const dispatch = useContext(AppletDispatchContext);

    const pseudoDispatch = (actionPayloads: ActionPayload[]) =>
        dispatch({
            applet: 'trails',
            actionPayloads: actionPayloads,
        });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Active Trail Count: {state.activeTrailCount}
            </Typography>

            <Divider variant="middle" />

            <RadioButtonsPanel
                name="mode"
                label="Mode"
                value={state.mode}
                onChange={(_, newValue: string) =>
                    pseudoDispatch([
                        {
                            action: 'SetMode',
                            payload: newValue,
                        },
                    ])
                }
                buttons={[
                    { value: 'static', label: 'Static' },
                    { value: 'dynamic', label: 'Dynamic' },
                ]}
            />
            <ButtonPanel
                buttons={[
                    {
                        name: 'clear_canvas',
                        label: 'Clear Canvas',
                        onClick: state.clearCanvasCallback,
                    },
                ]}
            />
        </ControlDrawer>
    );
};

export default TrailsControlDrawer;

import { Divider, Typography } from '@material-ui/core';
import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
import ButtonPanel from 'components/panels/ButtonPanel';
import RadioButtonsPanel from 'components/panels/RadioButtonsPanel';
import SwitchPanel from 'components/panels/SwitchPanel';
import ActionPayload from 'interfaces/ActionPayload';
import React, { useContext } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const TrianglesControlDrawer: React.FC<OwnProps> = ({
    isControlDrawerOpen,
}) => {
    const state = useContext(AppletStateContext).triangles;
    const dispatch = useContext(AppletDispatchContext);

    const pseudoDispatch = (actionPayloads: ActionPayload[]) =>
        dispatch({
            applet: 'triangles',
            actionPayloads: actionPayloads,
        });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Triangle Count: {state.triangleCount}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Bullet Count: {state.bulletCount}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Triangle Update Time: {state.triangleUpdateTime.toFixed(2)}ms
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Bullet Update Time: {state.bulletUpdateTime.toFixed(2)}ms
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Triangle Draw Time: {state.triangleDrawTime.toFixed(2)}ms
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Bullet Draw Time: {state.bulletDrawTime.toFixed(2)}ms
            </Typography>

            <Divider variant="middle" />

            <RadioButtonsPanel
                name="placement_mode"
                label="Placement"
                value={state.placementMode}
                onChange={(_, newValue) =>
                    pseudoDispatch([
                        { action: 'SetPlacementMode', payload: newValue },
                    ])
                }
                buttons={[
                    {
                        value: 'triangle',
                        label: 'Triangle',
                    },
                    {
                        value: 'fixed_point',
                        label: 'Aim Point',
                    },
                    {
                        value: 'gravity_points',
                        label: 'Gravity Points',
                    },
                ]}
            />
            <RadioButtonsPanel
                name="generation_mode"
                label="Generation"
                value={state.generationMode}
                onChange={(_, newValue) =>
                    pseudoDispatch([
                        { action: 'SetGenerationMode', payload: newValue },
                    ])
                }
                buttons={[
                    {
                        value: 'discrete',
                        label: 'Discrete',
                    },
                    {
                        value: 'continuous',
                        label: 'Continuous',
                    },
                ]}
            />
            <RadioButtonsPanel
                name="aim_mode"
                label="Aim Point"
                value={state.aimMode}
                onChange={(_, newValue) =>
                    pseudoDispatch([
                        { action: 'SetAimMode', payload: newValue },
                    ])
                }
                buttons={[
                    {
                        value: 'mouse',
                        label: 'Mouse',
                    },
                    {
                        value: 'fixed',
                        label: 'Fixed',
                    },
                ]}
            />
            <RadioButtonsPanel
                name="gravity_mode"
                label="Gravity"
                value={state.gravityMode}
                onChange={(_, newValue) =>
                    pseudoDispatch([
                        { action: 'SetGravityMode', payload: newValue },
                    ])
                }
                buttons={[
                    {
                        value: 'off',
                        label: 'Off',
                    },
                    {
                        value: 'simple',
                        label: 'Simple',
                    },
                    {
                        value: 'true',
                        label: 'True',
                    },
                    {
                        value: 'point',
                        label: 'Point',
                    },
                    {
                        value: 'multi_point',
                        label: 'Multi-Point',
                    },
                ]}
            />
            <SwitchPanel
                switches={[
                    {
                        name: 'border',
                        label: 'Border',
                        isChecked: state.isBorderEnabled,
                        onChange: (_, newValue) =>
                            pseudoDispatch([
                                {
                                    action: 'SetIsBorderEnabled',
                                    payload: newValue,
                                },
                            ]),
                    },
                    state.generationMode === 'continuous'
                        ? {
                              name: 'auto_fire',
                              label: 'Auto Fire',
                              isChecked: state.isAutoFireEnabled,
                              onChange: (_, newValue) =>
                                  pseudoDispatch([
                                      {
                                          action: 'SetIsAutoFireEnabled',
                                          payload: newValue,
                                      },
                                  ]),
                          }
                        : undefined,
                ]}
            />
            <ButtonPanel
                buttons={[
                    {
                        name: 'clear_triangles',
                        label: 'Clear Triangles',
                        onClick: state.clearTrianglesCallback,
                    },
                    {
                        name: 'clear_bullets',
                        label: 'Clear Bullets',
                        onClick: state.clearBulletsCallback,
                    },
                    {
                        name: 'clear_gravity_points',
                        label: 'Clear Gravity Points',
                        onClick: state.clearGravityPointsCallback,
                    },
                ]}
            />
        </ControlDrawer>
    );
};

export default TrianglesControlDrawer;

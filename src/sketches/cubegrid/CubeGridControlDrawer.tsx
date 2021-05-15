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

const CubeGridControlDrawer: React.FC<OwnProps> = ({ isControlDrawerOpen }) => {
    const state = useContext(AppletStateContext).cubegrid;
    const dispatch = useContext(AppletDispatchContext);

    const pseudoDispatch = (actionPayload: ActionPayload) =>
        dispatch({
            applet: 'cubegrid',
            ...actionPayload,
        });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Cube Count: {state.cubeCount}
            </Typography>

            <Divider variant="middle" />

            <SliderPanel
                defaultValue={state.rowCount}
                value={state.rowCount}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetRowCount',
                        payload: newValue,
                    })
                }
                min={1}
                max={100}
                step={1}
                labelledByID="row-count-slider"
                displayText="Row Count"
            />
            <SliderPanel
                defaultValue={state.columnCount}
                value={state.columnCount}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetColumnCount',
                        payload: newValue,
                    })
                }
                min={1}
                max={100}
                step={1}
                labelledByID="column-count-slider"
                displayText="Column Count"
            />
            <SliderPanel
                defaultValue={state.layerCount}
                value={state.layerCount}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetLayerCount',
                        payload: newValue,
                    })
                }
                min={1}
                max={100}
                step={1}
                labelledByID="layer-count-slider"
                displayText="Layer Count"
            />

            <SliderPanel
                defaultValue={state.cubeDistance}
                value={state.cubeDistance}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetCubeDistance',
                        payload: newValue,
                    })
                }
                min={50}
                max={200}
                step={5}
                labelledByID="cube-distance-slider"
                displayText="Cube Distance"
            />

            <SliderPanel
                defaultValue={state.cubeLength}
                value={state.cubeLength}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetCubeLength',
                        payload: newValue,
                    })
                }
                min={10}
                max={100}
                step={5}
                labelledByID="cube-length-slider"
                displayText="Cube Length"
            />

            <SliderPanel
                defaultValue={state.rotationSpeedX}
                value={state.rotationSpeedX}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetRotationSpeedX',
                        payload: newValue,
                    })
                }
                min={0}
                max={5}
                step={0.25}
                labelledByID="rotation-speed-x-slider"
                displayText="Rotation Speed X"
            />

            <SliderPanel
                defaultValue={state.rotationSpeedY}
                value={state.rotationSpeedY}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetRotationSpeedY',
                        payload: newValue,
                    })
                }
                min={0}
                max={5}
                step={0.25}
                labelledByID="rotation-speed-y-slider"
                displayText="Rotation Speed Y"
            />

            <SliderPanel
                defaultValue={state.rotationSpeedZ}
                value={state.rotationSpeedZ}
                onChange={(_, newValue: number | number[]) =>
                    pseudoDispatch({
                        action: 'SetRotationSpeedZ',
                        payload: newValue,
                    })
                }
                min={0}
                max={5}
                step={0.25}
                labelledByID="rotation-speed-z-slider"
                displayText="Rotation Speed Z"
            />
        </ControlDrawer>
    );
};

export default CubeGridControlDrawer;

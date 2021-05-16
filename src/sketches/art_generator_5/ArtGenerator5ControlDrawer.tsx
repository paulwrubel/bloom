import { Typography } from '@material-ui/core';
import { AppletStateContext } from 'components/AppletReducer';
import ControlDrawer from 'components/ControlDrawer';
import React, { useContext } from 'react';

interface OwnProps extends Record<string, unknown> {
    isControlDrawerOpen: boolean;
}

const ArtGenerator5ControlDrawer: React.FC<OwnProps> = ({
    isControlDrawerOpen,
}) => {
    const state = useContext(AppletStateContext).art_generator_5;
    // const dispatch = useContext(AppletDispatchContext);

    // const pseudoDispatch = (actionPayload: ActionPayload) =>
    //     dispatch({
    //         applet: 'template',
    //         ...actionPayload,
    //     });

    return (
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
            <Typography color="textSecondary" variant="body1">
                FPS: {state.frameRate.toFixed(0)}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Image Size: {state.imageWidth} x {state.imageHeight}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Pixel Count: {state.imageWidth * state.imageHeight}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Fringe Pixels: {state.fringePixelCount}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Visited Pixels: {state.visitedPixelCount}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                North Chance: {`${(state.northChance * 100).toFixed(2)}%`}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                {`Percentage Filled: ${(
                    (state.visitedPixelCount /
                        (state.imageWidth * state.imageHeight)) *
                    100
                ).toFixed(2)}%`}
            </Typography>
            <Typography color="textSecondary" variant="body1">
                Is Generating: {state.isGenerating ? 'Yes' : 'No'}
            </Typography>
        </ControlDrawer>
    );
};

export default ArtGenerator5ControlDrawer;

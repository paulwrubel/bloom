import { Grid } from '@material-ui/core';
import appletMap from 'AppletMap';
import {
    GridContainerWrapper,
    GridItemWrapper,
    StyledControlDrawer,
} from 'components/control_drawer/styles';
import SliderPanel from 'components/control_drawer/panels/SliderPanel';
import AppletInfo from 'interfaces/AppletInfo';
import React, { useContext } from 'react';

interface OwnProps {
    isControlDrawerOpen: boolean;
}

const ChainballControlDrawer: React.FC<OwnProps> = ({
    isControlDrawerOpen,
}) => {
    const chainballInfo: AppletInfo = appletMap.get('chainball') as AppletInfo;

    const state = useContext(chainballInfo.stateContext);
    const dispatch = useContext(chainballInfo.dispatchContext);

    return (
        <StyledControlDrawer
            variant="persistent"
            open={isControlDrawerOpen}
            anchor="right"
        >
            <GridContainerWrapper>
                <Grid
                    // className="SidebarGrid"
                    container
                    // spacing={2}
                    direction="column"
                    // wrap="nowrap"
                >
                    <GridItemWrapper>
                        <Grid item xs>
                            <SliderPanel
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
                                labelledByID="ball-count-slider"
                                displayText="Ball Count"
                            />
                        </Grid>
                    </GridItemWrapper>
                    <GridItemWrapper>
                        <Grid item xs>
                            <SliderPanel
                                defaultValue={state.linkLength}
                                value={state.linkLength}
                                onChange={(_, newValue: number | number[]) =>
                                    dispatch({
                                        action: 'SetLinkLength',
                                        payload: newValue,
                                    })
                                }
                                min={0}
                                max={800}
                                step={10}
                                labelledByID="link-length-slider"
                                valueLabelDisplay="on"
                                displayText="Link Length"
                            />
                        </Grid>
                    </GridItemWrapper>
                </Grid>
            </GridContainerWrapper>
        </StyledControlDrawer>
    );
};

export default ChainballControlDrawer;

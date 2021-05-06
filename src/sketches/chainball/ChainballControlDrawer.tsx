import appletMap from 'AppletMap';
import ControlDrawer from 'components/ControlDrawer';
import SliderPanel from 'components/panels/SliderPanel';
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
        <ControlDrawer isControlDrawerOpen={isControlDrawerOpen}>
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
                displayText="Link Length"
            />
        </ControlDrawer>
    );
};

export default ChainballControlDrawer;

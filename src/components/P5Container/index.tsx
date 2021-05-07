import LooseObject from 'interfaces/LooseObject';
import p5 from 'p5';
import React, { useContext, useEffect, useRef } from 'react';
import { P5ContainerWrapper } from './styles';
import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import AppletActionPayload from 'interfaces/AppletActionPayload';
import AppletInfo from 'interfaces/AppletInfo';

interface p5WithUpdatingStateAndDispatch extends p5 {
    dispatch?: React.Dispatch<AppletActionPayload>;
    updateState(state: LooseObject): void;
}

function instanceOfP5WithUpdatingState(
    p: p5 | p5WithUpdatingStateAndDispatch,
): p is p5WithUpdatingStateAndDispatch {
    return 'updateState' in p;
}

interface OwnProps {
    sketchInstance: (p: p5 | p5WithUpdatingStateAndDispatch) => void;
    appletInfo: AppletInfo;
}

let sketchCanvas: p5 | null = null;

const P5Container: React.FC<OwnProps> = ({ sketchInstance, appletInfo }) => {
    const state = useContext(AppletStateContext);
    const dispatch = useContext(AppletDispatchContext);

    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            sketchCanvas !== null &&
            instanceOfP5WithUpdatingState(sketchCanvas)
        ) {
            sketchCanvas.dispatch = dispatch;
            sketchCanvas.updateState(state[appletInfo.name]);
        }
    }, [state, dispatch]);

    useEffect(() => {
        if (sketchCanvas === null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sketchCanvas = new p5(sketchInstance, sketchRef.current);
        }
        if (instanceOfP5WithUpdatingState(sketchCanvas)) {
            sketchCanvas.dispatch = dispatch;
            sketchCanvas.updateState(state[appletInfo.name]);
        }
        return () => {
            sketchCanvas?.remove();
            sketchCanvas = null;
        };
    }, [sketchInstance]);

    return (
        <P5ContainerWrapper className="P5Container">
            <div ref={sketchRef} />
        </P5ContainerWrapper>
    );
};

export default P5Container;

import LooseObject from 'interfaces/LooseObject';
import p5 from 'p5';
import React, { useContext, useEffect, useRef } from 'react';
import { P5ContainerWrapper } from './styles';
import {
    AppletDispatchContext,
    AppletStateContext,
} from 'components/AppletReducer';
import AppletInfo from 'interfaces/AppletInfo';
import ActionPayload from 'interfaces/ActionPayload';

export const P5ContainerClassName = 'P5Container';

interface p5WithUpdateState extends p5 {
    updateState(state: LooseObject): void;
}

function instanceOfP5WithUpdateState(
    p: p5 | p5WithUpdateState | p5WithDispatch,
): p is p5WithUpdateState {
    return 'updateState' in p;
}

interface p5WithDispatch extends p5 {
    dispatch?: React.Dispatch<ActionPayload[]>;
}

function instanceOfP5WithDispatch(
    p: p5 | p5WithUpdateState | p5WithDispatch,
): p is p5WithDispatch {
    return true;
}

interface OwnProps {
    sketchInstance: (p: p5 | p5WithUpdateState | p5WithDispatch) => void;
    appletInfo: AppletInfo;
}

let sketchCanvas: p5 | null = null;

const P5Container: React.FC<OwnProps> = ({ sketchInstance, appletInfo }) => {
    const state = useContext(AppletStateContext);
    const dispatch = useContext(AppletDispatchContext);

    const sketchRef = useRef<HTMLDivElement>(null);

    const pseudoDispatch = (actionPayloads: ActionPayload[]) => {
        dispatch({
            applet: appletInfo.name,
            actionPayloads: actionPayloads,
        });
    };

    useEffect(() => {
        if (sketchCanvas !== null) {
            if (instanceOfP5WithDispatch(sketchCanvas)) {
                sketchCanvas.dispatch = pseudoDispatch;
            }
            if (instanceOfP5WithUpdateState(sketchCanvas)) {
                sketchCanvas.updateState(
                    state[appletInfo.name.replaceAll('-', '_')],
                );
            }
        }
    }, [state, dispatch]);

    useEffect(() => {
        if (sketchCanvas === null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sketchCanvas = new p5(sketchInstance, sketchRef.current);
        }
        if (instanceOfP5WithDispatch(sketchCanvas)) {
            sketchCanvas.dispatch = pseudoDispatch;
        }
        if (instanceOfP5WithUpdateState(sketchCanvas)) {
            sketchCanvas.updateState(
                state[appletInfo.name.replaceAll('-', '_')],
            );
        }
        return () => {
            sketchCanvas?.remove();
            sketchCanvas = null;
        };
    }, [sketchInstance]);

    return (
        <P5ContainerWrapper className={P5ContainerClassName}>
            <div ref={sketchRef} />
        </P5ContainerWrapper>
    );
};

export default P5Container;

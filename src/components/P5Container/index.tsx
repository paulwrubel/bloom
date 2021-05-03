import LooseObject from 'interfaces/LooseObject';
import p5 from 'p5';
import React, { useContext, useEffect, useRef } from 'react';
import ActionPayload from 'interfaces/ActionPayload';
import { P5ContainerWrapper } from './styles';

const CLASS_NAME = 'P5Container';

interface p5WithUpdatingStateAndDispatch extends p5 {
    dispatch?: React.Dispatch<ActionPayload>;
    updateState(state: LooseObject): void;
}

function instanceOfP5WithUpdatingState(
    p: p5 | p5WithUpdatingStateAndDispatch,
): p is p5WithUpdatingStateAndDispatch {
    return 'updateState' in p;
}
interface OwnProps {
    sketchInstance: (p: p5 | p5WithUpdatingStateAndDispatch) => void;
    stateContext: React.Context<LooseObject>;
    dispatchContext: React.Context<React.Dispatch<ActionPayload>>;
}

let sketchCanvas: p5 | null = null;

const P5Container: React.FC<OwnProps> = ({
    sketchInstance,
    stateContext,
    dispatchContext,
}) => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);

    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sketchCanvas === null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sketchCanvas = new p5(sketchInstance, sketchRef.current);
        }

        if (instanceOfP5WithUpdatingState(sketchCanvas)) {
            sketchCanvas.dispatch = dispatch;
            sketchCanvas.updateState(state);
        }

        // return () => {
        //     sketchCanvas?.remove()
        // }
    }, [sketchInstance, dispatch, state]);

    return (
        <P5ContainerWrapper className={CLASS_NAME}>
            <div ref={sketchRef} />
        </P5ContainerWrapper>
    );
};

export default P5Container;

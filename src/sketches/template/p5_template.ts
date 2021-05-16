/* eslint-disable @typescript-eslint/no-unused-vars */
import { P5ContainerClassName } from 'components/P5Container';
import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from 'interfaces/LooseObject';
import p5 from 'p5';
import React from 'react';

interface P5ElementWithWidthAndHeight extends p5.Element {
    width: number;
    height: number;
}

interface P5RendererWithCanvas extends p5.Renderer {
    canvas: HTMLCanvasElement;
}

interface P5WithUpdateStateAndDispatch extends p5 {
    updateState?(state: LooseObject): void;
    dispatch: React.Dispatch<ActionPayload[]>;
}

const template: (p: P5WithUpdateStateAndDispatch) => void = (p) => {
    // Required for all sketches
    const updateFrequency = 10;
    const frameRates: number[] = [];
    let displayFrameRate = 0;
    let didSetup = false;

    p.setup = () => {
        const [w, h] = getCanvasWidthAndHeight();
        const r = p.createCanvas(w, h, p.P2D) as P5RendererWithCanvas;
        disableRightClick(r.canvas);

        p.frameRate(120);
        p.colorMode(p.HSB, 360, 100, 100, 100);

        didSetup = true;
    };

    p.draw = () => {
        checkResize();

        // START SKETCH

        // END SKETCH

        calculateFrameRate();
        batchDispatch();
    };

    const calculateFrameRate = () => {
        if (p.frameCount % updateFrequency === 0) {
            frameRates.push(p.frameRate());
            if (frameRates.length > 10) {
                frameRates.shift();
            }
            displayFrameRate =
                frameRates.reduce((sum, num) => {
                    return sum + num;
                }) / frameRates.length;
        }
    };

    const isMouseOverCanvas = () => {
        if (
            p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height
        ) {
            return true;
        }
        return false;
    };

    const disableRightClick = (canvas: HTMLCanvasElement) => {
        canvas.oncontextmenu = (event) => {
            event.preventDefault();
            return false;
        };
    };

    p.windowResized = () => {
        checkResize();
    };

    const getCanvasWidthAndHeight = (): number[] => {
        const w = (p.select(
            '.' + P5ContainerClassName,
        ) as P5ElementWithWidthAndHeight).width;
        const h = (p.select(
            '.' + P5ContainerClassName,
        ) as P5ElementWithWidthAndHeight).height;

        return [w, h];
    };

    const resize = (w: number, h: number) => {
        p.resizeCanvas(w, h);
    };

    const checkResize = () => {
        const [w, h] = getCanvasWidthAndHeight();
        if (w !== p.width || h !== p.height) {
            resize(w, h);
        }
    };

    const batchDispatch = () => {
        if (p.frameCount % updateFrequency === 0) {
            p.dispatch([
                {
                    action: 'UpdateFrameRate',
                    payload: displayFrameRate,
                },
            ]);
        }
    };

    p.updateState = ({ sketchProperty: newSketchProperty }) => {
        if (didSetup) {
            // if (sketchProperty !== newSketchProperty) {
            //     sketchProperty = newSketchProperty;
            // }
        }
    };
};

export default template;

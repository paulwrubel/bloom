import { once } from 'utils';
import { P5ContainerClassName } from 'components/P5Container';
import Trail from "./p5_trail"

let trails = (p) => {

    let frameRates = [];
    let displayFrameRate;

    let frameRateCallback;
    let activeTrailCountCallback;
    let setClearScreenCallback;

    let updateFrequency = 10;
    let didSetup = false;

    const Modes = {
        STATIC: "static",
        DYNAMIC: "dynamic"
    };

    let currentMode = Modes.STATIC;

    // holds all trails.
    let trails = [];

    const setClearCanvasCallbackOnce = once(
        () => p.dispatch({
            action: 'SetClearCanvasCallback',
            payload: p.clearScreen,
        })
    );

    p.setup = function () {
        let w = p.select('.' + P5ContainerClassName).width;
        let h = p.select('.' + P5ContainerClassName).height;
        p.createCanvas(w, h);

        p.colorMode(p.HSB, 360, 100, 100);
        p.background(0);
        p.frameRate(60);

        didSetup = true;
    };

    p.draw = function () {
        p.checkResize();

        for (let i = trails.length - 1; i >= 0; i--) {
            trails[i].draw();
            trails[i].update();
            if (trails[i].isComplete) {
                trails.splice(i, 1);
            }
        }

        p.calculateFrameRate();
        p.batchDispatch();
    };

    p.angle = function (v1, v2) {
        let a = -p.atan2(v2.y, v2.x) + p.atan2(v1.y, v1.x);
        if (a < 0)
            a += p.TWO_PI;
        return p.degrees(a);
    }

    p.mouseDragged = function () {
        if (p.mouseButton === p.LEFT && p.isMouseOverCanvas()) {
            if (currentMode === Modes.DYNAMIC) {
                let mouseMovement = p.createVector(p.movedX, -p.movedY);
                let angle = p.angle(p.createVector(0, 10), mouseMovement);
                let mag = mouseMovement.mag();
                trails.push(new Trail(p, p.mouseX, p.mouseY, p.random(angle - 10, angle + 10), mag));
            } else {
                trails.push(new Trail(p, p.mouseX, p.mouseY));
            }
        }
    };

    p.mousePressed = function () {
        if (p.mouseButton === p.LEFT) {
            p.mouseDragged();
        }
    };

    p.calculateFrameRate = function () {
        if (p.frameCount % updateFrequency === 0) {
            frameRates.push(p.frameRate());
            if (frameRates.length > 10) {
                frameRates.shift();
            }
            displayFrameRate = frameRates.reduce((sum, num) => {
                return sum + num;
            }) / frameRates.length;
        }
    }

    p.batchDispatch = function () {
        if (p.frameCount % updateFrequency === 0) {
            p.dispatch({
                action: 'UpdateFrameRate',
                payload: displayFrameRate,
            });
            p.dispatch({
                action: 'UpdateActiveTrailCount',
                payload: trails.length,
            });
        }
    };

    p.clearScreen = function () {
        p.background(0);
    };

    p.isMouseOverCanvas = function () {
        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {
            return true;
        }
        return false;
    };

    p.windowResized = function () {
        p.resize();
    };

    p.resize = function () {
        let w = p.select('.' + P5ContainerClassName).width;// - p.select(".Sidebar").width;
        let h = p.select('.' + P5ContainerClassName).height;
        p.resizeCanvas(w, h);

        p.background(0);
    };

    p.checkResize = function () {
        let w = p.select('.' + P5ContainerClassName).width;// - p.select(".Sidebar").width;
        let h = p.select('.' + P5ContainerClassName).height;
        if (w !== p.width || h !== p.height) {
            p.resize();
        }
    };

    p.updateState = ({ mode }) => {
        if (didSetup) {
            if (currentMode !== mode) {
                currentMode = mode;
            }
        }
        setClearCanvasCallbackOnce();
    };

};

export default trails;
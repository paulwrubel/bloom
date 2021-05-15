import { P5ContainerClassName } from 'components/P5Container';

let cubegrid = (p) => {

    let frameRates = [];
    let displayFrameRate;

    let frameRateCallback;
    let cubeCountCallback;

    let updateFrequency = 10;

    let deltaMouseFactor = 0.01;
    let deltaRotationFactor = 0.025;
    let scrollingFactor = 15;

    // Number of Rows
    let rowCount = 6;
    // Number of Columns
    let columnCount = 6;
    // Number of Layers
    let layerCount = 6;

    // Initial Camera distance
    let cameraDistance = -1600;
    // Change in camera distance
    let deltaCameraDistance = -0;
    // Length of the side of a cube
    let cubeLength = 50;
    // Distance between the cubes
    let cubeDistance = 150;
    // Change in distance between cubes
    let deltaCubeDistance = 0;

    // Used to save rotations for mouse rotations.
    // Best to not change.
    let rotationStateX = 0;
    let rotationStateY = 0;

    // Saves x-angle for rotations, can be used to angle cube
    // perspective initially
    let rotationAngleX = 0;
    // Change in x rotation.
    let deltaRotationAngleX = 0.5;

    // Same as above for y-angle
    let rotationAngleY = 0;
    let deltaRotationAngleY = 0;

    // Same as above for z-angle
    let rotationAngleZ = 0;
    let deltaRotationAngleZ = 0.5;

    // Hold all cubes colors.
    let cubeColors = [];

    let didSetup = false;

    let isBeingRotated = false;

    p.setup = function () {

        let w = p.select('.' + P5ContainerClassName).width;
        let h = p.select('.' + P5ContainerClassName).height;
        p.createCanvas(w, h, p.WEBGL);

        let eyeZ = ((p.height / 2.0) / p.tan(p.PI * 60.0 / 360.0));
        p.perspective(p.PI / 3.0, p.width / p.height, eyeZ / 10.0, eyeZ * 250.0);

        // p.ortho(
        // 	5 * -p.width / 2,
        // 	5 * p.width / 2,
        // 	5 * p.height / 2,
        // 	5 * -p.height / 2,
        // 	0,
        // 	10000,
        // 	);

        p.frameRate(120);
        p.smooth(8);
        p.colorMode(p.HSB, 360, 100, 100);
        p.setupColors();

        didSetup = true;
    };

    p.draw = function () {
        p.checkResize();
        p.background(0);

        // Moves origin to centre of
        // window and back the specified
        // distance
        if (p.frameCount % 100 === 0) {
            // console.log("HALF W: " + p.width / 2);
            // console.log("W: " + p.width);
            // console.log("MOUSEX: " + p.mouseX);
        }
        p.translate(0, 0, cameraDistance);

        cameraDistance += deltaCameraDistance;
        cubeDistance += deltaCubeDistance;

        // rotate if applicable
        if (isBeingRotated) {
            rotationStateX += p.movedX * p.deltaTime * deltaMouseFactor;
            rotationStateY -= p.movedY * p.deltaTime * deltaMouseFactor;
        }

        // checkKeys();
        p.rotateX(p.radians(rotationStateY));
        p.rotateY(p.radians(rotationStateX));

        rotationAngleX += deltaRotationAngleX * p.deltaTime * deltaRotationFactor;
        rotationAngleY += deltaRotationAngleY * p.deltaTime * deltaRotationFactor;
        rotationAngleZ += deltaRotationAngleZ * p.deltaTime * deltaRotationFactor;

        rotationAngleX %= 360;
        rotationAngleY %= 360;
        rotationAngleZ %= 360;
        p.rotateX(p.radians(rotationAngleX));
        p.rotateY(p.radians(rotationAngleY));
        p.rotateZ(p.radians(rotationAngleZ));

        p.translate(-(((rowCount - 1) / 2) * (cubeLength + cubeDistance)), 0, 0);
        p.translate(0, -(((columnCount - 1) / 2) * (cubeLength + cubeDistance)), 0);
        p.translate(0, 0, -(((layerCount - 1) / 2) * (cubeLength + cubeDistance)));
        for (let z = 0; z < layerCount; z++) {
            for (let y = 0; y < columnCount; y++) {
                for (let x = 0; x < rowCount; x++) {
                    p.fill(cubeColors[x][y][z][0], cubeColors[x][y][z][1], cubeColors[x][y][z][2]);
                    p.box(cubeLength); // Draws a Cube to the surface
                    p.translate(cubeLength + cubeDistance, 0, 0); // Moves matrix to the
                    // right for next box
                }
                p.translate(-(rowCount * (cubeLength + cubeDistance)), 0, 0); // Moves matrix
                // back to start
                // of row
                p.translate(0, cubeLength + cubeDistance, 0); // Moves matrix down to next
                // row
            }
            p.translate(0, -(columnCount * (cubeLength + cubeDistance)), 0); // Moves matrix back
            // to start of
            // column
            p.translate(0, 0, cubeLength + cubeDistance); // Moves matrix down to next layer
        }

        p.calculateFrameRate();

        p.updateCallbacks();

    };

    p.setupColors = function () {
        cubeColors = [];

        for (let i = 0; i < rowCount; i++) {
            cubeColors[i] = [];
            for (let j = 0; j < columnCount; j++) {
                cubeColors[i][j] = []
                for (let k = 0; k < layerCount; k++) {
                    cubeColors[i][j][k] = [];
                    cubeColors[i][j][k][0] = p.map(p.random(), 0, 1, 0, 360);
                    cubeColors[i][j][k][1] = p.map(p.random(), 0, 1, 30, 100);
                    cubeColors[i][j][k][2] = p.map(p.random(), 0, 1, 50, 100);
                }
            }
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

    p.updateCallbacks = function () {
        if (p.frameCount % updateFrequency === 0) {
            p.dispatch({
                action: "UpdateFrameRate",
                payload: displayFrameRate,
            })
        }
    };

    p.isMouseOverCanvas = function () {
        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {
            return true;
        }
        return false;
    };

    p.mousePressed = function () {
        if (p.isMouseOverCanvas()) {
            isBeingRotated = true;
        }
    };

    p.mouseReleased = function () {
        isBeingRotated = false;
    };

    p.mouseWheel = function (event) {
        if (p.isMouseOverCanvas()) {
            cameraDistance -= event.delta * scrollingFactor;
        }
    };

    p.windowResized = function () {
        p.resize();
    };

    p.resize = function () {
        let w = p.select('.' + P5ContainerClassName).width;// - p.select(".Sidebar").width;
        let h = p.select('.' + P5ContainerClassName).height;
        p.resizeCanvas(w, h);
    };

    p.checkResize = function () {
        let w = p.select('.' + P5ContainerClassName).width;// - p.select(".Sidebar").width;
        let h = p.select('.' + P5ContainerClassName).height;
        if (w !== p.width || h !== p.height) {
            p.resize();
        }
    };

    p.updateState = ({
        rowCount: newRowCount, columnCount: newColumnCount, layerCount: newLayerCount,
        cubeDistance: newCubeDistance, cubeLength: newCubeLength,
        rotationSpeedX, rotationSpeedY, rotationSpeedZ
    }) => {
        if (didSetup) {
            if (rowCount !== newRowCount) {
                rowCount = newRowCount;
                p.setupColors();
                p.dispatch({
                    action: 'UpdateCubeCount',
                    payload: rowCount * columnCount * layerCount,
                })
            }
            if (columnCount !== newColumnCount) {
                columnCount = newColumnCount;
                p.setupColors();
                p.dispatch({
                    action: 'UpdateCubeCount',
                    payload: rowCount * columnCount * layerCount,
                })
            }
            if (layerCount !== newLayerCount) {
                layerCount = newLayerCount;
                p.setupColors();
                p.dispatch({
                    action: 'UpdateCubeCount',
                    payload: rowCount * columnCount * layerCount,
                })
            }
            if (cubeDistance !== newCubeDistance) {
                cubeDistance = newCubeDistance;
            }
            if (cubeLength !== newCubeLength) {
                cubeLength = newCubeLength;
            }
            if (deltaRotationAngleX !== rotationSpeedX) {
                deltaRotationAngleX = rotationSpeedX;
            }
            if (deltaRotationAngleY !== rotationSpeedY) {
                deltaRotationAngleY = rotationSpeedY;
            }

            if (deltaRotationAngleZ !== rotationSpeedZ) {
                deltaRotationAngleZ = rotationSpeedZ;
            }
        }
    };

};

export default cubegrid;
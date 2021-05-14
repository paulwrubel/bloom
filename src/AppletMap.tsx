/* eslint-disable sonarjs/no-duplicate-string */
import AppletInfo from 'interfaces/AppletInfo';

import ChainballControlDrawer from 'sketches/chainball/ChainballControlDrawer';
import p5_chainball from 'sketches/chainball/p5_chainball';
import {
    chainballInitialState,
    chainballReducer,
} from 'sketches/chainball/chainballReducer';

import OrbiterControlDrawer from 'sketches/orbiter/OrbiterControlDrawer';
import p5_orbiter from 'sketches/orbiter/p5_orbiter';
import {
    orbiterInitialState,
    orbiterReducer,
} from 'sketches/orbiter/orbiterReducer';

const appletMap: Map<string, AppletInfo> = new Map([
    [
        'chainball',
        {
            name: 'chainball',
            displayName: 'Chainball',
            version: 'v1.0',
            description: '2D kinematic demonstration',
            tags: ['physics', 'simulation'],
            creationDate: new Date('February 9, 2020 00:00:00'),
            // cardImagePath: 'sketches/chainball/cardImage.jpg',

            sketchInstance: p5_chainball,
            controlDrawerComponent: ChainballControlDrawer as React.FC<
                Record<string, unknown>
            >,

            initialState: chainballInitialState,
            reducer: chainballReducer,
        },
    ],
    [
        'orbiter',
        {
            name: 'orbiter',
            displayName: 'Orbiter',
            version: 'v0.2',
            description: 'Orbiter simulation',
            tags: ['simple', 'simulation'],
            creationDate: new Date('March 8, 2020 00:00:00'),
            // cardImagePath: 'sketches/chainball/cardImage.jpg',

            sketchInstance: p5_orbiter,
            controlDrawerComponent: OrbiterControlDrawer as React.FC<
                Record<string, unknown>
            >,

            initialState: orbiterInitialState,
            reducer: orbiterReducer,
        },
    ],
    // [
    //     'interactivehistogram',
    //     {
    //         name: 'interactivehistogram',
    //         displayName: 'Interactive Histogram',
    //         version: 'v1.0',
    //         description: 'An Interactive Histogram',
    //         creationDate: new Date('January 1, 2016 00:00:00'),
    //     },
    // ],
    // [
    //     'cubegrid',
    //     {
    //         name: 'cubegrid',
    //         displayName: 'CubeGrid',
    //         version: 'v0.9',
    //         description: '3D customizable grid of cubes',
    //         creationDate: new Date('January 1, 2016 00:00:00'),
    //     },
    // ],
    // [
    //     'trails',
    //     {
    //         name: 'trails',
    //         displayName: 'Trails',
    //         version: 'v0.7',
    //         description: 'Trail art creator',
    //         creationDate: new Date('January 1, 2016 00:00:00'),
    //     },
    // ],
    // [
    //     'triangles',
    //     {
    //         name: 'triangles',
    //         displayName: 'Triangles',
    //         version: 'v0.8.2',
    //         description: 'Triangles',
    //         creationDate: new Date('November 5, 2017 00:00:00'),
    //     },
    // ],
    // [
    //     'artgenerator5',
    //     {
    //         name: 'artgenerator5',
    //         displayName: 'Art Generator 5',
    //         version: 'v0.3',
    //         description: 'Procedural art generator, pixel by pixel',
    //         creationDate: new Date('March 17, 2020 00:00:00'),
    //     },
    // ],
    // [
    //     'lasers',
    //     {
    //         name: 'lasers',
    //         displayName: 'Lasers',
    //         version: 'v0.0.1',
    //         description: 'Laser simulator hello',
    //         creationDate: new Date('April 27, 2021 16:11:00'),
    //     },
    // ],
]);

export default appletMap;

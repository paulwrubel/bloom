/* eslint-disable sonarjs/no-duplicate-string */
import AppletInfo from 'interfaces/AppletInfo';

import p5_chainball from 'sketches/chainball/p5_chainball';
import ChainballControlDrawer from 'sketches/chainball/ChainballControlDrawer';
import chainballCardImage from 'sketches/chainball/chainballCardImage.jpg';
import {
    chainballInitialState,
    chainballReducer,
} from 'sketches/chainball/chainballReducer';

import p5_orbiter from 'sketches/orbiter/p5_orbiter';
import OrbiterControlDrawer from 'sketches/orbiter/OrbiterControlDrawer';
import orbiterCardImage from 'sketches/orbiter/orbiterCardImage.jpg';
import {
    orbiterInitialState,
    orbiterReducer,
} from 'sketches/orbiter/orbiterReducer';

import p5_interactivehistogram from 'sketches/interactive_histogram/p5_interactivehistogram';
import InteractiveHistogramControlDrawer from 'sketches/interactive_histogram/InteractiveHistogramControlDrawer';
import interactiveHistogramCardImage from 'sketches/interactive_histogram/interactiveHistogramCardImage.jpg';
import {
    interactiveHistogramInitialState,
    interactiveHistogramReducer,
} from 'sketches/interactive_histogram/interactiveHistogramReducer';

import p5_cubegrid from 'sketches/cubegrid/p5_cubegrid';
import CubeGridControlDrawer from 'sketches/cubegrid/CubeGridControlDrawer';
import cubegridCardImage from 'sketches/cubegrid/cubegridCardImage.jpg';
import {
    cubegridInitialState,
    cubegridReducer,
} from 'sketches/cubegrid/cubegridReducer';

import p5_artgenerator5 from 'sketches/art_generator_5/p5_artgenerator5';
import ArtGenerator5ControlDrawer from 'sketches/art_generator_5/ArtGenerator5ControlDrawer';
import artGenerator5CardImage from 'sketches/art_generator_5/artGenerator5CardImage.jpg';
import {
    artGenerator5InitialState,
    artGenerator5Reducer,
} from 'sketches/art_generator_5/artGenerator5Reducer';

import p5_trails from 'sketches/trails/p5_trails';
import TrailsControlDrawer from 'sketches/trails/TrailsControlDrawer';
import trailsCardImage from 'sketches/trails/trailsCardImage.jpg';
import {
    trailsInitialState,
    trailsReducer,
} from 'sketches/trails/trailsReducer';

import p5_triangles from 'sketches/triangles/p5_triangles';
import TrianglesControlDrawer from 'sketches/triangles/TrianglesControlDrawer';
import trianglesCardImage from 'sketches/triangles/trianglesCardImage.jpg';
import {
    trianglesInitialState,
    trianglesReducer,
} from 'sketches/triangles/trianglesReducer';

const applets: AppletInfo[] = [
    {
        name: 'chainball',
        displayName: 'Chainball',
        version: 'v1.0',
        tagline: `A two-dimensional physics and momentum simulation.`,
        description: `Simplistic and satisfying, this sketch is one of the more fleshed-out ones. 
            Being highly customizable, this one is one of my consistent favourites that I always go back to for fun.`,
        tags: ['physics', 'simulation', 'interactive'],
        creationDate: new Date('February 9, 2020 00:00:00'),
        cardImage: chainballCardImage,

        sketchInstance: p5_chainball,
        controlDrawerComponent: ChainballControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: chainballInitialState,
        reducer: chainballReducer,
    },
    {
        name: 'orbiter',
        displayName: 'Orbiter',
        version: 'v0.2',
        tagline: `An overly-simplistic orbital visual.`,
        description: `With no interactivity besides the star's location, this sketch remains no more than 
            a proof-of-concept for angular positioning via mathematics.`,
        tags: ['simple', 'simulation'],
        creationDate: new Date('March 8, 2020 00:00:00'),
        cardImage: orbiterCardImage,

        sketchInstance: p5_orbiter,
        controlDrawerComponent: OrbiterControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: orbiterInitialState,
        reducer: orbiterReducer,
    },
    {
        name: 'interactive-histogram',
        displayName: 'Interactive Histogram',
        version: 'v1.0',
        tagline: `An interactive rainbow "histogram".`,
        description: `The histogram's values are arbitrary and this sketch, being one of the first
            I've ever created, was a simple test of reactions to mouse location and actions.`,
        tags: ['simple', 'art', 'interactive'],
        creationDate: new Date('January 1, 2016 00:00:00'),
        cardImage: interactiveHistogramCardImage,

        sketchInstance: p5_interactivehistogram,
        controlDrawerComponent: InteractiveHistogramControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: interactiveHistogramInitialState,
        reducer: interactiveHistogramReducer,
    },
    {
        name: 'cubegrid',
        displayName: 'CubeGrid',
        version: 'v0.9',
        tagline: `3D grid of cubes.`,
        description: `This sketch is a experiment with p5js's WEBGL rendering mode. This is very interactive,
            responding to superfluous controls and mouse movements, but is prone to extremely poor performance, especially as
            cube counts rise.`,
        tags: ['3D', 'spacial', 'interactive', 'webgl'],
        creationDate: new Date('January 1, 2016 00:00:00'),
        cardImage: cubegridCardImage,

        sketchInstance: p5_cubegrid,
        controlDrawerComponent: CubeGridControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: cubegridInitialState,
        reducer: cubegridReducer,
    },
    {
        name: 'trails',
        displayName: 'Trails',
        version: 'v0.7',
        tagline: 'Artistic rainbow trail creator.',
        description: `A simple artistic and interactive sketch which produces rainbow trails of 
            overlapping circles, which are controlled by the mouse.`,
        tags: ['art', 'interactive'],
        creationDate: new Date('January 1, 2016 00:00:00'),
        cardImage: trailsCardImage,

        sketchInstance: p5_trails,
        controlDrawerComponent: TrailsControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: trailsInitialState,
        reducer: trailsReducer,
    },
    {
        name: 'triangles',
        displayName: 'Triangles',
        version: 'v0.8.2',
        tagline: 'A gravity-fueled Triangle bullet-hell,',
        description: `This sketch is easily one of the most in-depth. You can place Triangles, shoot Bullets, 
            move the Triangles with the arrow keys, change several modes that affect how Triangles are placed, 
            where Bullets are shot, and how gravity affects those Bullets. It's a highly interactive, game-like plaything.`,
        tags: ['interactive', 'simulation', 'gravity', 'complex'],
        creationDate: new Date('November 5, 2017 00:00:00'),
        cardImage: trianglesCardImage,

        sketchInstance: p5_triangles,
        controlDrawerComponent: TrianglesControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: trianglesInitialState,
        reducer: trianglesReducer,
    },
    {
        name: 'art-generator-5',
        displayName: 'Art Generator 5',
        version: 'v0.3',
        tagline: `Procedural art generator.`,
        description: `Pixel by pixel, this generator is the latest iteration in many differed version I've created.
            Clicking starts a seed, from which pixel colours are generated based on their neighbors. Once all pixels have
            been given colours, the art work is complete and can be saved.`,
        tags: ['art'],
        creationDate: new Date('March 17, 2020 00:00:00'),
        cardImage: artGenerator5CardImage,

        sketchInstance: p5_artgenerator5,
        controlDrawerComponent: ArtGenerator5ControlDrawer as React.FC<
            Record<string, unknown>
        >,

        initialState: artGenerator5InitialState,
        reducer: artGenerator5Reducer,
    },
    //     {
    //         name: 'lasers',
    //         displayName: 'Lasers',
    //         version: 'v0.0.1',
    //         description: 'Laser simulator hello',
    //         creationDate: new Date('April 27, 2021 16:11:00'),
    //     },
];

export default applets;

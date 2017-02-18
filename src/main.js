import * as PIXI from 'pixi.js';

const root = document.getElementById('root');
const renderer = PIXI.autoDetectRenderer(640, 480, {antialias: false});
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

root.appendChild(renderer.view);

const stage = new PIXI.Container();
stage.scale.x = stage.scale.y = 3;

const assets = require('../assets/assets.js');
for (let key in assets) {
    if (assets.hasOwnProperty(key)) {
        PIXI.loader.add(key, assets[key]);
    }
}

PIXI.loader.once('complete', () => {
    console.log('done loading');

    const test = new PIXI.Sprite(PIXI.loader.resources.test.texture);
    test.x = 64;
    test.y = 32;

    stage.addChild(test);
    
    renderer.render(stage);
});

PIXI.loader.load();

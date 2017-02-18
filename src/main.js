import * as PIXI from 'pixi.js';

const root = document.getElementById('root');
const renderer = PIXI.autoDetectRenderer(640, 480);

root.appendChild(renderer.view);

const stage = new PIXI.Container();

const assets = require('../assets/assets.js');
for (let key in assets) {
    if (assets.hasOwnProperty(key)) {
        PIXI.loader.add(assets[key]);
    }
}

PIXI.loader.once('complete', () => {
    console.log('done loading');
    renderer.render(stage);
});

PIXI.loader.load();

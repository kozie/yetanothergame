import * as PIXI from 'pixi.js';
import { assets } from './Assets';
import Scene from './Scene';
import Config from './Config';

class Game {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { antialias: false });
        this.stage = new PIXI.Container();

        // Set empty placeholder
        this.fps = 0;
        this.lastDelta = 0;
        this._scene = false;
    }

    init(callback) {
        if (typeof callback != 'function') {
            callback = () => {};
        }

        // Add rendering to the actual view
        const root = document.getElementById('root');
        root.appendChild(this.renderer.view);

        // Keep track of the window size
        window.addEventListener('resize', this._onResize.bind(this));

        // Set correct scaling settings
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        this.stage.scale.x = this.stage.scale.y = 3;

        // Load assets and start afterwards
        const assetsConfig = new Config(require('../assets/assets.js'));

        assets.init(assetsConfig, () => {
            callback.call(this);
        });
    }

    run() {
        this.loop(0);
    }

    loop(dt) {
        // Set next animation first
        window.requestAnimationFrame((d) => {
            this.loop(d);
        });

        // Set delta inforamtion
        const delta = dt - this.lastDelta;
        this.lastDelta = dt;

        // Run updates
        this.scene.update(delta);

        // Now draw
        this.stage.removeChildren();
        this.scene.draw();
        this.draw();
    }

    get scene() {
        return this._scene;
    }

    set scene(scene) {
        // Set scene stage first
        scene.stage = this.stage;

        this._scene = scene;
    }

    draw() {
        this.renderer.render(this.stage);
    }

    _onResize(event) {
        this.renderer.width = window.innerWidth;
        this.renderer.height = window.innerHeight;
    }
}

export const game = new Game();

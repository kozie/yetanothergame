import * as PIXI from 'pixi.js';

export default class Entity {
    constructor(x, y) {
        // Set local properties
        this.location = (x instanceof PIXI.Point) ? x : new PIXI.Point(x, y);
        
        // Set empty placeholders
        this.parent = null;

        this.init();
    }

    init() {
        // ..
    }

    update(delta) {
        // ..
    }

    draw(stage) {
        // ..
    }

    onScene() {
        // ..
    }
}

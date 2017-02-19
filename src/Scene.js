import * as PIXI from 'pixi.js';

export default class Scene {
    constructor() {
        // Set empty placeholder
        this.entities = [];
        this.stage = null;

        // Initialize now
        this.init();
    }

    init() {
        // ...
    }

    addEntity(entity) {
        // Set parent
        entity.parent = this;

        // Add entity
        this.entities.push(entity);
    }

    update(delta) {
        this.entities.forEach((e) => {
            e.update(delta);
        })
    }

    draw() {
        this.entities.forEach((e) => {
            e.draw(this.stage);
        });
    }
}
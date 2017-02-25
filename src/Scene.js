import * as PIXI from 'pixi.js';

export default class Scene {
    constructor() {
        // Set empty placeholder
        this.entities = [];
        this.stage = null;
    }

    init() {
        // ...
    }

    addEntity(entity) {
        // Set parent
        entity.parent = this;

        // Add entity
        this.entities.push(entity);

        // Run the onScene event
        entity.onScene(this);
    }

    update(delta) {
        this.entities.forEach((e) => {
            e.update(delta);
        })
    }

    draw() {
        this.entities.forEach((e) => {
            e.draw();
        });
    }
}

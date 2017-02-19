import Entity from '../Entity';
import { assets } from '../Assets';

export default class TestEntity extends Entity {
    constructor(x, y) {
        super(x, y);

        this.sprite = new PIXI.Sprite(assets.getAsset('test').texture);
        this.vx = 1;
        this.vy = 1;
    }

    update(delta) {
        this.location.x += this.vx;
        this.location.y += this.vy;
    }

    draw(stage) {
        this.sprite.x = this.location.x;
        this.sprite.y = this.location.y;

        stage.addChild(this.sprite);
    }
}
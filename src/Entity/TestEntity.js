import Entity from '../Entity';
import { game } from '../Game';
import { assets } from '../Assets';

export default class TestEntity extends Entity {
    constructor(x, y) {
        super(x, y);

        this.sprite = new PIXI.Sprite(assets.getAsset('test').texture);
        this.speed = 2;
        this.vx = this.vy = this.speed;
    }

    update(delta) {
        this.location.x += this.vx;
        this.location.y += this.vy;

        // Do not go out of bounds ;)
        if (this.location.y * game.stage.scale.y <= 0) {
            this.vy = this.speed;
        } else if ((this.location.y + this.sprite.height) * game.stage.scale.y>= game.renderer.height) {
            this.vy = -this.speed;
        }

        if (this.location.x * game.stage.scale.x <= 0) {
            this.vx = this.speed;
        } else if ((this.location.x + this.sprite.width) * game.stage.scale.x >= game.renderer.width) {
            this.vx = -this.speed;
        }
    }

    draw(stage) {
        this.sprite.x = this.location.x;
        this.sprite.y = this.location.y;

        stage.addChild(this.sprite);
    }
}

import Scene from '../Scene';
import TestEntity from '../Entity/TestEntity';

export default class StartScene extends Scene {
    init() {
        // Add Test entity
        this.addEntity(new TestEntity(3, 3));
    }
}
import Game from './Game';
import StartScene from './Scene/StartScene';

const game = new Game();
game.init(() => {
    game.scene = new StartScene();
    game.run();
});
import Game from './Game';
import StartScene from './Scene/StartScene';
import './styles.scss';


const game = new Game();
game.init(() => {
    game.scene = new StartScene();
    game.run();
});

import { game } from './Game';
import StartScene from './Scene/StartScene';
import './styles.scss';

game.init(() => {
    game.scene = new StartScene();
    game.run();
});

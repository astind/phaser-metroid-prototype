import { Game } from './classes/game';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 600,
    scene: Game
};

const game = new Phaser.Game(config);

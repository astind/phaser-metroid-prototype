import { Game } from './classes/game';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      
    }
  },
  scene: Game
};

const game = new Phaser.Game(config);

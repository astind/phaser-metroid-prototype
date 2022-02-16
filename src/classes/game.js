import Phaser from 'phaser';
import testmap from '../assets/tilemaps/proto-map.json';
import testset from '../assets/tilesets/Tileset2.png';

export class Game extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload() {
      this.load.image("tiles", testset);
      this.load.tilemapTiledJSON("map", testmap)
    }
  
    create() {
      const map = this.make.tilemap({key: "map"});
  
      const tileset = map.addTilesetImage("metroid-zapchi", "tiles");
  
      const backgroundLayer = map.createLayer("backgroud", tileset, 0, 0);
      const layoutLayer = map.createLayer("layout", tileset, 0, 0);
      const texturesLayer = map.createLayer("textures", tileset, 0, 0);
    }
  
    update(time, delta) {
  
    }
}
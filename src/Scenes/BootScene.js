import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
      console.log("HELLO");
    this.load.image('logo', 'assets/logo.png');
  }

  create () {
      console.log("Create!!!!");
      this.add.image(100,100,'logo');
    this.scene.start('Preloader');
  }
};
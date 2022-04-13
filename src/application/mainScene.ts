import { Scene } from 'phaser';
import InterfaceScene from './interfaceScene';


export default class MainScene extends Scene {
  private interfaceScene: InterfaceScene;

  constructor() {
    super({ key: 'MainScene' });

    this.interfaceScene = new InterfaceScene();
  }

  private preload(): void {}

  private create(): void {
    this.scene.add('InterfaceScene', this.interfaceScene, true);

    this.scale.on('resize', this.resize, this);
  }

  private resize(applicationSize: Phaser.Structs.Size): void {
    this.cameras.main.width = applicationSize.width;
    this.cameras.main.height = applicationSize.height;
  }

  private destroy(): void {
    this.scale.off('resize', this.resize, this);
  }
}

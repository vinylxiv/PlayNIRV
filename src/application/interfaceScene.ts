import { Scene, GameObjects } from 'phaser';
import WebFont from 'webfontloader';

import logo from '../assets/logo.png';


export default class InterfaceScene extends Scene {
  get uiScale(): number { return window.innerWidth >= window.innerHeight ? window.innerWidth : window.innerHeight; }

  get logoVariables(): any { return { x: this.uiScale / 2, y: this.uiScale / 6, width: this.uiScale / 4, height: this.uiScale / 4 }; }
  get titleVariables(): any { return { x: this.uiScale / 2, y: this.uiScale / 3.25, text: 'NIRV', color: '#FFFFFF', font: '700 48px Montserrat' }; }

  private wikiButton!: GameObjects.Text;
  private logo!: GameObjects.Image;

  constructor() {
    super({ key: 'InterfaceScene' });
  }

  private preload(): void {
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    this.load.image('logo', logo);
  }

  private create(): void {
    WebFont.load({
      custom: {
          families: ['Montserrat']
      },
      active: () => {
        // this.wikiButton = this.add.text(this.titleVariables.x, this.titleVariables.y, this.titleVariables.text,
        //   { color: this.titleVariables.color, font: this.titleVariables.font });
        // this.wikiButton.setOrigin(0.5, 0.5);
        //  this.wikiButton.setInteractive({ useHandCursor: true });

        this.drawUI();
      }
    });

    this.drawUI();

    this.scale.on('resize', this.resize, this);
    this.input.on('gameobjectdown', this.onClick, this);
  }

  private drawUI(): void {
    if (!this.logo) this.logo = this.add.image(this.logoVariables.width, this.logoVariables.height, 'logo');
    else this.logo.setPosition(this.logoVariables.x, this.logoVariables.y);
    this.logo.setOrigin(0.5, 0.5);
    this.logo.setDisplaySize(this.logoVariables.width, this.logoVariables.height);

    // if (this.wikiButton) {
    //   this.wikiButton.destroy();
    //   this.wikiButton = this.add.text(this.titleVariables.x, this.titleVariables.y, this.titleVariables.text,
    //     { color: this.titleVariables.color, font: this.titleVariables.font });
    //   this.wikiButton.setOrigin(0.5, 0.5);
    // }
  }

  private onClick(pointer: Phaser.Input.Pointer, gameObject: GameObjects.Image): void {
    console.log('clicked');
  }

  private resize(applicationSize: Phaser.Structs.Size): void {
    this.cameras.main.width = applicationSize.width;
    this.cameras.main.height = applicationSize.height;

    this.drawUI();
  }

  private destroy(): void {
    if (this.wikiButton) this.wikiButton.destroy();

    this.scale.off('resize', this.resize, this);
    this.input.off('gameobjectdown', this.resize, this);
  }
}

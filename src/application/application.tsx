import React, { Component } from 'react';
import Phaser from 'phaser';
import { config, DEFAULT_WIDTH, DEFAULT_HEIGHT, MAX_WIDTH, MAX_HEIGHT, SCALE_MODE } from './config';


export default class Application extends Component<any, any> {
  public phaserInstance!: Phaser.Game;

  public componentDidMount () {
    this.phaserInstance = new Phaser.Game(config);
    
    window.addEventListener('load', () => {
      window.addEventListener('resize', () => this.resize());
      this.resize();
    });
  }

  public resize () {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let width = DEFAULT_WIDTH;
    let height = DEFAULT_HEIGHT;
    let maxWidth = MAX_WIDTH;
    let maxHeight = MAX_HEIGHT;
    let scaleMode = SCALE_MODE;

    let scale = Math.min(windowWidth / width, windowHeight / height);
    let newWidth = Math.min(windowWidth / scale, maxWidth);
    let newHeight = Math.min(windowHeight / scale, maxHeight);

    let defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT;
    let maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT;
    let maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT;

    // Smooth scale.
    let smooth = 1;
    if (scaleMode === 'SMOOTH') {
      const maxSmoothScale = 1.15;
      const normalize = (value: number, min: number, max: number) => {
        return (value - min) / (max - min);
      };
      
      if (width / height < windowWidth / windowHeight) {
        smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
      } else {
        smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
      }
    }

    // Resize the application.
    this.phaserInstance.scale.resize(newWidth * smooth, newHeight * smooth);

    // Scale the width and height of the CSS.
    this.phaserInstance.canvas.style.width = '100%';
    this.phaserInstance.canvas.style.height = '100%';
  }

  public render() {
    return (
      <div id='application' />
    );
  }
}

import {Snow} from './snow.js';
import {Star} from './star.js';

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    
    document.body.append(this.canvas);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    // Create stars
    this.stars = [];
    for(let i = 0; i < 30; i++) {
      this.stars.push(new Star(i, this.canvas.width, this.canvas.height / 4))
    }

    // Create static snows
    this.snows = [];
    this.vector = [-4,-3,-2,-1,1,2,3,4]
    for(let i = 0; i< 150; i++) {
      this.snows.push(new Snow(i, this.canvas.width, this.canvas.height, this.vector));
    }

    window.requestAnimationFrame(this.animate.bind(this))
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    // set background color
    this.backgroundColor = this.ctx.createLinearGradient(0, 0, 0, window.innerWidth);
    this.backgroundColor.addColorStop(0, "#232256");
    this.backgroundColor.addColorStop(1, "#143778");
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw Snows~~
    for(let snow of this.snows) {
      snow.draw(this.ctx, snow, this.canvas.width, this.canvas.height);
    }

    // Draw Stars
    for(let star of this.stars) {
      star.draw(this.ctx, star);
    }
  }
}

window.onload = () => {
  new App();
};

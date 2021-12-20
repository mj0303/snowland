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
    for(let i = 0; i < 15; i++) {
      this.stars.push(new Star(i, this.canvas.width, this.canvas.height / 4))
    }

    // Create static snows
    this.snows = [];
    for(let i = 0; i< 30; i++) {
      this.snows.push(new Snow(i, this.canvas.width, this.canvas.height));
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
      this.ctx.beginPath();
      this.ctx.fillStyle = snow.color;
      this.ctx.arc(snow.x, snow.y, snow.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw Stars
    for(let star of this.stars) {
      this.ctx.beginPath();
      this.ctx.fillStyle = star.color;
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

window.onload = () => {
  new App();
};

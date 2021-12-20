export class Star {
   constructor(index, stageWidth, minHeight) {
      this.id = index;
      this.color = `#f1de09`;
      this.radius = Math.floor(Math.random() * 2) + 1;
      this.x = this.radius + (Math.random() * (parseInt(stageWidth) - (this.radius * 2)))
      this.y = this.radius + (Math.random() * minHeight);
   }
}
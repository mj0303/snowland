export class Star {
   constructor(index, stageWidth, minHeight) {
      this.id = index;
      this.color = `#f1de09`;
      this.radius = Math.floor(Math.random() * 2) + 1;
      this.x = this.radius + (Math.random() * (parseInt(stageWidth) - (this.radius * 2)))
      this.y = this.radius + (Math.random() * minHeight);
   }

   draw(ctx, star) {
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
   }
}
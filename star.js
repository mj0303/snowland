export class Star {
   constructor(index, stageWidth, minHeight) {
      this.id = index;
      this.color = `#f1de09`;
      this.radius = Math.floor(Math.random() * 2) + 1;
      // 🔥🔥 별의 좌표를 화면 크기의 비율로 줘서 화면을 resize해도 비슷한 자리에 ✅
      // 고정되어 있는 것처럼 보이게 함
      this.relativeX = Math.random();
      this.relativeY = Math.random();
      this.x = stageWidth * this.relativeX;
      this.y = minHeight * this.relativeY;
   }

   draw(ctx, star, stageWidth, stageHeight) {
      star.x = stageWidth * this.relativeX;
      star.y = stageHeight * this.relativeY;
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
   }
}
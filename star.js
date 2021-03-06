export class Star {
   constructor(index, stageWidth, minHeight) {
      this.id = index;
      this.color = `#f1de09`;
      this.radius = Math.floor(Math.random() * 2) + 1;
      // ๐ฅ๐ฅ ๋ณ์ ์ขํ๋ฅผ ํ๋ฉด ํฌ๊ธฐ์ ๋น์จ๋ก ์ค์ ํ๋ฉด์ resizeํด๋ ๋น์ทํ ์๋ฆฌ์ โ
      // ๊ณ ์ ๋์ด ์๋ ๊ฒ์ฒ๋ผ ๋ณด์ด๊ฒ ํจ
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
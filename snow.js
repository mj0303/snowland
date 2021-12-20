// 일단 초기 윈도우의 사이즈안에 모든 스노우들을 생성 한 후에
// resize가 되면 resize가 되는 그떄의 stageWidth와 stageHeight에
// collision이 실행되게 하면 윈도우 사이즈에 맞게
// 눈들이 넓게 퍼지면서 부딪힐 것임.

export class Snow {
   constructor(index, stageWidth, stageHeight, vector) {
      this.id = index;
      this.color = `rgba(255, 255, 255, ${Math.random() + 0.2})`
      this.radius = (Math.random() * 4) + 1;
      this.x = this.radius + (Math.random() * (parseInt(stageWidth) - (this.radius * 2)))
      this.y = this.radius + (Math.random() * (parseInt(stageHeight) - (this.radius * 2)))
      // Math.floor(Math.random() * 5) + 1 만 해주면 로딩이 완료 될 때 모든 눈들이 동일하게
      // 우하향하게 되므로 랜덤한 방향으로 퍼져나갈 수 있게 음수 값도 줘야 함
      // 🔥(-4 + Math.floor(Math.random() * 9)) == 0 ? 1 : -4 + Math.floor(Math.random() * 9);
      // 위 값이 자꾸 0이 되기도 하는데 해결을 못해서 일단 배열로 줌
      // 원인 알면 나중에 고치자
      this.vx = vector[Math.floor(Math.random() * 8)]
      this.vy = vector[Math.floor(Math.random() * 8)]
   }
   
   draw(ctx, snow, stageWidth, stageHeight) {
      snow.x += snow.vx;
      snow.y += snow.vy;

      this.collision(snow, stageWidth, stageHeight);

      ctx.beginPath();
      ctx.fillStyle = snow.color;
      ctx.arc(snow.x, snow.y, snow.radius, 0, Math.PI * 2);
      ctx.fill();
   }

   collision(snow, stageWidth, stageHeight) {
      const minX = snow.radius;
      const maxX = stageWidth - snow.radius;
      const minY = snow.radius;
      const maxY = stageHeight - snow.radius;

      if(snow.x <= minX || snow.x >= maxX) {
         snow.vx *= -1;
         snow.x += snow.vx;
      } else if(snow.y <= minY || snow.y >= maxY) {
         snow.vy *= -1;
         snow.y += snow.vy;
      }
   }
}
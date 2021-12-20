// 일단 초기 윈도우의 사이즈안에 모든 스노우들을 생성 한 후에
// resize가 되면 resize가 되는 그떄의 stageWidth와 stageHeight에
// collision이 실행되게 하면 윈도우 사이즈에 맞게
// 눈들이 넓게 퍼지면서 부딪힐 것임.

export class Snow {
   constructor(index, stageWidth, stageHeight) {
      this.id = index;
      this.color = `rgba(255, 255, 255, ${Math.random() + 0.2})`
      this.radius = (Math.random() * 3) + 1;
      this.x = this.radius + (Math.random() * (parseInt(stageWidth) - (this.radius * 2)))
      this.y = this.radius + (Math.random() * (parseInt(stageHeight) - (this.radius * 2)))
      this.vx = Math.floor(Math.random() * 5) + 0.1;
      this.vy = Math.floor(Math.random() * 5) + 0.1;
   }
   //draw()

   //collision()
}
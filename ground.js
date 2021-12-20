export class Ground {
   draw(ctx, stageWidth, stageHeight) {
      ctx.beginPath();
      ctx.fillStyle = "#346955";
      ctx.moveTo(0, stageHeight*0.95);
      ctx.quadraticCurveTo(stageWidth/2, stageHeight*0.9, stageWidth, stageHeight*0.95)
      ctx.rect(0, stageHeight*0.95, stageWidth, stageHeight)
      ctx.fill();
   }
}
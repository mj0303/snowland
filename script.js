const snowContainer = document.querySelector(".snow-container");

const getRndInt = (max) => {
   return Math.floor(Math.random() * max);
}

// make snow
// make snow
// make snow
const snowAmount = 100;
let i = 0;

while(i < snowAmount) {
   const snow = document.createElement("i");
   
   const snowProperties = {
      rgba: `rgba(255, 255, 255, ${Math.random() + 0.2})`,
      size: `${getRndInt(10) + 5}px`,
      duration: `${getRndInt(3) + 1}s`,
      positionX: `${getRndInt(window.innerWidth)}px`,
      delay: `${Math.random() * -20}s`
   }
   snow.style.background = snowProperties.rgba;
   snow.style.width = snowProperties.size;
   snow.style.height = snowProperties.size;
   snow.style.animationDuration = snowProperties.duration;
   snow.style.left = snowProperties.positionX;
   snow.style.animationDelay = snowProperties.delay;

   snowContainer.appendChild(snow);
   i++;
}
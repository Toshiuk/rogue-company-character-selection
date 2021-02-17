var yourAudio = document.getElementById('yourAudio'),
audioControl = document.getElementById('audioControl');

audioControl.onclick = function () {
    this.style.display = "none";
    document.getElementById('audioControlBorder').style.display = "none";
    document.getElementById('characterSelection').style.display = "flex";
    document.body.classList.add("bodySelection")
    console.log("Character selection started!")
    startTimer();
    yourAudio["play"]();
    return false;
};



//SMOKE

const color = [255, 255, 255];;

const Smoke = (canvas) => {
  const ctx = canvas.getContext('2d');
  const machine = SmokeMachine(ctx, color);
  machine.start();
  machine.setPreDrawCallback(() => {
    const w = 80;
    const h =  80;
    machine.addSmoke(w / 2, 15,  0.05);
    canvas.width = w;
    canvas.height = h;
  });
  return machine;
};



const smoke = document.getElementById('smoke');
Smoke(smoke);



// TIMER
const startTimer = () => {
  let timer = 120; // 2 min 
  setInterval(function() {


    var minutes = Math.floor(timer / 60)
    var seconds = Math.floor(timer % 60);

    document.getElementById("timer").innerHTML =  `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;

    timer--;
    if (timer < 0) {
      clearInterval(this);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
}
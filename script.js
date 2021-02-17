var backgroundMusic = document.getElementById('backgroundMusic'),
audioControl = document.getElementById('audioControl');

audioControl.onclick = function () {
    this.style.display = "none";
    document.getElementById('audioControlBorder').style.display = "none";
    document.getElementById('characterSelection').style.display = "flex";
    document.body.classList.add("bodySelection")
    console.log("Character selection started!")
    startTimer();
    backgroundMusic.volume = 0.2;
    backgroundMusic.play();
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


    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60);

    document.getElementById("timer").innerHTML =  `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;

    timer--;
    if (timer < 0) {
      clearInterval(this);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
}

//Select character
const characterList = document.getElementsByClassName('characterItem');

for (let characterItem of characterList) {
  characterItem.onclick = function() {
    const currentActive = document.getElementsByClassName("active");
    currentActive.length > 0 && currentActive[0].classList.remove("active");
    this.classList.add("active");
  }
}


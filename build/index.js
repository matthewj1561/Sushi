let colors = ["red", "green", "yellow"];
let sushiPics = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1jzsmk6Enw4asBFyybY45StUeMb98xyXLw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8N5k0tuKqrL9yhCAEyBonf2M3QnqMyOo2w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9CVVMAKo5CYednMafQAYHJGDeKjzPSmoNWlmxDOI5iCsHcQA-_2V6UuB7b8_RUBBACQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNUB1EpGHP99P9EHc6URHSgbPW1NlMNAz3Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoi0I8mj7MUfjjjVq6TtYSgRc1izMi-waKXc3FCSv2BQAlB-tlayyMlUFCasNEk7rEFws&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJXI-3fgJ_Q4YZuwLdAElSej6S75p32XHug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvltYhrCcRMldDPSj0ogmZ-qZ6E8UfDK8xQw&usqp=CAU",
];
let counter = 0;
let counterSushi = 0;
let sushiCycle = null;

setInterval(() => {
  document.getElementById("everything").style.backgroundColor = colors[counter];
  if (counter >= colors.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
}, 1000);

const sushiStart = () => {
  document.querySelector("#start-sushi").style.display = "none";
  document.querySelector("#stop-sushi").style.display = "block";

  let Cycle = setInterval(() => {
    document.getElementById("sushi").src = sushiPics[counterSushi];
    if (counterSushi >= sushiPics.length - 1) {
      counterSushi = 0;
    } else {
      counterSushi++;
    }
  }, 60);
  sushiCycle = Cycle;
};

const sushiStop = () => {
  document.querySelector("#start-sushi").style.display = "block";
  document.querySelector("#stop-sushi").style.display = "none";
  clearInterval(sushiCycle);
};

// LESSON 2
// ASYNK
// SET TIMEOUT

// console.log("ok");

// const hi = () => {
//   console.log("hi");
// };
// setTimeout(hi, 2000);

// () => {} анонимная функция

// setTimeout(() => {
//   console.log("he-he");
// }, 3000);

// 1000 = 1 секунда

// // SET INTERVAL

// setInterval(() => {
//   console.log("interval");
// }, 2000);

// const sayHi = () => {
//   console.log("hi, dude");
// };

// const interval = setInterval(sayHi, 1000);
// // clearInterval(interval);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// ========

// const init = () => {
//   let name = "OK";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// };
// init();

// const func = (num) => {
//   const culk = () => {
//     console.log(1000 * num);
//   };
//   culk();
// };

// func(24);

// const funk = (n) => {
//   return function (num) {
//     return n + num;
//   };
// };

// const addOne = funk(1);
// const addTen = funk(10);

// console.log(addOne(10));
// console.log(addTen(3));

const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
  if (position <= 360 && topPosition == 0) {
    position += 8;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position >= 360 && topPosition <= 360) {
    topPosition += 8;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  } else if (topPosition >= 360 && position != 0) {
    position -= 8;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position == 0 && topPosition != 0) {
    topPosition -= 8;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  }
};

move();


let intervalId = setInterval(function(){
  console.log("таймер справа ");
}, 1000);



// let time = 0;
// let sec = 1;
// const Timer = () => {
//   if(time <= sec && sec >= time) {
//     time += 1;
//     console.log(time);
//   } ;
// };


// document.getElementById("step").addEventListener('click', () => {
//   clearInterval(intervalId)
// } )

// timer = setInterval(function () {
//   seconds = timeMinut%60 // Получаем секунды
//   minutes = timeMinut/60%60 // Получаем минуты
//   hour = timeMinut/60/60%60 // Получаем часы
//   // Условие если время закончилось то...
//   if (timeMinut <= 0) {
//       // Таймер удаляется
//       clearInterval(timer);
//       // Выводит сообщение что время закончилось
//       alert("Время закончилось");
//   } else { // Иначе
//       // Создаём строку с выводом времени
//       let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//       // Выводим строку в блок для показа таймера
//       timerShow.innerHTML = strTimer;
//   }
//   --timeMinut; // Уменьшаем таймер
// }, 1000)

var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}


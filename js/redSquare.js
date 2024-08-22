// const square =document.getElementsByClassName('square');
const square =document.getElementById('movingSquare');
let startX = 10;
let startY = 0

let timer = setInterval(()=>move(),500 );
// setTimeout(()=>{
//     clearInterval(timer); функция, время
//
// })
// function move() {
//     square.classList.toggle('hidden')
//     square.classList.toggle('hidden')
// }

function move() {
    startX +=10;

}



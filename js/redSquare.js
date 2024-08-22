const square =document.getElementById('movingSquare');
let startX = 0;
let timer = setInterval(()=>moveRight(),500 );

function moveRight() {
    startX +=1;
    square.style.left = startX + 'px';
}

setTimeout(() => clearInterval(timer), 60000);//стоп после 60 сек

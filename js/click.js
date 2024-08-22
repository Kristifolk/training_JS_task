var counter = 0;
function eventHandler(event) {
    if (event) {
        counter++ ;
        alert(counter);
    }
}
var event = window.addEventListener("click", eventHandler);
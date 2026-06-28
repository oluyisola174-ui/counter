let counter = 0;
let counterElement= document.getElementById("counter");
 loadCounter();
function updateCounter(){
    counterElement.innerHTML = counter;
}
function increaseCounter(){
    counter++;
    updateCounter();
}
function decreaseCounter(){
    if (counter > 0){
    counter--;
    updateCounter();
}
}
function resetCounter(){
    counter = 0;
    updateCounter();
}
function saveCounter(){
    localStorage.setItem("counter", counter);
}
function loadCounter(){
    let saved = localStorage.getItem("counter");
    if(saved !== null){
        counter = Number(saved);
    }
    updateCounter();
}

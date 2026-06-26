let counter = 0;
 loadCounter()
function updateCounter(){
    getElementById("counter").innerHTML = counter;
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

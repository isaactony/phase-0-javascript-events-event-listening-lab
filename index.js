function addingEventListener() {
    const input = document.getElementById("input");
    function clickAlert() {
        alert("You know I was clicked !");
    }
    
    input.addEventListener('click', clickAlert);

   
}

addingEventListener();






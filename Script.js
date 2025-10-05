let display = document.getElementById("Display");
function appendKeys(input){
display.value += input;

}
function clearScreen(){
display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    
}

function del(){
    display.value = display.value.slice(0,-1)
}
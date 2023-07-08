const btn = document.getElementById('btn-on-off');

isOnRed = false;
isOnYellow = false;
isOnGreen = false;
isOnTrafficLights = false;

btn.addEventListener('click', () =>{
    if(btn.textContent == 'OFF'){
        btn.textContent = 'ON'
        isOnTrafficLights = true;
        red.style['background-color'] = 'red';
        isOnRed = true;
    }
    else{
        checkLights();
        btn.textContent = 'OFF'
        isOnTrafficLights = false;
    }
});


red.addEventListener(('click'), () =>{
    if(isOnTrafficLights == true){
        if(isOnRed == true){
            red.style['background-color'] = 'white';
            isOnRed = false;
        }
        else{
            red.style['background-color'] = 'red';
            yellow.style['background-color'] = 'white';
            green.style['background-color'] = 'white';
            isOnRed = true;
            isOnYellow = false;
            isOnGreen = false;
        }
    }
});

yellow.addEventListener(('click'), () =>{
    if(isOnTrafficLights == true){
        if(isOnYellow == true){
            yellow.style['background-color'] = 'white';
            isOnYellow = false;
        }
        else{
            yellow.style['background-color'] = 'yellow';
            red.style['background-color'] = 'white';
            green.style['background-color'] = 'white';
            isOnRed = false;
            isOnYellow = true;
            isOnGreen = false;
        }
    }
});

green.addEventListener(('click'), () =>{
    if(isOnTrafficLights == true){
        if(isOnGreen == true){
            green.style['background-color'] = 'white';
            isOnGreen = false;
        }
        else{
            green.style['background-color'] = 'green';
            red.style['background-color'] = 'white';
            yellow.style['background-color'] = 'white';
            isOnRed = false;
            isOnYellow = false;
            isOnGreen = true;
        }
    }
});


function checkLights(){
    if(isOnRed == true){
        red.style['background-color'] = 'white';
        isOnRed = false;
    }
    if(isOnYellow == true){
        yellow.style['background-color'] = 'white';
        isOnYellow = false;
    }
    if(isOnGreen == true){
        green.style['background-color'] = 'white';
        isOnGreen = false;
    }
}
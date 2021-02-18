const converterInput = document.querySelector('.converter-input');
const converterOutput = document.querySelector('.converter-output');
const converterToggler = document.querySelector('.converter-toggler');
const scale1 = document.querySelector('.converter-scale-1');
const scale2 = document.querySelector('.converter-scale-2');
let converterCounter = 0;

const outPutHandler = () => {
    if (converterCounter === 1){
        converterOutput.value = (5/9 *(converterInput.value - 32));
        
    }
    else{
        converterOutput.value = 32 + 9/5*converterInput.value;

    } 
    console.log(converterCounter);

}

const switchConverter = () => {
    if (converterCounter === 1 ){
    scale1.className = "left";
    scale2.className = "right";
    converterCounter = 0;
    outPutHandler();
    }else{
    converterCounter = 1;
    scale1.className = "right";
    scale2.className = "left";
    outPutHandler();
    }
}

converterOutput.disabled = true;

converterToggler.addEventListener('click', switchConverter);
converterInput.addEventListener('change', outPutHandler);
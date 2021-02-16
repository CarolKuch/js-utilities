const converterInput = document.querySelector('.converter-input');
const converterOutput = document.querySelector('.converter-output');
const converterToggler = document.querySelector('.converter-toggler');
const scale1 = document.querySelector('.converter-scale-1');
const scale2 = document.querySelector('.converter-scale-2');
let converterCounter = 0;

const outPutHandler = () => {
    if ( converterCounter = 0){
        converterOutput.value = (converterInput.value*1.8 + 32).toFixed(2);
    }
    else{
        converterOutput.value = ((converterInput.value-32)/1.8).toFixed(2);
    }

}

const switchConverter = () => {
    if (converterCounter === 0 ){
    scale1.className = "right";
    scale2.className = "left";
    converterCounter = 1;
    }else{
    scale1.className = "left";
    scale2.className = "right";
    converterCounter = 0;
    }
}

converterOutput.disabled = true;
converterInput.addEventListener('change', outPutHandler);
converterToggler.addEventListener('click', switchConverter);
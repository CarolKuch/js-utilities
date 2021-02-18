const timerButton = document.querySelector('.timer-button');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');
let timerInterval;

let updateSecondsValue = (e) => {
    secondsCount.value = e.target.value;
}

let startCount = () => {
    timerInterval = setInterval( () => {timeChanger()}, 1000);
}

let updateMinutesValue = (e) => {
    minutesCount.value = e.target.value;
}

let inputTrigger = (triggerBoolean) => {
    document.getElementById('minutes').disabled = triggerBoolean;
    document.getElementById('seconds').disabled = triggerBoolean;
}

let timeChanger = () => {
    inputTrigger(true);
    if ( (secondsCount.value == 0) && (minutesCount.value > 0) ) {
        secondsCount.value = 59;
        minutesCount.value--;
    }else if (secondsCount.value < 0 | minutesCount.value <0){  
        alert("Minuty i sekundy nie mogą mieć ujemnej wartości");
        clearInterval(timerInterval);
        inputTrigger(false);
    }else if ((secondsCount.value == 0) && (minutesCount.value == 0) ){
        alert("Koniec czasu");
        clearInterval(timerInterval);
        inputTrigger(false);
    }else{
        document.getElementById('seconds').value = --secondsCount.value;
    }
}

timerButton.addEventListener('click', () => { startCount() });
secondsCount.addEventListener('change', () => { updateSecondsValue(event) });
minutesCount.addEventListener('change', () => { updateMinutesValue(event) });


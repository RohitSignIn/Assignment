// Adding Audio File
const audio = new Audio('./mixkit-classic-winner-alarm-1997.wav');

// Alarm List Container
const alarmList = document.getElementById("alarmList");

let delAlarm = ''

// Main Logic of Alarm Clock
let allAlarms = [];
let alarmTime = [];
const setAlarm = (e) => {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    now = new Date();
    
    delAlarm = document.getElementsByClassName("del_alarm");
    
    allAlarms.push(alarmDate);
    
    // allAlarms.forEach(function callback(value, index) {
        // })
        
        let timeToAlarm = alarmDate - now;
        if(timeToAlarm <= 0){ return; }

        alarmTime.push(timeToAlarm);
        alarmTime.sort();
        
    // console.log(`Alarm: ${alarmDate}`);

    Array.from(alarmTime).forEach(function (value, index) {
        if(value>=0){
            setTimeout(() => {
                console.log("Ringing now")
                ringBell();
            }, timeToAlarm);
        }
        alarmTime.shift();
    })

    Array.from(allAlarms).forEach(function (value, index) {
        alarmList.innerHTML += `<label>Alarm: ${value}</label><button id="alarm_${index}" style="background-color:tomato; font-size: 1rem; padding: 8px" class="del_alarm">X</button>`;
    })

}

// Function ring the Alarm
const ringBell = () => {
    audio.play();
}

// Function to 
const setDT = () => {
    curDT.innerHTML = new Date();
}

const curDT = document.getElementById("cur_time");
setInterval(function () {
    setDT();
}, 1000);


// Set Alarm Button Action, On click Run Main Alarm Function
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

delAlarm[0].addEventListener('click', function (e) {
    e.preventDefault();
})



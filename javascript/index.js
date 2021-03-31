const chronometer = new Chronometer();
if(btnLeft.innerHTML == 'START' ){
  chronometer.startClick()
}else if(btnLeft.innerHTML == 'STOP'){
  chronometer.stopClick()
}


// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
 minDec.innerHTML = minutes
 secUni.innerHTML = seconds
}

function printMinutes() {
 minutes = chronometer.twoDigitsNumber(chronometer.getMinutes(chronometer.currentTime))
  minUni.innerHTML = minutes
}

function printSeconds() {
  seconds = chronometer.twoDigitsNumber(chronometer.getSeconds(chronometer.currentTime)) 
  secUni.innerHTML = seconds
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML == 'START' ){
    btnLeft.innerHTML = 'STOP'
    btnLeft.setAttribute('.btn stop')
    chronometer.startClick(printTime)

     btnRight.innerHTML = 'SPLIT'
     btnRight.setAttribute('.btn split')

  }else if(btnLeft.innerHTML == 'STOP'){
    btnLeft.innerHTML = 'START'
    btnLeft.setAttribute('.btn start')
    chronometer.stopClick()

    btnRight.innerHTML = 'RESET'
    btnRight.setAttribute('.btn reset')
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if(btnRight.innerHTML == RESET){  
 }
});


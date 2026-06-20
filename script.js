const secondHand = 
document.querySelector('.second-hand');

const minuteHand = 
document.querySelector('.minute-hand');

const hourHand = 
document.querySelector('.hour-hand');

function updateClock() {
    let now = new Date();

    let seconds = now.getSeconds();

    let minutes = now.getMinutes();

    let hours = now.getHours();

    let degrees = seconds * 6;
    
    let minutesDegrees = minutes * 6;

    let hoursDegrees = hours * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${degrees}deg)`;

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);

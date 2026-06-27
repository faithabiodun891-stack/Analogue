const clock = document.querySelector('.clock');

function updateClock() {
    const now = new Date();
    const hours24 = now.getHours();
    const hours = hours24 > 12 ? hours24 - 12 : hours24;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    clock.textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);
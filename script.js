function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('timeDisplay').textContent = timeString;
}

// Update the time immediately and then every minute
updateTime();
setInterval(updateTime, 60000);

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    
    const timeString = `${hours}:${minutes}`;
    const dateString = `${day}/${month}/${year}`;
    
    document.getElementById('dateDisplay').textContent = `${dateString} ${timeString}`;
}

// Update the time immediately and then every minute
updateTime();
setInterval(updateTime, 60000);

document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});
const flipContainer = document.querySelector('.flip-container');
let startX;

flipContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

flipContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX) {
        // Dragged to the left
        flipContainer.classList.add('flipped');
    } else if (startX < endX) {
        // Dragged to the right
        flipContainer.classList.remove('flipped');
    }
});

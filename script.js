function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const options = { timeZone: 'UTC', hour12: false };
    const currentDate = new Date();
    const currentDayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getUTCDay()];
    const currentTime = currentDate.toLocaleTimeString([], options);

    currentDayElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
    currentTimeElement.textContent = `Current UTC Time: ${currentTime}`;
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Initial update
updateCurrentTime();

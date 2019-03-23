function setAlarm(time, callback) {

}

function setDailyRhythm(wakeUpTime, bedTime) {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    setTimeout(setAlarm(`${hours}:${minutes}`,wakeUp()), 1000);
}
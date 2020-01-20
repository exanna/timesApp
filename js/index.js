// --- timer --- //
const timer = () => {
    const data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    const showDate = `${hours}:${minutes}:${seconds}`;
    const timerDiv = document.querySelector(".timer");
    timerDiv.innerHTML = showDate;
}
setInterval(timer, 1000);
document.addEventListener("DOMContentLoaded", timer);

// --- counter --- //

const dateStartInput = document.querySelector(".app__date-start");
const dateEndInput = document.querySelector(".app__date-end");
const appBtn = document.querySelector(".app__btn");

const appDays = document.querySelector(".app__days");
const appHours = document.querySelector(".app__hours");
const appMinutes = document.querySelector(".app__minutes");
const appSeconds = document.querySelector(".app__seconds");
const resultError = document.querySelector(".result__info");

let dateStart = 0;
let dateEnd = 0;

const getStartDate = () => dateStart = dateStartInput.value;
const getEndDate = () => dateEnd = dateEndInput.value;

dateStartInput.addEventListener("change", getStartDate);
dateEndInput.addEventListener("change", getEndDate);

appBtn.addEventListener("click", () => {
    dateStart = new Date(dateStart);
    dateEnd = new Date(dateEnd);
    let time = dateEnd.getTime() - dateStart.getTime();

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor(time / (1000 * 60));
    let seconds = Math.floor(time / (1000));

    const daysInfo = `Difference in days: ${days}`;
    const hoursInfo = `Difference in hours: ${hours}`;
    const minutesInfo = `Difference in minutes: ${minutes}`;
    const secondsInfo = `Difference in seconds: ${seconds}`;
    const errorInfo = `Wrong dates!`;

    if (days > 0) {
        resultError.textContent = '';
        appDays.textContent = daysInfo;
        appHours.textContent = hoursInfo;
        appMinutes.textContent = minutesInfo;
        appSeconds.textContent = secondsInfo;
    } else {
        appDays.textContent = '';
        appHours.textContent = '';
        appMinutes.textContent = '';
        appSeconds.textContent = '';
        resultError.textContent = errorInfo;
    }
})
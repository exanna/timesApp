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

const getStartDate = () => {
    const input = dateStartInput.value;
    const dateStart = new Date(input).toLocaleDateString();
    console.log(input);
    console.log(dateStart);
}

const getEndDate = () => {
    const input = dateEndInput.value;
    const dateEnd = new Date(input).toLocaleDateString();
    console.log(input);
    console.log(dateEnd);
}

dateStartInput.addEventListener("change", getStartDate);
dateEndInput.addEventListener("change", getEndDate);



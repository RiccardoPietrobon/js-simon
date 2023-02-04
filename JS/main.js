
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const timer_daysEl = document.getElementById("lesson_days");
const timer_hoursEl = document.getElementById("lesson_hours");
const timer_minutesEl = document.getElementById("lesson_minutes");
const timer_secondsEl = document.getElementById("lesson_seconds");

const countDownDate = new Date("Feb 6, 2023 09:30:00");



// stampaOraAttuale()


/* ******    FUNZIONI    ****** */
/* ******   ora attuale  **** */
stampaOraAttuale()
const clockOrologio = setInterval(stampaOraAttuale, 1000);
function stampaOraAttuale() {
    const now = new Date();

    const seconds = now.getSeconds() // Get the second (0-59)
    const minutes = now.getMinutes() // Get the minute (0-59)
    const hours = now.getHours() //Get the hour (0-23)
    const days = now.getDay() // Get the day as number (0-6)

    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;
}


/* ******    FUNZIONI    ****** */
/* ******   countdown  **** */

const timer = setInterval(function () {

    // Get today's date and time
    const now = new Date();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const timer_days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const timer_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const timer_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const timer_seconds = Math.floor((distance % (1000 * 60)) / 1000);


    timer_secondsEl.innerHTML = (timer_seconds < 10) ? "0" + timer_seconds : timer_seconds;
    timer_minutesEl.innerHTML = (timer_minutes < 10) ? "0" + timer_minutes : timer_minutes;
    timer_hoursEl.innerHTML = (timer_hours < 10) ? "0" + timer_hours : timer_hours;
    timer_daysEl.innerHTML = (timer_days < 10) ? "0" + timer_days : timer_days;



    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(timer);
    }
});

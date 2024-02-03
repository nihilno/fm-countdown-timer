function countdown() {
  const endDate = new Date("December 31, 2024 00:00:00").getTime();
  const nowDate = new Date().getTime();
  let difference = endDate - nowDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.querySelector("#day").innerHTML = timeDays;
  document.querySelector("#hour").innerHTML = timeHours;
  document.querySelector("#minute").innerHTML = timeMinutes;
  document.querySelector("#second").innerHTML = timeSeconds;
}

setInterval(countdown, 1000);

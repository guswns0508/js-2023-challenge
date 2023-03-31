const clock = document.querySelector("span.clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

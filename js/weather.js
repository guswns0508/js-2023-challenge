const API_KEY = "75ebde65d1f0280b8b195d76f56c5da6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:first-child");
      const tmp = document.querySelector(".weather span:last-child");
      const temp = Math.floor(data.main.temp);
      city.innerText = data.name;
      tmp.innerText = `온도 : ${temp}°C`;
      tmp.style.textAlign = "center";
    });
}
function onGeoError() {
  alert("날씨를 제공할 위치를 찾을 수 없습니다. 😥");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

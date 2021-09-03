const APIKEY = "6df29b3763eb2523693dfec8a63ffcf9";

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${
        Math.round(data.main.temp * 10) / 10
      }°C`;
    });
  //   화면 network에 가면 확인할 수 있음
}
function onGeoError() {
  alert("Can't find you. No weaather for you");
}
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

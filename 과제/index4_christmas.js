// 크리스마스까지 남은 일자, 일시 구하기

const clockTitle = document.querySelector(".js-clock");
const endDate = new Date("2021-12-25:00:00:00+0900");

function getClock() {
  const date = new Date();
  const howlong = endDate.getTime() - date.getTime();
  const diffDay = Math.floor(howlong / (1000 * 60 * 60 * 24));
  const diffHour = String(
    Math.floor((howlong / (1000 * 60 * 60 * 24) - diffDay) * 24)
  ).padStart(2, "0");
  const diffMin = String(
    Math.floor(
      (howlong / (1000 * 60 * 60 * 24) - diffDay - diffHour / 24) * 24 * 60
    )
  ).padStart(2, "0");
  const diffSec = String(
    Math.floor(
      (howlong / (1000 * 60 * 60 * 24) -
        diffDay -
        diffHour / 24 -
        diffMin / 24 / 60) *
        24 *
        60 *
        60
    )
  ).padStart(2, "0");

  clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}
getClock();
setInterval(getClock, 1000);

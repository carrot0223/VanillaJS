const clock = document.querySelector("#clock");

// function sayHello() {
//   console.log("hello");
// }

// setInterval(sayHello, 5000);
// // 5초마다 반복된다
// setTimeout(sayHello, 5000);
// // 5초 후에 한번 실행한다

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

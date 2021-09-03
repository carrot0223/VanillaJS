// #3.0 JS on the browser
// document는 이미 정의된 객체. JS 관점에서 html을 보여줌
const title = document.getElementById("title");

title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);
// html의 element를 가져와서 js로 바꿔준다

const hellos = document.getElementsByClassName("hello");
console.log(hellos);
// class name이 hello인게 여러개 있어서 array 형태로 나옴

const title2 = document.getElementsByTagName("h1");
console.log(title2);
// 이러면 여러개가 동시에 잡힘

const title3 = document.querySelector(".hello h1");
console.log(title3);
// div 안에 있는 h1만 뽑아오기 -> 앞으로 element 불러올 때는 이것만 사용할 것임
// 만약 같은 형태가 여러개 있다면 첫번째 element만 불러온다
const title4 = document.querySelectorAll("div h1");
console.log(title4);

const title5 = document.querySelector(".hello:first-child h1");
title5.innerText = "Click me";

// CSS도 바꿀 수 있음

// #3.4 Event
function handleTitleClick() {
  title5.style.color = "blue";
}
title5.addEventListener("click", handleTitleClick);
// 파워풀한건 특정 행동이 발생했을 때 이를 감지해서 html, css를 바구는 것
function handleMouseEnter() {
  title5.innerText = "Mouse is here!";
}
title5.addEventListener("mouseenter", handleMouseEnter);
function handleMouseLeave() {
  title5.innerText = "Mouse is gone!";
}
title5.addEventListener("mouseleave", handleMouseLeave);

// #3.5 style은 CSS에서 바꾸는게 바람직함. JS로는 다른걸 하는게 좋음
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
  alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);
function handleWindowOnline() {
  alert("All good");
}
window.addEventListener("online", handleWindowOnline);

// #3.6 CSS in JS
const h1 = document.querySelector(".hello:nth-child(2) h1");
h1.innerText = "You Click";

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);
// 위 코드는 JS 자체에서 CSS를 바꾸는 것 --> CSS는 CSS에서 바꾸는게 이상적임. 다시 진행

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     // classname은 기존에 있는 class도 바꿔버려서 문제임
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handleTitleClick);
// CSS에 미리 스타일을 설정해주고, JS에서는 action에 대해 CSS값을 매칭시켜줄 뿐..
// 더 나은 방식이 있음

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);

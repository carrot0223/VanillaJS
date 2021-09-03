const loginForm = document.querySelector("#login-form");
// document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const hiddenClass1 = document.querySelector("#todo-form");
const hiddenClass2 = document.querySelector("#todo-list");
const hiddenClass3 = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 맨 처음 저장된 username이 없으면 입력값을 사용하고, 저장된게 있으면 저장된 값을 사용
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  hiddenClass1.classList.remove(HIDDEN_CLASSNAME);
  hiddenClass2.classList.remove(HIDDEN_CLASSNAME);
  hiddenClass3.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  //   greeting.innerText = "Hello "+username;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greetings
  paintGreetings(savedUsername);
}

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];
// 시작할 때 toDos는 공란으로 시작 -> 그러니 F5할때마다 없어짐

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// #7.4~ 작성한 to do를 local storage에 저장하기
// 그냥 저장하면 array로 저장이 안됨. stringify로 하면 그나마 array인 것처럼 저장됨

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 위에 정읳나 li.id를 보면 string으로 돼있어서 parseInt 해줘야 함
  saveToDos();
  // 삭제한 다음에 local storage에 저장까지 해주기
}

function paintToDo(newTodoObj) {
  const li = document.createElement("div");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodoObj.text;
  li.appendChild(button);

  li.appendChild(span);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
// 새로운 To do가 입력되면 html list에 이를 생성해준다
// 이 값은 local storage에도 함께 저장된다

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of ", item);
// item 변수를 인지해서 변수별로 함수를 실행한다
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // parsedToDos.forEach(sayHello);
  // parsed된 To do 각각에 대해 sayHello라는 함수를 실행해라
  toDos.forEach(paintToDo);
  // 또느 for each 자체에 함수를 집어넣을 수 있음
}

// function filter(deletedTodo) {
//   return deletedTodo.id !== li.id;
// }
// filter함수는 기존 todo array를 유지하려면 array의 각 item에 대해 true를 뱉어내야 함. 만약 아니라면 그 item은 빼고 새로운 array를 생성

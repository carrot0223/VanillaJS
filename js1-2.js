// #2.3
const a = 7;
const b = 2;
let myName = "kim";
let veyLongVariableName = 0;
// let으로 정의할 수 있음. const는 이후 불변값임. let으로 하면 뒷부분에 이 값 자체를 바꿀 수도 있음
// var도 쓸 수 있는데, 대신 오류를 알려주지 않아서 요즘엔 안씀

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Jin";
console.log("hello " + myName);

// #2.4
const amIFat = true;
console.log(amIFat);
const whoAreYou = null; // 변수는 있고 값은 있는데 그 값이 아무것도 없음. nothingness
console.log(whoAreYou);
let something; //undefined. 변수는 있는데 값이 주어지지 않음.
console.log(something);

// #2.5 데이터를 정리하기
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]); //컴퓨터는 0부터 숫자를 셈
// array이 하나 더 추가
daysOfWeek.push("sun");
console.log(daysOfWeek);

// #2.6 objects
const player = {
  // list는 안의 요소가 모두 같은 종료이나, object는 요소가 각기 다른 property를 가질때 사용
  name: "Kim",
  points: 10,
  fat: true,
  level: 35,
};
console.log(player);
console.log(player.name);
player.fat = false; // 특성값을 수정
console.log(player.fat);
player.lastname = "kokoa"; // 특성값 추가
player.points = player.points + 15;
console.log(player);

// #2.7 functions
function sayHello(nameOfPerson, age) {
  console.log(
    "Hello my name is " + nameOfPerson + " and I'm " + age + " years old"
  );
}
sayHello("nico", 21);
sayHello("dal", 19);
sayHello("Jin", 27);

function plus(a, b) {
  console.log(a + b);
}
plus(1, 3);

const player2 = {
  name: "nico",
  sayhello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player2.name);
player2.sayhello("jin");

// #2.11 Returns - 결과값을 다른데 활용하자
const calculater = {
  plus: function (a, b) {
    console.log(a + b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
};

calculater.times(5, 10);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
  // return을 안넣으면 아래 명령이 실행되지 않음.
}
const krAge = calculateKrAge(age);
console.log(krAge);

const calculater2 = {
  plus: function (a, b) {
    return a + b;
  },
  times: function (a, b) {
    return a * b;
  },
};

const plusResult = calculater2.plus(5, 10);
const timesResult = calculater2.times(plusResult, 3);
console.log(plusResult);
console.log(timesResult);

// #2.13 conditionals
// const age2 = prompt("나이를 입력하세요");
// 위에껀 디자인 수정이 안되고 팝업 자체를 막을 수도 있기 때문에 안씀
// console.log(typeof age2, parseInt(age2));
// 숫자가 아니면 NaN이라 뜨고, 이걸 조건으로 숫자만 받도록

const age2 = parseInt(prompt("나이를 입력하세요"));

console.log(isNaN(age2));
if (isNaN(age2) || age2 < 0) {
  console.log("정상적인 숫자를 입력해주세요");
} else if (age2 < 18) {
  console.log("나이가 너무 어림");
} else if (age2 >= 18 && age2 <= 50) {
  console.log("음주 가능 연령임");
  // and는 &&, or는 ||임
} else if (age2 > 50 && age2 <= 80) {
  console.log("술을 줄이길 권장함");
  // and는 &&, or는 ||임
} else {
  console.log("술은 위험함");
}
// == 은 값만을 비교하고
// === 은 유형도 비교하여 === 를 주로 사용하는걸 추천한다고 하네요.
// ex) 0 == false ---> true,
// 0 === false ---> false

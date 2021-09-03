const quotes = [
  { quote: "여유는 잔고에서 오고 상냥함은 탄수화물과 당분에서 온다" },
  { quote: "원수는 회사에서 만난다" },
  {
    quote:
      "내가 맞을 때는 아무도 기억하지 않는다. 내가 틀릴 때는 누구도 잊지 않는다",
  },
  {
    quote:
      "신뢰는 종이와도 같아서 한번 구겨지고 나면 절대로 다시 완벽해질 수 없다",
  },
  { quote: "기분이 태도가 되진 말자" },
  { quote: "'내가 너 그럴 줄 알았다' 알았으면 미리 말을 해줘라..." },
  { quote: "내일 할 수 있는 일을 오늘 할 필요는 없다" },
  { quote: "언젠간 잘리고, 회사는 망하고, 우리는 죽는다!", author: "이동수" },
  { quote: "어제보다 나은 내일은 토요일이다" },
  { quote: "내가 일으킬 수 있는 아주 작은 기적은 밍기적이다" },
];
// array 형식으로 명언 모음 만들기

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
if (todaysQuote.author === undefined) {
  author.innerText = "";
} else {
  author.innerText = todaysQuote.author;
}

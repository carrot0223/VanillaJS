const images = [
  "cat-6568422_1920.jpg",
  "hill-6557956_1920.jpg",
  "landscape-3913325_1920.jpg",
  "nature-6567542_1920.jpg",
  "ocean-6522657_1920.jpg",
  "sand-6570980_1920.jpg",
  "st-petersburg-4805295_1920.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.querySelector("#img");
const bgImage = document.createElement("img");

// js에서 html img을 생성해서 넣어주기
bgImage.src = `img/${chosenImage}`;
img.append(bgImage);

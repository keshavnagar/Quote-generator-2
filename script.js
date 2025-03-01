let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

let array = [
  "This journey isn't just about reaching your dreams, it's about creating your own identity.",
  "What once broke you, is now building you — don't stop now!",
  "Today's struggle is the price for tomorrow's confidence.",
  "They say old methods don't work anymore... Keshav is out to create new ways!",
  "A small-town boy from town... who will show the world that his vision was always bigger than his place!",
];

btn.addEventListener("click", () => {
  h1.innerText = array[Math.floor(Math.random() * array.length)];
});

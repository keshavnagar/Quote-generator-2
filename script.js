let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

let array = [
  "This journey isn't just about reaching your dreams, it's about creating your own identity.",
  "What once broke you, is now building you — don't stop now!",
  "Today's struggle is the price for tomorrow's confidence.",
  "The harder the journey, the greater the destination... just keep moving forward.",
  "Those who stop today will regret tomorrow... those who rise today will inspire tomorrow.",
];

btn.addEventListener("click", () => {
  h1.innerText = array[Math.floor(Math.random() * array.length)];
});

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const excuseButton = document.getElementById("generateExcuse");
const excuseText = document.getElementById("excuse");

excuseButton.addEventListener("click", generateExcuse);

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  excuseText.textContent = excuse;
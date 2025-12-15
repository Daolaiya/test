const button = document.getElementById("clickMeBtn");
const output = document.getElementById("output");

let count = 0;

button.addEventListener("click", () => {
  count += 1;
  output.textContent = `Button clicked ${count} time${count === 1 ? "" : "s"}.`;
});

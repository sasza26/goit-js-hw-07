const controls = document.getElementById("controls");

const input = controls.querySelector("input");

const createButton = controls.querySelector("[data-create]");

const destroyButton = controls.querySelector("[data-destroy]");

const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxSize = 30;
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }

  boxes.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

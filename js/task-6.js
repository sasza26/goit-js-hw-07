function getRandomHexColor() {}

const reference = {
  controls: document.querySelector("#controls input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
console.log(reference);

function createBoxes(amount) {
  reference.boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");
    const size = 30 + 10 * i;

    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();

    reference.boxes.appendChild(elem);
  }
}

function destroyBoxes() {
  reference.boxes.innerHTML = "";
}

reference.create.addEventListener("click", function () {
  const amount = parseInt(reference.controls.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    reference.controls.value = "";
  }
});

reference.destroy.addEventListener("click", destroyBoxes);

// reference.create.addEventListener('click', function () {
//   const amount = reference.controls.value;
//   if (amount > 0) {
//     createBoxes(amount);
//   }
// });

// reference.destroy.addEventListener('click', function () {
//   reference.boxes.innerHTML = '';
// });
// createBoxes();

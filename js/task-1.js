const ulElem = document.querySelector("#categories");
console.log(`Number of categories: ${ulElem.children.length}`);

[...ulElem.children].forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

const body = document.querySelector("body");
const grid = document.querySelector(".grid");

for (let i = 1; i <= 16 * 16; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "gridChild");

  grid.appendChild(div);
}

const gridChild = document.querySelectorAll(".gridChild");

for (let i = 0; i < gridChild.length; i++) {
  gridChild[i].addEventListener("mousemove", (e) => {
    gridChild[i].style.backgroundColor = 'blue';
  });
}

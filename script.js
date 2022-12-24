const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const button1 = document.querySelector('.btn1');
const colorDiv  = document.querySelector('.color');
const colorDivChildren = document.querySelectorAll('.color');

function gridSize() {
  let pixels = Number(prompt('Pick a Grid size(Min: 2, Max: 64)'));

  if(pixels >= 2 && pixels <= 64) {
    addDiv(pixels);
  } else {
    gridSize();
  }
}

function createNew(color) {
  button1.addEventListener('click', () => {
    location.reload();
  });
}

function addDiv(pixels) {
  for (let i = 1; i <= pixels * pixels; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "gridChild");

    grid.appendChild(div);

  }

  grid.style.gridTemplateColumns = `repeat(${pixels}, auto)`;
}

function addListener(color) {
  const gridChild = document.querySelectorAll(".gridChild");

  for (let i = 0; i < gridChild.length; i++) {
    gridChild[i].addEventListener("mouseover", (e) => {
      gridChild[i].style.backgroundColor = `${color}`;
      // button1.style.backgroundColor = `${color}`
    });
  }
}

function bundler() {
  let color = prompt('Pick a color');
  createNew(color);
  gridSize();
  addListener(color);
}

bundler();

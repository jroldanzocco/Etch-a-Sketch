const container = document.querySelector("#container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter",hover)
    cell.addEventListener("mouseleave", leaves)
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function hover(){
  console.log("hola")
  this.classList.add("hover")
}
    
function leaves(){
    setTimeout(function(){
    this.classList.remove('hover');
    }.bind(this),5000)
}
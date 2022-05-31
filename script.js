const container = document.querySelector("#container");

const clear = document.querySelector('.clear')
function makeGrid(size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    container.appendChild(cell)
    //hover
    cell.addEventListener("mouseover",function(){
      cell.style.backgroundColor = "black"
    })
    //reset grid
    function clearGrid(){
      clear.addEventListener("click",e =>{
        cell.style.backgroundColor = "white"
      })
    }
    clearGrid()
  };
};


makeGrid(16)


const $sixteen = document.querySelector(".sixteen")
$sixteen.addEventListener("click",function(e){
  makeGrid(16)
  e.preventDefault()
})

const $thirtytwo = document.querySelector(".threetwo")
$thirtytwo.addEventListener("click",function(){
  makeGrid(32)
  e.preventDefault()
})

const $sixtyfour = document.querySelector(".sixfour")
$sixtyfour.addEventListener("click",function(){
  makeGrid(64)
  e.preventDefault()
})

const $hundred = document.querySelector(".hundred")
$hundred.addEventListener("click",function(){
  makeGrid(100)
  e.preventDefault()
})


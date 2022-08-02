const gridSize = 20;

function changeSize() {
    const gridSize = prompt("How many rows/columns would you like?");  
    removeAllGridCells()  
    makeBlocks(gridSize);
    
}


function makeBlocks(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < gridSize; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('container').appendChild(row);
    }

    
}

makeBlocks(gridSize);

const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('mouseover', function handleClick(event) {
  
      box.setAttribute('style', 'background-color: black;');
    });
  });

  
  function reset() {
    boxes.forEach(box => {
        box.setAttribute('style', 'background-color: white;')
    })
  }


  function removeAllGridCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function rainbowMode() {
    boxes.forEach(box => box.addEventListener('mouseover', () => { 
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
    }))
}


function blackMode() {
    const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('mouseover', function handleClick(event) {
  
      box.setAttribute('style', 'background-color: black;');
    });
  });
}



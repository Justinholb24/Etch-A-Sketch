function makeBlocks() {
    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < 16; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('container').appendChild(row);
    }
}

makeBlocks();

const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.addEventListener('mouseover', function handleClick(event) {
  
      box.setAttribute('style', 'background-color: black;');
    });
  });

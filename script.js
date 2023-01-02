let color = 'black';
const blackPaint = document.querySelector('.black');
blackPaint.classList.add('selected');
createGrid(10);

function createGrid (size) {
    deleteCanvas();
    const canvas = document.querySelector('.canvas');
    let tileDimension = canvas.clientHeight / size;
    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        
        for (let j = 0; j < size; j++) {
            const tile = document.createElement('div')
            tile.classList.add('tile');
            tile.style.height = tileDimension + "px";
            tile.style.width = tileDimension + "px";
            tile.style.backgroundColor = "white";
            rowDiv.appendChild(tile);
        }
        canvas.appendChild(rowDiv);
    }
    
    const tilesList = document.querySelectorAll('.tile');
    tilesList.forEach(tile => tile.addEventListener('mouseover', function (e) {
            colorTile(e, color)
        }));
}

const sizeInput = document.querySelector('#size');
sizeInput.addEventListener('input', () => createGrid(sizeInput.value));

blackPaint.addEventListener('click', function (e) {
    color = 'black';
    blackPaint.classList.add('selected');
    rainbowPaint.classList.remove('selected');
});

const rainbowPaint = document.querySelector('.rainbow');
rainbowPaint.addEventListener('click', function (e) {
    color = 'rainbow';
    rainbowPaint.classList.add('selected');
    blackPaint.classList.remove('selected');
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCanvas);

function clearCanvas() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.style.backgroundColor = 'white');
}

function deleteCanvas() {
    const canvas = document.querySelector('.canvas');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function colorTile(e, color) {
    if (color == 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (color == "rainbow") {
        e.target.style.backgroundColor = randomColor();
    }
}

function randomColor() {
    let newColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + newColor;
}


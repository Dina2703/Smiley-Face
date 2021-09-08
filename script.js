let numberOfFaces = 5;
let count = 0;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
window.addEventListener('load', generateFaces);

function generateFaces() {
    for(let i = 0; i < numberOfFaces; i++){
        const face = document.createElement('img');
        face.src = "img/smile (1).png"
        let randomTop = Math.floor(Math.random() * 400)+ 1;
        let randomLeft = Math.floor(Math.random() * 400)+ 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    count++;
    document.body.addEventListener('click', gameOver);
}
function nextLevel() {
    event.stopPropagation();
    while(theLeftSide.firstChild){
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    numberOfFaces += 5;
    generateFaces();
}

function gameOver() {
    alert('Game Over! You had ' + count + ' attempts.\n\n Press button to restart The Game');
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
}
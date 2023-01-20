// Logic To Add Divs 
let boxes = document.querySelector('#boxinput');
boxes.addEventListener('click', () => {
    boxes = prompt("No of Boxes (0-100)");
    document.getElementById('out').innerHTML = boxes;
    MultipleCaller();
    // sketch();
})

function Divadders() {
    let sketch = document.querySelector('.sketch-container');
    sketch.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`;
    let newParentDiv = document.createElement('div');

    newParentDiv.setAttribute('class', 'grids');
    newParentDiv.style.backgroundColor = 'white';
    newParentDiv.style.border = "1px solid black";
    newParentDiv.style.width = "100%";
    newParentDiv.style.height = "100%";
    const cssTemplateString = ".grids:[hover]{backgroundColor: red}";
    sketch.appendChild(newParentDiv);
}


function MultipleCaller() {
    for (i = 0; i < boxes * boxes; i++) {
        Divadders();
    }
}


// function sketch() {
//     let box = document.querySelector('.grids');
//     box.addEventListener('mouseover', (event) => {
//         event.target.style.backgroundColor = "red";
//     })
// }




// Logic To Add Divs 

let boxes = document.querySelector('#boxinput');
boxes.addEventListener('click', () => {
    boxes = prompt("No of Boxes (0-100)");
    document.getElementById('out').innerHTML = boxes;
    Divadders();
})


function Divadder() {
    for (i = 0; i <= boxes; i++) {
        let sketch = document.querySelector('.sketch-container');
        let newParentDiv = document.createElement('div');
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'white';
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.border = "1px solid black";
        newParentDiv.style.backgroundColor = 'white';
        newParentDiv.style.width = "100%";
        newParentDiv.style.height = "100%";
        newParentDiv.style.border = "1px solid black";
        newParentDiv.appendChild(newDiv);
        sketch.appendChild(newParentDiv);
    }
}


function Divadders() {
    for (i = 0; i <= boxes; i++) {
        let sketch = document.querySelector('.sketch-container');
        let newParentDiv = document.createElement('div');
        sketch.appendChild(newParentDiv);
    }
    console.log(newParentDiv)
}


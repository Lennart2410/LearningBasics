const shapeArray = ["rectangle","circle", "square"];
const colorArray =["green", "red", "yellow", "blue"]

const shouldChangePosition = true;
const shouldChangeLook = true;

function doSomethingWithObject(){
    const movingObject = document.querySelector("#moving-object");

    if(shouldChangePosition)
        changePosition(movingObject);
    if(shouldChangeLook)
        changeLook(movingObject);
}

function changePosition(movingObject){
    const browserWidth = document.querySelector('body').offsetWidth;
    const browserHeight = document.querySelector('body').offsetHeight;
    movingObject.style.top = Math.random() * (browserHeight - movingObject.getBoundingClientRect().height) + "px";
    movingObject.style.left = Math.random() * (browserWidth - movingObject.getBoundingClientRect().width) + "px";
}

function changeLook(movingObject){
    const randomShape = Math.floor(Math.random() * shapeArray.length);
    const randomColor = Math.floor(Math.random() * colorArray.length);
    movingObject.className = "moving-object" + " " + shapeArray[randomShape] + " " + colorArray[randomColor]
}
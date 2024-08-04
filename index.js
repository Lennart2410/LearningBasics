const shapeArray = ["rectangle","circle", "square"];
const colorArray =["green", "red", "yellow", "blue"]

function moveObject(){
    const browserWidth = document.querySelector('body').offsetWidth;
    const browserHeight = document.querySelector('body').offsetHeight;
    const movingObject = document.querySelector("#moving-object");

    movingObject.style.top = Math.random() * (browserHeight - movingObject.getBoundingClientRect().height) + "px";
    movingObject.style.left = Math.random() * (browserWidth - movingObject.getBoundingClientRect().width) + "px";

    const randomShape = Math.floor(Math.random() * shapeArray.length);
    const randomColor = Math.floor(Math.random() * colorArray.length);
    movingObject.className = "moving-object" + " " + shapeArray[randomShape] + " " + colorArray[randomColor]
}
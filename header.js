'use strict';

import context from "./context/context.js";
// import * as Utils from "./context/utils.js";


const width = context.canvas.width;
const height = context.canvas.height;

let movingMouse = true;


// XposMouse for changing the color
let XposMouse = [];
// YposMouse for changing the amplitude
let YposMouse = [];

drawBackground();


document.onmousemove = moveMouse;

function moveMouse(e) {


}

function drawBackground() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);


    context.beginPath();
    context.fillStyle = "white"
    context.font = "bold 60pt Arial";
    context.fillText("Jari Miers", width / 2 - 200, height / 2);

}
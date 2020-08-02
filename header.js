'use strict';

import context from "./context/context.js";
// import * as Utils from "./context/utils.js";


const width = context.canvas.width;
const height = context.canvas.height;

let movingMouse = true;

drawBackground();


document.onmousemove = moveMouse;

function moveMouse(e) {


}

function drawBackground() {

    context.fillStyle = "black"
    context.font = "bold 60pt Arial";
    context.fillText("Jari Miers", width / 2 - 200, 250);

}
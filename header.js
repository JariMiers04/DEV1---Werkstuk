'use strict';

import context from "./context/context.js";
import * as Utils from "./context/utils.js";


const width = context.canvas.width;
const height = context.canvas.height;

let movingMouse = true;
let space = 200;


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
    let Yrandom = Utils.randomNumber(2, 10);

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < Yrandom; j++) {
            context.fillStyle = 'red';
            context.fillRect((0 + space) + i * space, (height - 40) - j * 40, 100, 20);
        }
    }

    context.fillStyle = "white"
    context.font = "bold 60pt Arial";
    context.fillText("Jari Miers", width / 2 - 200, height / 2);
    requestAnimationFrame(drawBackground);

}
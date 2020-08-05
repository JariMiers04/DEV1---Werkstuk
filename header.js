// http://www.javascriptkit.com/javatutors/requestanimationframe.shtml#:~:text=Slowing%20down%20or%20cancelling%20requestAnimationFrame()&text=If%20your%20animation%20requires%20a,calling%20requestAnimationFrame%20inside%20setTimeout()%20.
// link how to delay requestAnimationFrame();

"use strict";
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;


let fps = 12;
let space = 200;
let counter = 10;

// xPosMouse for changing the color
let xPosMouse = [];



drawBackgroundAnimation();

document.onmousemove = moveMouse;

function moveMouse(e) {
    let mouse = {
        y: e.pageY
    };
    xPosMouse.push(mouse);
    for (let i = 0; i < xPosMouse.length; i++) {
        let mouseInfoArray = xPosMouse[i];
    }
    if (e.pageY > 600 && e.pageY > height && counter >= 3) {
        counter -= 0.2;
    } else if (e.pageY < 600 && e.pageY > 0 && counter <= 15) {
        counter += 0.2;
    }
    console.log(counter);
}

function drawBackgroundAnimation() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 8; i++) {
        let Yrandom = Utils.randomNumber(1, counter);
        context.fillStyle = 'red';
        for (let j = 0; j < 20; j++) {
            context.fillRect(0 + space + i * space, height - 40 - j * 40, 100, 20);
            if (j === Yrandom) {
                break;
            }
        }
    }

    context.fillStyle = "white";
    context.font = "bold 60pt Arial";
    context.fillText("Jari Miers", width / 2 - 200, height / 2);
    setTimeout(() => {
        requestAnimationFrame(drawBackgroundAnimation);
    }, 1000 / fps);
}
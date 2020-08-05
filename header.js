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
let xPosMouse = 0;


drawBackgroundAnimation();

document.onmousemove = moveMouse;

function moveMouse(e) {

    xPosMouse = e.pageX;

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
        if (xPosMouse > 0 && width / 2) {
            context.fillStyle = Utils.hsl(0 * 360, 100, 50);
        } else if (xPosMouse > width / 2 && xPosMouse < width) {
            context.fillStyle = Utils.hsl(100 * 360, 100, 50);
        }
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
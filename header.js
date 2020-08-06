// http://www.javascriptkit.com/javatutors/requestanimationframe.shtml#:~:text=Slowing%20down%20or%20cancelling%20requestAnimationFrame()&text=If%20your%20animation%20requires%20a,calling%20requestAnimationFrame%20inside%20setTimeout()%20.
// link how to delay requestAnimationFrame();

"use strict";
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

// slower animation
const fps = 12;
// space between rect (music bars)
const space = 200;

// counter for the amplitude
let counter = 10;

// background animation change every 15 frames
let colors = ['black', 'red', 'green', 'blue', 'purple', 'brown'];
let frameCounter = 0;
let backgroundColor = 'black';

// xPosMouse for changing the color
let xPosMouse = 0;
let colorMultiplier = width / 360;


drawBackgroundAnimation();

document.onmousemove = moveMouse;

function moveMouse(e) {
    xPosMouse = e.pageX;

    if (e.pageY > 600 && e.pageY > height && counter >= 2) {
        counter -= 0.5;
    } else if (e.pageY < 600 && e.pageY > 0 && counter <= 15) {
        counter += 0.2;
    }
    // console.log(counter);
}

function drawBackgroundAnimation() {
    if (frameCounter === 15) {
        backgroundColor = colors[Utils.randomNumber(0, colors.length - 1)];
        frameCounter = 0;
    }
    context.fillStyle = backgroundColor;
    console.log(backgroundColor);
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 8; i++) {
        let Yrandom = Utils.randomNumber(1, counter);
        context.fillStyle = Utils.hsl(xPosMouse / colorMultiplier, 100, 50);
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
    frameCounter++;
    setTimeout(() => {
        requestAnimationFrame(drawBackgroundAnimation);
    }, 1000 / fps);
}
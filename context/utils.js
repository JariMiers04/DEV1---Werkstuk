'use strict';

import context from "../context/context.js";
/**
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
    return 'hsl(' + h + "," + s + "%," + l + '%)';
}

export function hsla(h, s, l, a) {
    return 'hsl(' + h + "," + s + "%," + l + '%)' + a + "%)";
}





/**
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
    return 'rgb(' + r + "," + g + "," + b + ')';
}

export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}

export function fillEllipse(x, y, radiusX, radiusY) {
    context.beginPath();
    context.ellipse(x, y, radiusX, radiusY, 0, 0, degrees(360));
    context.fill();
}

export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}

/**
 * returns a random value between two numbers
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Main CSS
require('./app.scss');

import Point from './js/es6'

// Test for ES6
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(`Test ES6 Distance: ${Point.distance(p1, p2)}`);
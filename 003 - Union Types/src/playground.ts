
import * as Shapes from "./shapes";
import { area } from "./area";

const circle = Shapes.createCircle(5);
const rectangle = Shapes.createRectangle(10, 5);
const triangle = Shapes.createTriangle(3, 3, 3);
const square = Shapes.createSquare(4);

const hexagon = Shapes.createHexagon(3);

console.clear();

console.log(`area(${JSON.stringify(circle)}) = ${area(circle)}`);

console.log(`area(${JSON.stringify(rectangle)}) = ${area(rectangle)}`);

console.log(`area(${JSON.stringify(triangle)}) = ${area(triangle)}`);

console.log(`area(${JSON.stringify(square)}) = ${area(square)}`);

// console.log(`area(${JSON.stringify(hexagon)}) = ${area(hexagon)}`);



import * as Shapes from "./shapes";

function exhaustCheck(arg: never) {
    throw `Invalid shape: ${JSON.stringify(arg)}`;
}

export function area(shape: Shapes.Shape) {
    switch (shape.kind) {
        case Shapes.circle:
            return Math.PI * Math.pow(shape.radius, 2);
        case Shapes.rectangle:
            return shape.length * shape.width;
        case Shapes.triangle:
            const s = (shape.a + shape.b + shape.c) / 2;
            return Math.sqrt(s * (s - shape.a) * (s - shape.b) * (s - shape.c));
        case Shapes.square:
            return Math.pow(shape.side, 2);
        // case Shapes.hexagon:
        //     return 1.5 * Math.sqrt(3) * Math.pow(shape.side, 2);
    }

    exhaustCheck(shape);
}

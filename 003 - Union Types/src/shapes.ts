
// Shapes

export const circle = 'circle';
export type Circle = {
    kind: typeof circle;
    radius: number;
}

export const rectangle = 'rectangle';
type Rectangle = {
    kind: typeof rectangle;
    length: number;
    width: number;
}

export const triangle = 'triangle';
type Triangle = {
    kind: typeof triangle;
    a: number;
    b: number;
    c: number;
}

export const square = 'square';
type Square = {
    kind: typeof square;
    side: number;
}


export const hexagon = 'hexagon';
type Hexagon = {
    kind: typeof hexagon;
    side: number;
}

// Shape
export type Shape = Circle | Rectangle | Triangle | Square;
// export type Shape = Circle | Rectangle | Triangle | Square | Hexagon;

// factories
export function createRectangle(length: number, width: number): Rectangle {
    return {
        kind: rectangle,
        length,
        width
    };
}

export function createCircle(radius: number): Circle {
    return {
        kind: circle,
        radius
    };
}

export function createTriangle(a: number, b: number, c: number): Triangle {
    return {
        kind: triangle,
        a,
        b,
        c
    };
}

export function createSquare(side: number): Square {
    return {
        kind: square,
        side
    };
}

export function createHexagon(side: number): Hexagon {
    return {
        kind: hexagon,
        side
    }
}


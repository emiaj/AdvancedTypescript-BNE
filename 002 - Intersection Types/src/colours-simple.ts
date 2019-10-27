namespace ColoursSimple {

    type R = { R: number };
    type G = { G: number };
    type B = { B: number };
    type RGB = R & G & B;

    const red: RGB = {
        R: 255,
        G: 0,
        B: 0
    }

    const invalidColour: RGB = {
        R: -1,
        G: 10000,
        B: -123
    }
}

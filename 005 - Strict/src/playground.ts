// strict null checking
let word1: string;
let word2: string | undefined;
let word3: string | undefined | null;

word1 = 'hello world';
word1 = null;
word1 = undefined;

word2 = 'hello world';
word2 = null;
word2 = undefined;

word3 = 'hello world';
word3 = null;
word3 = undefined;


// strict property initialisation
// 1: Undefined union
// 2: Constructor
// 3: Init
class Person {
    name: string;
}

const person = new Person();
const personName = person.name.toUpperCase();


// strictFunctionTypes
// strict bind, call and apply

function sum(a: number, b: number): number {
    return a + b;
}

// too few args
let a = sum.call(undefined, 1);
a = sum.bind(undefined)(1);
a = sum.apply(undefined, [1]);

// invalid arg type
let b = sum.call(undefined, 1, 'foo');
b = sum.bind(undefined)(1, 'foo');
b = sum.apply(undefined, [1, 'foo']);

// too many args
let c = sum.call(undefined, 1, 2, 3);
c = sum.bind(undefined)(1, 2, 3);
c = sum.apply(undefined, [1, 2, 3]);

// ok
let d = sum.call(undefined, 1, 2);
d = sum.bind(undefined)(1, 2);
d = sum.apply(undefined, [1, 2]);

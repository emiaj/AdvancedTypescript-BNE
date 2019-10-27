import { summonSuperhero, Superman, Flash, assertIsSuperman } from './heroes';

const hero = summonSuperhero();

console.clear();

// type cast assertion

// checking for unique field existence
if ((<Superman>hero).flight) {
    // casting again to desired type
    (<Superman>hero).flight()
}

// checking for unique field existence
if ((hero as Flash).runSuperFast) {
    // casting again to desired type
    (hero as Flash).runSuperFast()
}

// checking for unique field existence
if ((<Flash>hero).runSuperFast) {
    // oops, wrong type casting
    // no compile time error
    (<Superman>hero).flight()
}

// instanceof

if (hero instanceof Superman) {
    hero.flight()
}
if (hero instanceof Flash) {
    hero.runSuperFast()
}

if (hero instanceof Flash) {
    // Property 'flight' does not exist on type 'Flash'.
    hero.flight()
}

// runtime type assertion

if (hero.isFlash()) {
    hero.runSuperFast();
}

if (hero.isSuperman()) {
    hero.flight()
}

if (hero.isSuperman()) {
    // Property 'runSuperFast' does not exist on type 'Superman'.
    hero.runSuperFast();
}

// Assert functions

function makeSupermanFlight(obj: unknown) {

    // obj is of type any before this call
    assertIsSuperman(obj);

    // obj is of type Superman after assert call above
    obj.flight();
}

makeSupermanFlight(hero);


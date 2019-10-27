export class Superman {
    flight() {
        console.log('I\'m flying, oh yeah!!!');
    }
    isSuperman(): this is Superman {
        return true;
    }

    isFlash(): this is Flash {
        return false;
    }
}

export class Flash {
    runSuperFast() {
        console.log('I\'m running super fast!!!');
    }
    isSuperman(): this is Superman {
        return false;
    }

    isFlash(): this is Flash {
        return false;
    }
}

export function summonSuperhero(): Superman | Flash {
    if (parseInt(((100 * Math.random()).toFixed(0))) % 2 === 0) {
        return new Flash();
    }
    return new Superman();
}

// Assert functions
// New in 3.7.2
export function assertIsSuperman(value: any, errorMessage = 'Value is not Superman'): asserts value is Superman {
    if (value instanceof Superman) {
        return;
    }
    throw new Error(errorMessage);
}
console.clear();

// optional chaining - field access

type Foo = {
    bar?: {
        baz?: string
    }
}
function printBazLength(foo?: Foo) {
    const length = foo?.bar?.baz?.length;

    console.log('length is: ' + length);
}

printBazLength(undefined);
printBazLength({ bar: undefined });
printBazLength({ bar: { baz: "" } });
printBazLength({ bar: { baz: 'Typescript is great' } });


// optional chaining - index access
function printFirstElement<T>(arr?: T[]) {
    console.log('First element is: ' + arr?.[0]);
}

printFirstElement(undefined);
printFirstElement([1]);


// optional chaining - function invocation
function doStuffs(log?: (msg: string) => void) {
    log?.('Doing stuffs...');

    // do stuffs here
}


doStuffs(undefined);
doStuffs(console.log);


// null coalescing

type PlayerSettings = {
    volume?: number
}

function printVolume(settings: PlayerSettings) {
    const volume = settings.volume ?? 0.5;

    console.log('Volume value is: ' + volume);
}

printVolume({ volume: undefined });
printVolume({ volume: 0 });
printVolume({ volume: 5 });


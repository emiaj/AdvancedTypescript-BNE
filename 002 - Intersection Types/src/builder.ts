
class Builder<T> {
    constructor(private obj: T) {
    }

    extend<E>(extension: E): Builder<T & E> {
        return new Builder({ ...this.obj, ...extension });
    }

    build(): T {
        return { ...this.obj };
    }
}

export function builder() {
    return new Builder({});
}

export function builderFrom<T>(value: T) {
    return new Builder(value);
}

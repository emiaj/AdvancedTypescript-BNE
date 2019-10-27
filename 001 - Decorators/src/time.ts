
export function time(clazz: Function,
    methodName: string,
    descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    if (originalMethod) {

        descriptor.value = function (...args: any[]) {

            const signature = `${clazz.name}.${methodName}(${args})`;

            console.time(signature);

            const result = originalMethod.apply(clazz, args);

            console.timeEnd(signature);

            return result;
        };
    }

    return descriptor;
}
import { Company } from "./domain";

export function printCompanyProp(instance: Company, property: 'name' | 'numberOfEmployees') {
    console.log(instance[property]);
}

export function setCompanyProp(instance: Company, property: 'name' | 'numberOfEmployees', value: string | number) {
    if (property === 'name' && typeof value === 'string') {
        instance[property] = value;
    }
    else if (property === 'numberOfEmployees' && typeof value === 'number') {
        instance[property] = value;
    }
    else {
        throw 'Invalid property/value pair';
    }
}

// same print/set pair of functions for Employee
// not very scalable
// hard to maintain and error prone


// enter keyof

export function printProp<T, K extends keyof T>(instance: T, property: K) {
    console.log(instance[property]);
}

export function setProp<T, K extends keyof T, V extends T[K]>(instance: T, property: K, value: V) {
    instance[property] = value;
}


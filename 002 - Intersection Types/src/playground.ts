
import { builder } from "./builder";

interface Presenter {
    givenName: string;
    familyName: string;
    age: number;
    conference: string;
}

const instance: Presenter = builder()
    // Builder<{givenName:string}>
    .extend({ givenName: 'Jane' })
    // Builder<{givenName:string} & {familyName:string}>
    .extend({ familyName: 'Doe' })
    // Builder<{givenName:string} & {familyName:string} & {age:number}>
    .extend({ age: 28 })
    // {givenName:string} & {familyName:string} & {age:number}
    .extend({ conference: 'DDD Brisbane' })
    .build();

console.clear();

console.log(instance);




import { Company, Employee } from "./domain";
import { printProp, setProp } from './helpers'


const company: Company = {
    name: 'Acme',
    numberOfEmployees: 100,
};

const employee: Employee = {
    name: 'John Doe',
    age: 24
};

printProp(company, 'name');
printProp(company, 'employees'); // uh?

printProp(employee, 'name');
printProp(employee, 'salary'); // uh?


setProp(company, 'name', 'Company X');
setProp(company, 'numberOfEmployees', '100'); // uh?

setProp(employee, 'name', 'Jane Doe');
setProp(employee, 'salary', 28); // uh?
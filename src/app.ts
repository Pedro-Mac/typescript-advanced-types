// Code goes here!
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date; //type as well
}

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Pedro',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinale = string | number;
type Numeric = number | boolean;

type Universal = Combinale & Numeric;

//Function Overloads => ensures what is the returned value depending on the input types
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinale, b: Combinale) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Pedro', 'Mac');

const fetchedUserData = {
  id: 'u1',
  name: 'Rex',
  job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData.job.title);

type UnknownEmployee = Employee | Admin;

//TYPEGUARDS
const printEmployee = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  /*CHECK IF emp HAS THE PROPERTY privileges*/
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  /*CHECK IF emp HAS THE PROPERTY startDate*/
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
};

printEmployee({ name: 'Manuel', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving');
  }
}
class Ship {
  drive() {
    console.log('Sailing');
  }

  loadCargo(amount: number) {
    console.log(`Loaded cargo: ${amount}`);
  }
}

type Vehicle = Car | Ship;

const v1 = new Car();
const v2 = new Ship();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Ship) {
    vehicle.loadCargo(2000);
  }
};

useVehicle(v1);
useVehicle(v2);

//DISCRIMINATED UNIONS
interface Bird {
  type: 'bird'; //this is a literal type => type string with value 'bird'
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case 'bird':
      console.log('Moving at speed: ' + animal.flyingSpeed);
      break;
    case 'horse':
      console.log('Moving at speed: ' + animal.runningSpeed);
      break;
    default:
      console.log('Something is wrong');
  }
};

moveAnimal({ type: 'bird', flyingSpeed: 100 });

//INDEX TYPES => ALLOWS TO CREATE OBJECTS WHICH ARE MORE FLEXIBLE WITH THE PROPERTIES THEY MIGHT HOLD
//i.e. To make it reusable with different forms, with different information
interface ErrorContainer {
  id: string; // type must be the same as the one in the prop
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: 'id1',
  email: 'Not a valid email'
};

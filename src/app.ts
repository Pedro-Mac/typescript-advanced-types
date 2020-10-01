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

const add = (a: Combinale, b: Combinale) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

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

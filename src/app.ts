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

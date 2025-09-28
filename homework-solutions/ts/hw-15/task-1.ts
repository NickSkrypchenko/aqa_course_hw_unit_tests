/*
Task 1
1.	Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
*/
interface IEmployee {
	name: string;
	salary: number;       
  	isManager: boolean;
}

const QA: IEmployee = {
	name: "Peter",
	salary: 1000,
	isManager: true,
};
/*
2.	Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyOf
*/
type EmployeeKeys = keyof IEmployee;
/*
3.	Создайте тип QaKeys, который будет содержать лишь ключи объекта QA (использовать keyOf и typeof)
*/
type QaKeys = keyof typeof QA;
/*
4.	Создайте тип UserType из объекта QA (используйте typeof)
*/
type UserType = typeof QA;
/*
5.	Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
*/
type OptionalEmployee = Partial<IEmployee>;
/*
6.	Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
*/
type EmployeeNameSalary = Pick<IEmployee, "name" | "salary">;
/*
7.	Создайте тип, который держит все поля из интерфейса IEmployee, кроме isManager
*/
type EmployeeWithoutManager = Omit<IEmployee, "isManager">;
/*
8.	Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
*/
type ReadonlyEmployee = Readonly<IEmployee>;
/*
9.	Создайте объект с помощью Record, в ключах которого будут строки, а в значениях – ключи объекта QA (Используйте Record, keyof, typeof)
*/
const recordObj: Record<string, keyof typeof QA> = {
  one: "name",
  two: "salary",
  three: "isManager",
};

/*
Task 1-2
Необходимо создать классовую структуру:
	1.	Создайте интерфейс IVehicle:
Методы:
	•	getDetails(): string – возвращает информацию о транспортном средстве.
	•	start(): string – возвращает строку "The vehicle is starting".
	2.	Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
Реализуйте конструктор с полями:
	•	make (строка)
	•	model (строка)
Добавьте методы:
	•	start, возвращающего строку: "The vehicle {make} {model} is starting."
	•	Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.
	3.	Создайте класс Car, который наследует Vehicle:
	•	Добавляет поле year (число).
	•	Реализует метод getDetails, возвращающего строку: "{make} {model}, {year}".
	4.	Создайте объект класса Car и проверьте работоспособность.
*/

interface IVehicle {
  getDetails(): string;
  start(): string;
}
abstract class Vehicle implements IVehicle {
  constructor(public make: string, public model: string) {}

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }

  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    public year: number
  ) {
    super(make, model);
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const myCar = new Car("Mazda", "3", 2014);

//test
console.log(myCar.start());
console.log(myCar.getDetails());
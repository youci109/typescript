//================================================================================
//================================================================================
class Point {
    x: number=1;
    y: number=2;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
//================================================================================
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string="Hello1";
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// console.log(greeterMaker.standardGreeting);
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
//================================================================================
// 构造函数 我们可以认为类具有 实例部分与 静态部分这两个部分。
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());

//================================================================================
// 抽象类
// abstract class Department {

//     constructor(public name: string) {
//     }

//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }

//     abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }

//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }

//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

//================================================================================
// 静态成员变量
// class Grid {
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(Grid.origin);
//================================================================================
// get/set 只有在es5及以上编译才有，只有get没有set属性才会自动被推断为readonly
// let passcode = "secret passcodse";

// class Employee {
//     private _fullName: string = "abc";

//     get fullName(): string {
//         return this._fullName;
//         console.log("get");
//     }

//     set fullName(newName: string) {
//         console.log("set");
        
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }


//================================================================================

// class Employee {
//     fullName: string = "12";
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }else{
//     console.log(employee.fullName);
// }


//================================================================================
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
//     }
// }
// const a = new Octopus("abc");
// console.log(a.name);

//================================================================================
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// // console.log(howard.name); // 错误
//================================================================================
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { console.log(start);};
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;


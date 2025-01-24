// import "reflect-metadata";

// function column() {
//   return function (target, key, descriptor) {
//     console.log("column");
//   };
// }

// function column2() {
//   return function (target, key, descriptor) {
//     console.log("column2");
//   };
// }

// class User {
//   @column2()
//   @column()
//   username: number;
// }

class MathOperation {
  @validateParam(0, 10)
  multiply(a: number, b: number) {
    console.log(a * b);
  }

  @validateParam(0, 10) // parameterized decorator
  add(a: number, b: number) {
    console.log(a + b);
  }
}

function validateParam(min: number, max: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("descritpor", descriptor);
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      for (let i of args) {
        if (i < min || i > max) {
          throw new Error(`Parameters must be between ${min} and ${max}`);
        }
      }
      return originalMethod.apply(this, args);
    };
  };
}

const mathOperation = new MathOperation();
mathOperation.multiply(2, 50);

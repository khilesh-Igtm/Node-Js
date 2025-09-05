class Student {
  constructor(name) {
    this.name = name;  // yaha this -> current object
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const s1 = new Student("Rahul");
s1.greet();  // Hello, my name is Rahul

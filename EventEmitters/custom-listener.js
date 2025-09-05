const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input) => {
  console.log(`Greeting event`, input);
});

myCustomEmitter.greet("Khileshh Singh Bhakuni");


// Poora Flow samajh le 👇

// Class banayi jo EventEmitter se inherit karti hai.

// Ek greet method banaya jo "greeting" event emit karta hai.

// Listener lagaya "greeting" ke liye.

// Jab greet("Sangam Mukherjee") call kiya → event emit hua → listener trigger hua → message console pe print ho gaya.
const fs = require("fs");

// example of callback function as person is a fucntion which is take another function address as an argument

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log("India");
}

person("Khieshh Singh Bhakuni", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  console.log(data);
});
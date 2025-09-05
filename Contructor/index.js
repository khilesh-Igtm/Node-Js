// constructor ka role

// Jab tu class banata hai aur new keyword use karke uska object banata hai, to sabse pehle constructor call hota hai.

// Constructor object ki initial properties set karne ke liye hota hai.

class Student {
  constructor(name) {
    this.name = name;
  }
}
const s1 = new Student("Rahul");
console.log(s1.name); // Rahul



// Use of super() keyword

// super() kyu zaruri hai?

// Jab tu apni child class me constructor banata hai, to sabse pehle parent ka constructor run karna padta hai.

// Ye kaam super() karta hai → parent (EventEmitter) ka constructor call karta hai.

// Agar tu super() nahi likhega to JavaScript bolega:

// ❌ Error: Must call super constructor in derived class before accessing 'this'.

// Kyunki bina parent ka setup hua, child ka this object valid hi nahi banta.
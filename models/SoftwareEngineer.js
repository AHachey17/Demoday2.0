const mongoose = require("mongoose");

const SoftwareEngineerSchema = new mongoose.Schema({
  0: {
    question: {
      type: String,
      default: "What is object-oriented programming (OOP)?"
    },
    answer: {
      type: String,
      default: "Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. It emphasizes encapsulation, inheritance, and polymorphism to structure and design software applications."
    }
  },
  1: {
    question: {
      type: String,
      default: "What are the differences between var, let, and const?"
    },
    answer: {
      type: String,
      default: "In JavaScript, 'var' is function-scoped, 'let' and 'const' are block-scoped. 'var' allows redeclaration and reassignment, 'let' allows reassignment but not redeclaration, and 'const' does not allow reassignment or redeclaration once a value is assigned."
    }
  },
  2: {
    question: {
      type: String,
      default: "Explain the concept of prototypal inheritance in JavaScript"
    },
    answer: {
      type: String,
      default: "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. Each object has a prototype object, and if a property or method is not found in the current object, JavaScript will look up the prototype chain until it finds the desired property or method."
    }
  },
  3: {
    question: {
      type: String,
      default: "What is a closure in JavaScript?"
    },
    answer: {
      type: String,
      default: "A closure is a function that has access to variables from its outer function, even after the outer function has finished executing. It 'closes over' the variables, preserving their values. Closures are commonly used to create private variables and implement data hiding in JavaScript."
    }
  },
  4: {
    question: {
      type: String,
      default: "What is the event loop in JavaScript and how does it work?"
    },
    answer: {
      type: String,
      default: "The event loop is a mechanism in JavaScript that allows asynchronous operations to be executed non-blockingly. It manages the execution of code by constantly checking for tasks in the event queue. When the call stack is empty, the event loop takes the next task from the queue and pushes it onto the call stack for execution."
    }
  },
  5: {
    question: {
      type: String,
      default: "What are promises in JavaScript?"
    },
    answer: {
      type: String,
      default: " Promises are objects in JavaScript used to handle asynchronous operations. They represent the eventual completion (or failure) of an asynchronous operation and allow you to write asynchronous code in a more readable and manageable way, using methods such as .then() and .catch()."
    }
  },
  6: {
    question: {
      type: String,
      default: "Explain the concept of RESTful APIs."
    },
    answer: {
      type: String,
      default: " RESTful APIs (Representational State Transfer) are a set of architectural principles and guidelines for designing networked applications. They use HTTP methods (such as GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. RESTful APIs are stateless, meaning the server does not store information about the client's state between requests"
    }
  },
  7: {
    question: {
      type: String,
      default: "What is the purpose of the 'use strict' directive in JavaScript?"
    },
    answer: {
      type: String,
      default: "The 'use strict' directive enables strict mode in JavaScript, which enforces stricter rules and provides better error handling. It helps prevent the use of undeclared variables, eliminates some JavaScript silent errors, and makes the code more secure and optimized."
    }
  },
  8: {
    question: {
      type: String,
      default: "What is the difference between synchronous and asynchronous programming?"
    },
    answer: {
      type: String,
      default: "Synchronous programming executes tasks in sequential order, blocking further execution until the current task is completed. Asynchronous programming allows tasks to be executed independently, without blocking other tasks. It uses callbacks, promises, or async/await to handle the completion of asynchronous operations."
    }
  },
  9: {
    question: {
      type: String,
      default: "What are some common design patterns in software development?"
    },
    answer: {
      type: String,
      default: "Some common design patterns in software development include the Singleton pattern, Factory pattern, Observer pattern, Strategy pattern, and MVC (Model-View-Controller) pattern. Design patterns provide reusable solutions to common problems and promote code organization, maintainability, and flexibility."
    }
  },
  10: {
    question: {
      type: String,
      default: "What is the purpose of testing in software development?"
    },
    answer: {
      type: String,
      default: "Testing in software development is performed to identify and fix defects, validate that the software meets requirements, and ensure its quality and reliability. Testing helps uncover bugs"
    }
  },
  11: {
    question: {
      type: String,
      default: "What is the difference between unit testing and integration testing?"
    },
    answer: {
      type: String,
      default: "Unit testing focuses on testing individual units of code (e.g. functions, methods), while integration testing focuses on testing how different units of code work together to form a larger system."
    }
  },
  12: {
    question: {
      type: String,
      default: "How do you handle errors and exceptions in JavaScript?"
    },
    answer: {
      type: String,
      default: "Errors and exceptions can be handled using try-catch blocks, which allow developers to catch and handle errors without causing the program to crash."
    }
  },
  13: {
    question: {
      type: String,
      default: "What is the purpose of version control systems like Git?"
    },
    answer: {
      type: String,
      default: "Version control systems like Git allow developers to track changes to code over time, collaborate with other developers, and revert to previous versions of code if necessary."
    }
  },
  14: {
    question: {
      type: String,
      default: "What is the difference between HTTP and HTTPS?"
    },
    answer: {
      type: String,
      default: "HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting data over the internet, while HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that uses encryption to protect data in transit."
    }
  },
  15: {
    question: {
      type: String,
      default: "Explain the concept of virtual DOM and how it improves performance in web development."
    },
    answer: {
      type: String,
      default: "The virtual DOM is a technique used in web development frameworks like React to improve performance by minimizing the number of updates made to the actual DOM (Document Object Model) of a web page. Instead, updates are made to a virtual representation of the DOM, which is then compared to the actual DOM to determine which updates need to be made."
    }
  }
  
});

module.exports = mongoose.model("SoftwareEngineer", SoftwareEngineerSchema);

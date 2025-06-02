class Example {
  greet(name) {
    return `Hello, ${name}`;
  }
}

function logMethod(originalMethod) {
  return function (...args) {
    console.log(`Calling with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Returned:`, result);
    return result;
  };
}

const e = new Example();

e.greet = logMethod(e.greet);

e.greet("Alice");

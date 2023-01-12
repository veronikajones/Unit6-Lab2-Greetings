// import { Greeter, JavaScriptGreeter } from "./greetings";
// const { HtmlGreeter } = require("../HtmlGreeter");
const {
  Greeter,
  JavaScriptGreeter,
  LoudGreeter,
  HtmlGreeter,
} = require("./greetings");

describe("Greeter tests", () => {
  test("Greeting for first name Mark", () => {
    let testGuest = new Greeter("Hello");

    let greeting = testGuest.greet("Mark");

    expect(greeting).toBe("Hello, Mark!");
  });
  test("Greeting for full name Mark Young", () => {
    let testGuest2 = new Greeter("Hello");

    let greeting2 = testGuest2.greet("Mark Young");

    expect(greeting2).toBe("Hello, Mark Young!");
  });

  test("Greeting for company name Align Communities", () => {
    let testGuest3 = new Greeter("Hello");

    let greeting3 = testGuest3.greet("Align Communities");

    expect(greeting3).toBe("Hello, Align Communities!");
  });
});

describe("JavaScriptGreeter tests", () => {
  test("Greeting for first name Mark", () => {
    let testGuest = new JavaScriptGreeter("Hello,");

    let greeting = testGuest.greet("Mark");

    expect(greeting).toBe(console.log("Hello, Mark!"));
  });
  test("Greeting for full name Mark Young", () => {
    let testGuest2 = new JavaScriptGreeter("Hello");

    let greeting2 = testGuest2.greet("Mark Young");

    expect(greeting2).toBe(console.log("Hello, Mark Young!"));
  });

  test("Greeting for company name Align Communities", () => {
    let testGuest3 = new JavaScriptGreeter("Hello");

    let greeting3 = testGuest3.greet("Align Communities");

    expect(greeting3).toBe(console.log("Hello, Align Communities!"));
  });
});

describe("LoudGreeter tests", () => {
  test("Greeting for first name Mark", () => {
    let testGuest = new LoudGreeter("Hello");
    testGuest.addVolume();
    testGuest.addVolume();
    let greeting = testGuest.greet("Mark");

    expect(greeting).toBe("Hello, Mark!!!");
  });
  test("Greeting for full name Mark Young", () => {
    let testGuest2 = new LoudGreeter("Hello");
    testGuest2.addVolume();
    let greeting4 = testGuest2.greet("Mark Young");
    expect(greeting4).toBe("Hello, Mark Young!!");
  });

  test("Greeting for company name Align Communities", () => {
    let testGuest3 = new LoudGreeter("Hello");

    let greeting3 = testGuest3.greet("Align Communities");

    expect(greeting3).toBe("Hello, Align Communities!");
  });
});
describe("HTMLGreeter tests", () => {
  test("Greeting for first name Mark", () => {
    let testGuest = new HtmlGreeter("Hello", "h1");

    let greeting = testGuest.greet("Mark");

    expect(greeting).toBe("<h1>Hello, Mark!</h1>");
  });
  test("Greeting for full name Mark Young", () => {
    let testGuest2 = new HtmlGreeter("Hello", "p");

    let greeting2 = testGuest2.greet("Mark Young");

    expect(greeting2).toBe("<p>Hello, Mark Young!</p>");
  });

  test("Greeting for company name Align Communities", () => {
    let testGuest3 = new HtmlGreeter("Hello");

    let greeting3 = testGuest3.greet("Align Communities");

    expect(greeting3).toBe("<h1>Hello, Align Communities!</h1>");
  });
});

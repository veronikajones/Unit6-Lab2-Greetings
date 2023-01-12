class Greeter {
  greeting: string;
  // name: string;

  // constructor(greeting: string, name:string) {
  constructor(greeting: string) {
    // this.greeting = "Hello";
    this.greeting = greeting;
    // this.name = name;
  }
  greet(name: string): any {
    return `${this.greeting}, ${name}!`;
  }
}

class JavaScriptGreeter extends Greeter {
  greet(name: string): any {
    console.log(this.greeting + "," + name + " !");
  }
}

class LoudGreeter extends Greeter {
  private extra: string = "!";

  greet(name: string): any {
    return `${this.greeting}, ${name}${this.extra}`;
  }

  // constructor(greeting: string, name: string) {
  constructor(greeting: string) {
    // super(greeting, name);
    super(greeting);
  }

  addVolume(): void {
    this.extra += `!`;
  }
}

export class HtmlGreeter extends Greeter {
  tagName: string;

  //   constructor(greeting: string, name: string, tagName: string) {
  constructor(greeting: string, tagName?: string) {
    // super(greeting, name);
    super(greeting);
    // this.tagName = tagName ? tagName: "h1";
    if (tagName) {
      this.tagName = tagName;
    } else {
      this.tagName = "h1";
    }
  }

  greet(name: string): any {
    // const el = document.createElement(this.tagName);

    // el.textContent = `${this.greeting}, ${this.name}!`;
    // el.textContent = `${this.greeting}, ${name}!`;
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
    // console.log(`${el}`);
    // return el;
  }
}

export { Greeter, JavaScriptGreeter, LoudGreeter };

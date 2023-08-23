// class
class Demo {
  // readonly can be initialised during the declaration or in the constructor
  private readonly demoData: string;
  static count: number = 0;
  constructor() {
    this.demoData = "demo data";
  }
  public func1(a: number): void {
    this.demoData = "hello";
    Demo.count = 10;
  }
}

const d = new Demo();
d.func1(2);
console.log(Demo.count);

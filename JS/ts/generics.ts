function computeLength<T>(arr: T[]) {
  console.log("logic here");
}

computeLength<number>([1, 2, 3]);
computeLength<string>(["test", "demo"]);
computeLength<boolean>(["test", "demo"]);

export class NumberArray {
  constructor() {
    this.numberArray = [];
  }

  isNumber(number) {
    return Number.isInteger(Number(number)) && Number(number) >= 0;
  }

  addNumber(number) {
    this.numberArray.push(Number(number));
  }

  getArray() {
    return this.numberArray;
  }
  getSum() {
    return this.numberArray.reduce(
      (acc, curr) => Number(acc) + Number(curr),
      0
    );
  }
}

export class Delimiters {
  constructor() {
    this.delimiterArray = [",", ":"];
  }

  addCustumDelimiter(elimiter) {
    if (!this.delimiterArray.includes(elimiter)) {
      this.delimiterArray.push(elimiter);
    }
  }

  getDelimiterArray() {
    return this.delimiterArray;
  }
}

const makeRational = (numerator = 0, denominator = 1) => {
  return {
    numerator,
    denominator,
    setNumer(val) {
      this.numerator = val;
    },
    setDenom(val) {
      this.denominator = val;
    },
    getNumer() {
      return this.numerator;
    },
    getDenom() {
      return this.denominator;
    },
    toString() {
      return `${this.numerator}/${this.denominator}`;
    },
    add(other) {
      const newNumer = this.numerator * other.getDenom() + this.denominator * other.getNumer();
      const newDenom = this.denominator * other.getDenom();
      return makeRational(newNumer, newDenom);
    }
  };
};

export default makeRational;
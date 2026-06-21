function Money(amount, currency = 'usd') {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.amount;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(targetCurrency) {
  if (this.currency === 'usd' && targetCurrency === 'eur') {
    return new Money(this.amount * 0.7, 'eur');
  }
  if (this.currency === 'eur' && targetCurrency === 'usd') {
    return new Money(this.amount * 1.2, 'usd');
  }
  return new Money(this.amount, targetCurrency);
};

Money.prototype.add = function(otherMoney) {
  const converted = otherMoney.exchangeTo(this.currency);
  return new Money(this.amount + converted.getValue(), this.currency);
};

Money.prototype.format = function() {
  const opts = { style: 'currency', currency: this.currency.toUpperCase() };
  return this.amount.toLocaleString(undefined, opts);
};

export default Money;
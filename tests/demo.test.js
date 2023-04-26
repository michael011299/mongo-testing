const { expect } = require('chai');
const isPrime = require('../math');

describe('Prime Number Testing', () => {
  it('1 should not be prime', () => {
    expect(isPrime(1)).to.be.false;
  });
  it('2 should be prime', () => {
    expect(isPrime(2)).to.be.true;
  });
  it('4 should not be prime', () => {
    expect(isPrime(4)).to.be.false;
  });
  it('17 should be prime', () => {
    expect(isPrime(17)).to.be.true;
  });
  it('99 should not be prime', () => {
    expect(isPrime(99)).to.be.false;
  });
  it('101 should be prime', () => {
    expect(isPrime(101)).to.be.true;
  });
});

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i + 1) {
    if (num % i === 0) return false;
  }
  return true;
};

module.exports = isPrime;

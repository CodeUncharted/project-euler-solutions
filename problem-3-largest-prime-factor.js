function largestPrimeFactor(number) {
  let maxFactor = 1;
  let i = 2;

  while (i * i <= number) {
    if (number % i === 0) {
      maxFactor = i;
      number /= i;
    } else {
      i += 1;
    }
  }

  if (number > 1) {
    maxFactor = number;
  }

  return maxFactor;
}
export const getLastDigit = (id: string) => {
  const digits = id.split("");
  let sum = 0;
  for (let index = 0; index < digits.length; index++) {
    const product = parseInt(digits[index]) * (index % 2 == 0 ? 1 : 2);
    sum += Math.floor(product / 10) + (product % 10);
  }

  return 10 - (sum % 10);
};

import { idNumber } from "../entities/idNumber";
import { dataSource } from "../DB/data-source";

export const getLastDigit = (id: string): string => {
  const digits = id.split("").map((digit) => {
    return parseInt(digit);
  });

  const res = digits.reduce(
    (sum, current, index) => sum + getCurrentValue(current, index)
  );

  return (10 - (res % 10)).toString();
};

const getCurrentValue = (current: number, index: number) => {
  const product = index % 2 == 0 ? current : current * 2;

  return Math.floor(product / 10) + (product % 10);
};

const idRepository = dataSource.getRepository(idNumber);

export const saveIdNumber = async (
  id: string,
  lastDigit: string
): Promise<void> => {
  await idRepository.save({
    id,
    lastDigit,
  });
};
